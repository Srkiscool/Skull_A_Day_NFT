import { extendTheme } from '@chakra-ui/react'

const Text = {
  variants: {
    body: {
      color: 'white',
    },
  },
  defaultProps: {
    variant: 'body',
  },
}

const Button = {
  variants: {
    solid: {
      bg: 'brand.yellow',
      color: 'brand.red',
      _hover: {
        bg: 'brand.yellow',
      },
      _active: {
        bg: 'brand.yellow',
      },
    },
  },
}

export const theme = extendTheme({
  components: {
    Text,
    Button,
  },

  colors: {
    brand: {
      gray: '#5d5d5d',
      neon: '#e2f6b9',
      yellow: '#E0FABD',
      red: '#FF0000',
    },
  },
})
