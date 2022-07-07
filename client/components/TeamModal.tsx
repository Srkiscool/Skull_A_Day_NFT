import {
  Box,
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
          maxW="2xl"
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
            <Flex align="center" wrap={['wrap', 'wrap', 'nowrap']} gap="4">
              <Flex
                justify="center"
                maxW="full"
                w={['full', 'full', '200px']}
                shrink="0"
              >
                <NextImage
                  width="200px"
                  height="200px"
                  src={person.image}
                ></NextImage>
              </Flex>
              <Text>{person.description}</Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      )}
    </Modal>
  )
}
