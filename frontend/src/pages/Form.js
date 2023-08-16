import React from 'react'
import Navbar from '../components/Navbar';
import CreateForm from '../components/CreateForm';
import ViewForms from '../components/ViewForm';
import AddQuestion from '../components/AddQuestion';
import SubmitResponse from '../components/SubmitResponse';
import { Heading } from '@chakra-ui/react';

const Form = () => {
  return (
    <div>
      <Navbar />
      <Heading mt={"3rem"}>Form management dashboard</Heading>

      <div className="section">
        
        <CreateForm />
      </div>

      <div className="section">
        
        <ViewForms />
      </div>

      <div className="section">
      
        <AddQuestion />
      </div>

      <div className="section">
    
        <SubmitResponse />
      </div>
    </div>
  )
}

export default Form
