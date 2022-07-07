import {
  AspectRatio,
  Box,
  chakra,
  Divider,
  Flex,
  HStack,
  Text,
} from '@chakra-ui/react'
import Script from 'next/script'
import { FC } from 'react'
import { SkullMinter } from '../SkullMinter'
import { MainBox } from '../ui/MainBox'
import NextImage from 'next/image'
import webby from '../../public/images/webby.png'
import skullSvg from '../../public/images/skull.svg'
import logo from '../../public/images/logo.png'
import { Team } from '../Team'

const Iframe = chakra('iframe')
export const Home: FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <Flex
      bgImage={'/images/largerepeattile.png'}
      bgRepeat="repeat"
      bgSize="620px 620px"
      direction="column"
      bgColor="brand.gray"
    >
      <Box
        position="relative"
        minH="10"
        bg="brand.gray"
        borderBottom="2px solid black"
      >
        <Flex
          minH="10"
          position="absolute"
          top={[1, 0]}
          display="inline-flex"
          bg="black"
          p="1"
        >
          <Flex display="inline-flex" bg="brand.gray" p="1" borderRadius="20%">
            <NextImage height="10" width="20" src={skullSvg} />
          </Flex>
        </Flex>
        <MainBox minH="10">
          <HStack
            wrap="wrap"
            minH="10"
            px={['4', '10']}
            w="full"
            bg="brand.gray"
          >
            <Text as="span">
              The OG Daily Skull Project by Noah Scalin Founded in 2007
            </Text>
          </HStack>
        </MainBox>
      </Box>
      <MainBox py="4" bg="black">
        <Flex direction="column" px={['4', '8']}>
          <Box>
            <NextImage src={logo}></NextImage>
            <Text>
              I made a skull every day for a year. You can now buy them all
              here...
            </Text>
          </Box>
          <Flex alignItems="flex-start" gap="4" wrap="wrap">
            <Flex
              w={['100%', '100%', '78%', '78%']}
              gap="2"
              direction="column"
              alignItems="flex-start"
            >
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
                On June 4, 2007 Noah Scalin launched the Skull-A-Day project.
                This groundbreaking daily art project became a viral sensation
                and created a massive community of creative sharing that
                continues to make an impact 15 years later. Now for the first
                time ever, the entire 366 daily skulls are available as an
                exclusive NFT collection. Collectors will get to lay claim to
                their very own one-of-a-kind skull image created by Noah during
                his project and become part of his Team Art, which guarantees
                you a free NFT from all future releases.
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
            </Flex>
            <Flex
              w={['100%', '100%', '18%', '18%']}
              gap="2"
              direction="column"
              fontSize="sm"
              alignItems="flex-start"
            >
              <NextImage width="150px" height="150px" src={webby}></NextImage>
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
            </Flex>
          </Flex>
          <Text>
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              <img
                alt="Creative Commons License"
                style={{ borderWidth: 0 }}
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
              />
            </a>
          </Text>
          <Text>
            This work is licensed under a{' '}
            <a
              style={{ color: 'white' }}
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International License
            </a>
          </Text>
        </Flex>
      </MainBox>
    </Flex>
  )
}
