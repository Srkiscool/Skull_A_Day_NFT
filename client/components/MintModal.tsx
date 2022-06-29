import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Text,
  useToast,
} from '@chakra-ui/react'
import {
  parseTxErrorMessage,
  useReadContract,
  useTypedContract,
  useWallet,
  useWriteContract,
} from '@raidguild/quiver'
import { BigNumber, ContractTransaction, ethers } from 'ethers'
import NextImage from 'next/image'
import { useEffect, useState } from 'react'
import {
  CONTRACT_ADDRESS,
  DEFAULT_CHAIN_ID,
  MAX_SUPPLY,
  SKULL_COST_WEI,
  SUPPORTED_NETWORKS,
  validateBeforeWriting,
} from '../pages/_app'
import skullSvg from '../public/images/skull.svg'
import { SkullADay__factory } from '../types/typechain'

export const MintModal = ({ isOpen, onClose }) => {
  const toast = useToast()

  const { isConnected, address, chainId, connectWallet } = useWallet()

  const MAX_MINT = 3

  const { contract } = useTypedContract(CONTRACT_ADDRESS, SkullADay__factory, {
    staticProvider: {
      enable: true,
      chainId: DEFAULT_CHAIN_ID,
    },
  })
  const [mintAmount, setMintAmount] = useState(1)
  const [txHash, setTxHash] = useState<string | undefined>()
  const { response: nextTokenId } = useReadContract(
    contract,
    'totalSupply',
    [],
    {
      autoUpdateInterval: 5000,
    }
  )
  const totalRemaining = BigNumber.from(MAX_SUPPLY).sub(
    nextTokenId ? nextTokenId.add(1) : BigNumber.from(0)
  )
  const maxMint = totalRemaining?.lte(MAX_MINT)
    ? totalRemaining?.toNumber()
    : MAX_MINT
  const { response: priceAmount } = useReadContract(contract, 'mintPrice', [])
  // Update the mint amount if the total remaining changes.
  useEffect(() => {
    if (maxMint < mintAmount) {
      setMintAmount(maxMint)
    }
  }, [totalRemaining])

  const handleConfirmation = async () => {
    toast({
      status: 'success',
      description: 'Your skulls will be available on opensea in a few minutes.',
    })
  }

  const handleMint = async (response: ContractTransaction) => {
    setTxHash(response.hash)
    console.log('Waiting for transaction to finish')
  }

  const handleError = (error: any) => {
    toast({
      status: 'error',
      description: parseTxErrorMessage(error),
    })
    console.log(error)
  }

  const { mutate: mint } = useWriteContract(contract, 'mint', {
    onConfirmation: handleConfirmation,
    onError: handleError,
    onResponse: handleMint,
  })

  const handleNumberChange = (value) => {
    if (Number.isNaN(value)) setMintAmount(undefined)
    else if (value > 0 && value <= 3) setMintAmount(value)
    else setMintAmount(mintAmount)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg="black"
        borderRadius="none"
        border="4px solid"
        borderColor="brand.gray"
      >
        <ModalHeader bg="brand.gray" color="white" fontSize="sm" p="1">
          MINT-A-SKULL
        </ModalHeader>
        <ModalCloseButton color="white" top="0" right="0" />
        <ModalBody p="8" color="white">
          <Flex gap="8" w="full" justify="space-between">
            <Flex flex="1" gap="4" justify="center" align="center">
              {Array.from({ length: mintAmount }).map((_, i) => (
                <NextImage key={i} src={skullSvg}></NextImage>
              ))}
            </Flex>
            <Flex gap="8" flex="1" direction="column">
              <Box>
                <Text>Select Amount (Max 3)</Text>
                <NumberInput
                  pt="3"
                  min={1}
                  max={3}
                  value={mintAmount ? mintAmount : ''}
                  onChange={(_, value) => handleNumberChange(value)}
                  w="20"
                >
                  <NumberInputField
                    textAlign="center"
                    p="0"
                    bg="white"
                    color="black"
                    height="20"
                    fontSize="64"
                    fontFamily="Skullphabet1"
                  />
                </NumberInput>
                <Text className="text-lg">
                  Estimated cost: Ξ
                  {mintAmount
                    ? ethers.utils.formatEther(SKULL_COST_WEI.mul(mintAmount))
                    : 0}
                  <Text className="text-sm">(gas not included)</Text>
                </Text>
              </Box>
              {totalRemaining?.gt(0) && isConnected && !txHash && (
                <Button
                  className="w-64"
                  onClick={async () => {
                    try {
                      setTxHash('')
                      await validateBeforeWriting(address, chainId)
                      const estimatedGas = await contract!.estimateGas.mint(
                        mintAmount,
                        {
                          value: priceAmount!.mul(mintAmount),
                        }
                      )
                      await mint(mintAmount, {
                        value: priceAmount!.mul(mintAmount),
                        gasLimit: parseInt(
                          (1.2 * estimatedGas.toNumber()).toString()
                        ),
                      })
                    } catch (e) {
                      toast({
                        status: 'error',
                        description: parseTxErrorMessage(e),
                      })
                      console.log(e)
                    } finally {
                      setTxHash('')
                    }
                  }}
                >
                  SKULL ME!
                </Button>
              )}

              {totalRemaining?.gt(0) && !isConnected && (
                <Button className="w-64" onClick={connectWallet}>
                  CONNECT
                </Button>
              )}

              {txHash && (
                <div className="text-lg">
                  Minting..{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-500"
                    href={`${
                      SUPPORTED_NETWORKS[chainId!].explorer
                    }/tx/${txHash}`}
                  >
                    {txHash}
                  </a>
                </div>
              )}

              {totalRemaining?.eq(0) ? (
                <div className="text-lg"> All skulls are sold out</div>
              ) : (
                <div className="text-lg">
                  Only {totalRemaining?.toNumber()} of {MAX_SUPPLY} skulls
                  remain.
                </div>
              )}
              {/* <Button>SKULL ME!</Button> */}
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
