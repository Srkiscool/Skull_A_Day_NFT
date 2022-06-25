import { Box, Text, useDisclosure, Wrap } from '@chakra-ui/react'
import { useState } from 'react'
import { TeamModal } from './TeamModal'
import noah from '../public/images/noah.png'
import archit from '../public/images/archit.png'
import sohan from '../public/images/sohan.png'
import jonathan from '../public/images/jonathan.png'
import kelsea from '../public/images/kelsea.png'
import NextImage from 'next/image'
const PERSONS = [
  {
    name: 'NOAH SCALIN',
    title: 'Artist/Founder',
    image: noah,
    description:
      'Creator of the Webby Award winning Skull-A-Day project, Noah’s artwork has been shown in museums and galleries internationally including installations in New York City’s Times Square and Philadelphia’s Mütter Museum. His collaborations with companies like Old Navy, Capital One, as well as features in places like Juxtapos and USA Today, have introduced billions of people to his work. This is his first NFT collection release.',
  },
  {
    name: 'JONATHAN MANN',
    title: 'Advisor',
    image: jonathan,
    description: 'Writes a song a day and thinks a lot about NFTs.',
  },
  {
    name: 'SOHAN KALVA',
    title: 'Developer',
    image: sohan,
    description:
      'Product Lead by day and web3 enthusiast by night. Focused on increasing the applicability that NFTs provide.',
  },
  {
    name: 'ARCHIT ARORA',
    title: 'Developer',
    image: archit,
    description:
      'Software Engineer with a passion for basketball and making the world a more decentralized place.',
  },
  {
    name: 'KELSEA DVORK',
    title: 'Illustrator',
    image: kelsea,
    description:
      'Versatile illustrator who creates in many forms including public art and sculpture.',
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
            <NextImage src={person.image} height="120px" width="120px" />
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
