import { Box } from '@chakra-ui/react'
import React from 'react'

import SubmitResponse from '../components/SubmitResponse'

const SingleSubmitResponse = () => {
  return (
    <Box bgGradient='linear(to-l,#222222, rgba(100,180,349,28.5))'
    width="100%"
    height={{ base: "100vh", sm: "100vh", md: "100vh", lg: "100vh" }} >
      <SubmitResponse />
    </Box>
  )
}

export default SingleSubmitResponse;
