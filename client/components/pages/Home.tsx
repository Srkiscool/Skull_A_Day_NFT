import {
  AspectRatio,
  Box,
  chakra,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import Script from 'next/script'
import { FC } from 'react'
import { SkullMinter } from '../SkullMinter'
import { MainBox } from '../ui/MainBox'
import NextImage from 'next/image'
import webaward from '../../public/images/webaward.png'
import { Team } from '../Team'
const Iframe = chakra('iframe')
export const Home: FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <Flex
      bgImage={'/images/largerepeattile.png'}
      bgRepeat="repeat"
      bgSize="620px 620px"
      direction="column"
    >
      <Box minH="10" bg="brand.gray" borderBottom="2px solid black">
        <MainBox minH="10">
          <HStack wrap="wrap" minH="10" px="16" w="full" bg="brand.gray">
            <Text as="span">
              The OG Daily Skull Project by Noah Scalin Founded in 2007
            </Text>
            <Text as="span" color="brand.neon">
              ABOUT
            </Text>
            <Text as="span" color="brand.neon">
              TEAM
            </Text>
          </HStack>
        </MainBox>
      </Box>
      <MainBox bg="black">
        <VStack px="14">
          <Box>
            <Heading
              lineHeight={1}
              fontSize={{
                sm: '10vw',
                md: '10vw',
                lg: '10vw',
                xl: '9xl',
              }}
              // fontSize="9vw"
              color="brand.neon"
              fontFamily="Skullphabet1"
            >
              Skull-A-Day
            </Heading>
            <Text>
              I made a skull every day for a year. You can now buy them all
              here...
            </Text>
          </Box>
          <HStack alignItems="flex-start" gap="4" wrap="wrap">
            <VStack flex="1" alignItems="flex-start">
              <Divider color="white" />
              <Text>SATURDAY, JUNE 4, 2022</Text>
              <Script src="https://player.vimeo.com/api/player.js" />
              <AspectRatio
                border="1px solid"
                borderColor="brand.neon"
                w="full"
                ratio={16 / 9}
              >
                <Iframe
                  src="https://player.vimeo.com/video/223466562?h=c74f5feaf9"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></Iframe>
              </AspectRatio>
              <Box>
                <Text as="span">LABELS: </Text>
                <Text as="span" color="brand.neon">
                  NFT, SKULL, NOAHSCALIN
                </Text>
              </Box>
              <Divider color="white" />
              <SkullMinter />
              <Divider color="white" />
              <Text>ABOUT</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
                amet justo leo. Integer iaculis varius euismod. Vivamus pharetra
                nisi et erat varius scelerisque. Nullam vitae fermentum dolor, a
                consectetur risus. Aenean nec velit vel dolor vestibulum
                sagittis. Etiam dapibus dolor nec turpis faucibus sollicitudin.
                Proin mauris felis, eleifend a mi vel, placerat imperdiet diam.
                Praesent ac ante gravida, condimentum elit id, ultricies tortor.
                Etiam placerat feugiat felis, eget mattis lorem ultrices a.
                Proin vulputate at leo in ultrices. Pellentesque molestie nunc
                feugiat consectetur tristique.
              </Text>
              <Box>
                <Text as="span">LABELS: </Text>
                <Text as="span" color="brand.neon">
                  SKULL-A-DAY, NOAHSCALIN, HISTORY
                </Text>
              </Box>
              <Divider color="white" />
              <Text>TEAM</Text>
              <Team />
              <Box>
                <Text as="span">LABELS: </Text>
                <Text as="span" color="brand.neon">
                  BIOS
                </Text>
              </Box>
            </VStack>
            <VStack fontSize="sm" alignItems="flex-start">
              <NextImage
                width="150px"
                height="150px"
                src={webaward}
              ></NextImage>
              <Divider />
              <Text>BLOG ARCHIVE</Text>
              <Box>
                <Text cursor="pointer" color="brand.neon">
                  ▼ 2008 (597)
                </Text>
                <Box pl="4">
                  <Text cursor="pointer" color="brand.neon">
                    ► December (55)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► November (38)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► October (69)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► September (40)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► August (39)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► July (54)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► June (65)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► May (60)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► April (44)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► March (37)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► February (53)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► January (43)
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text cursor="pointer" color="brand.neon">
                  ▼ 2007 (306)
                </Text>
                <Box pl="4">
                  <Text cursor="pointer" color="brand.neon">
                    ► December (42)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► November (46)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► October (46)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► September (46)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► August (43)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► July (41)
                  </Text>
                  <Text cursor="pointer" color="brand.neon">
                    ► June (42)
                  </Text>
                </Box>
              </Box>
              <Divider />
              <Text>BLOG ROLL</Text>
              <Box>
                <Text cursor="pointer" color="brand.neon">
                  365 Masks
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  All The Cool Geeks
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Amblus
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Another Limited Rebellion
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  b13fotographica
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Bent Objects
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Daily Monster
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Designers Skulls blog
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Djoulz
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Face Metal Design
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Frankenstein's Fun House
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  GirlMonsters
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Home of The Skulls
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  I Want Your Skull
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  In The New
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Micawave
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Micrograve Designs
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  mim4art
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  My Precious Studio
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  News from Bwlchyrhyd
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Now What?
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Pearson Metal Art
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Skull and Crossbones
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Skulls and Bacon
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Stencils & Pochoirs
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Suspect and Fugitive
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Team 8 Press
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  The Blog Blog
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  The Jambox
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  This Young House
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Tiki Chris Presents
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Trailers From Hell
                </Text>
                <Text cursor="pointer" color="brand.neon">
                  Will.Love.Logic
                </Text>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </MainBox>
    </Flex>
  )
}
