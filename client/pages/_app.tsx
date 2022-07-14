import '../styles/globals.css'
import { NetworkConfig, WalletProvider } from '@raidguild/quiver'
import WalletConnectProvider from '@walletconnect/web3-provider'
import type { AppProps } from 'next/app'
import React from 'react'
import { SWRConfig } from 'swr'
import { IProviderOptions } from 'web3modal'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../utils/theme'
import Fonts from '../components/Fonts'
import { BigNumber } from 'ethers'

export const DEFAULT_CHAIN_ID = '0x1' // Used to switch to if the user is on an unsupported network
export const SKULL_COST_WEI = BigNumber.from('100000000000000000')
export const CONTRACT_ADDRESS = '0x69692f14813B0cc8b8E875179e5C2Ef24d81268D'
export const MAX_SUPPLY = 366

export const SUPPORTED_NETWORKS: NetworkConfig = {
  '0x1': {
    chainId: '0x1',
    name: 'Mainnet',
    symbol: 'ETH',
    explorer: 'https://etherscan.io',
    rpc: 'https://mainnet.infura.io/v3/d370d22545844a79bceed4ac3b4ba397',
  },
  // '0x4': {
  //   chainId: '0x4',
  //   name: 'Rinkeby',
  //   symbol: 'ETH',
  //   explorer: 'https://rinkeby.etherscan.io',
  //   rpc: 'https://rinkeby.infura.io/v3/d370d22545844a79bceed4ac3b4ba397',
  // },
  // '0x539': {
  //   chainId: '0x539',
  //   name: 'Hardhat',
  //   symbol: 'ETH',
  //   explorer: 'http://localhost:1234',
  //   rpc: 'http://localhost:8545',
  // },
}

const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: SUPPORTED_NETWORKS['0x1'].rpc,
        // 4: SUPPORTED_NETWORKS['0x4'].rpc,
        // 1337: SUPPORTED_NETWORKS['0x539'].rpc,
      },
    },
  },
  // .. Other providers
}

const web3modalOptions = {
  cacheProvider: true,
  providerOptions,
  theme: 'dark',
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <WalletProvider
          web3modalOptions={web3modalOptions}
          networks={SUPPORTED_NETWORKS}
          // Optional if you want to auto switch the network
          defaultChainId={DEFAULT_CHAIN_ID}
          // Optional but useful to handle events.
          handleModalEvents={(eventName, error) => {
            if (error) {
              console.error(error.message)
            }

            console.log(eventName)
          }}
        >
          <SWRConfig
            value={{
              fetcher: fetch,
              shouldRetryOnError: false,
              revalidateOnFocus: false,
            }}
          >
            <Component {...pageProps} />
          </SWRConfig>
        </WalletProvider>
      </ChakraProvider>
    </React.StrictMode>
  )
}

export const validateBeforeWriting = async (address: any, chainId: any) => {
  if (!address) {
    throw new Error('Please connect to the wallet before minting')
  }

  if (chainId !== DEFAULT_CHAIN_ID) {
    throw new Error(
      `You are not connected to the ${SUPPORTED_NETWORKS[DEFAULT_CHAIN_ID].name}`
    )
  }
}
