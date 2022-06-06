import { VStack } from '@chakra-ui/react'

export const MainBox = ({ children, ...props }) => (
  <VStack flex="1" maxWidth="container.lg" w="full" margin="0 auto" {...props}>
    {children}
  </VStack>
)
