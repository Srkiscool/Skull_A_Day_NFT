import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import { useWallet } from '@raidguild/quiver'
import NextImage from 'next/image'
import { useEffect, useState } from 'react'
import redSkullSvg from '../public/images/redskull.svg'
import skullSvg from '../public/images/skull.svg'
import { MintModal } from './MintModal'

const RotatingSkull = ({ onOpen }) => {
  const { isConnected, connectWallet } = useWallet()
  const [redIndex, setRedIndex] = useState(0)
  // change redIndex every 300ms to animate the red skull
  useEffect(() => {
    const interval = setInterval(() => {
      setRedIndex((redIndex + 1) % 5)
    }, 300)
    return () => clearInterval(interval)
  })
  return (
    <>
      <Flex
        justifyContent={{ base: 'center' }}
        w={{ base: 'full', md: 'fit-content', lg: 'fit-content' }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <NextImage
            key={i}
            src={redIndex === i ? redSkullSvg : skullSvg}
          ></NextImage>
        ))}
      </Flex>
      {!isConnected ? (
        <Button className="w-64" onClick={connectWallet}>
          CONNECT
        </Button>
      ) : (
        <Button onClick={onOpen}>MINT-A-SKULL</Button>
      )}

      <Flex
        justifyContent={{ base: 'center' }}
        w={{ base: 'full', md: 'fit-content', lg: 'fit-content' }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <NextImage
            key={i}
            src={redIndex === 4 - i ? redSkullSvg : skullSvg}
          ></NextImage>
        ))}
      </Flex>
    </>
  )
}

export const SkullMinter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
      wrap="wrap"
      gap="4"
      py="4"
    >
      <RotatingSkull onOpen={onOpen} />

      {isOpen && <MintModal isOpen={isOpen} onClose={onClose} />}
    </Flex>
  )
}
