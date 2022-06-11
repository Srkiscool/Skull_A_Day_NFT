import { Box, Text, useDisclosure, Wrap } from '@chakra-ui/react'
import { useState } from 'react'
import { TeamModal } from './TeamModal'
import webaward from '../public/images/webaward.png'
import NextImage from 'next/image'
const PERSONS = [
  {
    name: 'NOAH SCALIN',
    title: 'ARTIST/FOUNDER',
    image: webaward,
    description: 'yoy oyoyoyo ',
  },
  {
    name: 'ARCHIT',
    title: 'ARTIST/FOUNDER',
    image: webaward,
    description: 'yoy oyoyoyo ',
  },
]

export const Team = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedPerson, setSelectedPerson] = useState()

  const handleOpen = (person) => {
    setSelectedPerson(person)
    onOpen()
  }

  const handleClose = () => {
    setSelectedPerson(undefined)
    onClose()
  }
  return (
    <Wrap spacing="4">
      {PERSONS.map((person) => {
        return (
          <Box
            cursor="pointer"
            key={person.name}
            onClick={() => handleOpen(person)}
          >
            <NextImage src={webaward} height="120px" width="120px" />
            <Text color="brand.neon">{person.name}</Text>
            <Text>{person.title}</Text>
          </Box>
        )
      })}
      <TeamModal
        isOpen={isOpen}
        onClose={handleClose}
        person={selectedPerson}
      />
    </Wrap>
  )
}
