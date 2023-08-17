import React from 'react'
import Navbar from '../components/Navbar';
import CreateForm from '../components/CreateForm';
import ViewForms from '../components/ViewForm';
import AddQuestion from '../components/AddQuestion';
import SubmitResponse from '../components/SubmitResponse';
import { Box, Heading, Button } from '@chakra-ui/react';
import SingleSubmitResponse from './SingleSubmitResponse';

const Form = () => {
  return (
    <Box bgGradient='linear(to-l,#222222, rgba(100,180,349,28.5))'
    width="100%"
    height={"auto"}>
      <Navbar />
      
      <Heading mt={"4rem"} textAlign={"center"} fontFamily={"sans-serif"} textDecoration={"underline"} 
      fontWeight={700} pt={"1rem"} color={"#fff"}
      >Form management dashboard</Heading>
        <CreateForm />
        <ViewForms />
      
    </Box>
  )
}

export default Form
