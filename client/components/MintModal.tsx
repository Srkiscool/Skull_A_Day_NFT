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
} from '@chakra-ui/react'
import NextImage from 'next/image'
import { useState } from 'react'
import skullSvg from '../public/images/skull.svg'

export const MintModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState(1)

  const handleNumberChange = (value) => {
    if (Number.isNaN(value)) setAmount(undefined)
    else if (value > 0 && value <= 3) setAmount(value)
    else setAmount(amount)
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
              {Array.from({ length: amount }).map((_, i) => (
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
                  value={amount ? amount : ''}
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
              </Box>
              <Button>SKULL ME!</Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
