import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import NextImage from 'next/image'

export const TeamModal = ({ isOpen, onClose, person }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      {person && (
        <ModalContent
          bg="black"
          borderRadius="none"
          border="4px solid"
          borderColor="brand.gray"
        >
          <ModalHeader bg="brand.gray" color="white" fontSize="sm" p="1">
            {person.name} - {person.title}
          </ModalHeader>
          <ModalCloseButton color="white" top="0" right="0" />
          <ModalBody p="8" color="white">
            <Flex gap="8" w="full" justify="space-between">
              <Flex flex="1" gap="4" justify="center" align="center">
                <NextImage src={person.image}></NextImage>
              </Flex>
              <Flex gap="8" flex="1" direction="column">
                <Text>{person.description}</Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      )}
    </Modal>
  )
}
