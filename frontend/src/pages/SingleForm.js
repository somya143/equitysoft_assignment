import { Box, Button, Link } from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom"
import React from 'react'
import AddQuestion from '../components/AddQuestion'
import SubmitResponse from '../components/SubmitResponse'

const SingleForm = () => {
  return (
    <Box bgGradient='linear(to-l,#222222, rgba(100,180,349,28.5))'
    width="100%"
    height={{ base: "100vh", sm: "100vh", md: "100vh", lg: "100vh" }} >
      <AddQuestion />
      <Link as={ReachLink} to="/singlesubmitresponse">
      
      <Button ml={"10%"} mt={"50px"}>Submit Response</Button>
      </Link>
    </Box>
  )
}

export default SingleForm
