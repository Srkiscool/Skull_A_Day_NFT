import { Button } from '@chakra-ui/react'
import { useWallet } from '@raidguild/quiver'
import { FC } from 'react'

import { formatAddress } from '../utils/methods'
export const ConnectWallet: FC<React.PropsWithChildren<unknown>> = () => {
  const { connectWallet, isConnecting, isConnected, disconnect, address } =
    useWallet()
  return (
    <>
      {!isConnected && (
        <Button
          id="button"
          disabled={isConnecting}
          onClick={() => !isConnected && connectWallet()}
        >
          {isConnecting
            ? 'Connecting...'
            : isConnected
            ? 'Connected'
            : 'Connect'}
        </Button>
      )}
      {isConnected && (
        <div>
          <div>{formatAddress(address)}</div>
          <Button onClick={() => disconnect()}>Disconnect</Button>
        </div>
      )}
    </>
  )
}
