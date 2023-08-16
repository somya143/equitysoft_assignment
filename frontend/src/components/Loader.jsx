import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Box m={"auto"} w={"100px"}>
        <Image src='https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large/is-moderation-mode/true?v=v2&px=999' alt='loader' />
    </Box>
  )
}

export default Loader;