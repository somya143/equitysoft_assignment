import React, { useState, useEffect } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Text,
    Heading,
    Select,
    Button,
    useToast,
    Link,
    List,
    ListIcon
  } from '@chakra-ui/react';
  import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
  import { Link as ReachLink, useNavigate } from "react-router-dom";
  import { useDispatch,useSelector } from "react-redux";
  import { getRegister } from "../redux/auth/auth.action"
  import Loader from '../components/Loader';
  import Error from '../components/Error';
import Navbar from '../components/Navbar';

const Signup = () => {
    const [register , setRegister] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const {isSignUp,isError,isLoading} = useSelector(({auth}) => auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegister({...register , 
        [name]: value
    })
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
      };
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(getRegister(register))
      
    }
    useEffect(() => {
        if(isSignUp){
          toast({
            title: "Account created successfully",
            status: "success",
            position: "top",
            duration: 2000,
            isClosable: true,
          })? navigate("/login") : navigate("/signup")
        }
      }, [isSignUp,navigate,toast])

      if(isLoading){
        return <Loader />
      }else if(isError){
        return <Error />
      }
  return (
    <Box bgGradient='linear(to-l,#222222, rgba(100,180,349,28.5))'
    width="100%"
    height={{ base: "100vh", sm: "100vh", md: "100vh", lg: "92vh" }}
    >
      <Navbar />
      <Box margin={"auto"} w={{ base: "100%", md: "50%", lg: "55%" }} className='registerBox' mt={"60px"}  >
        <Heading textAlign={"center"} color={"#fff"} fontSize={"3.2rem"} fontWeight={700} fontFamily={"sans-serif"} pb={"30px"} textDecoration={"underline"}>
            Sign Up
        </Heading>
    <form action="" onSubmit={handleSubmit}>
 <FormControl>
    
 <FormLabel  mt={"30px"} m={"10px"} color={"#fff"}>Name :</FormLabel>
   <Input type='text'color={"#fff"} onChange={handleChange} name='name' _focus={{outline:"none"}} />

   <FormLabel m={"10px"} color={"#fff"}>Email address :</FormLabel>
   <Input type='email' color={"white"} onChange={handleChange} name='email' />

  <Box position={"relative"}>
  <FormLabel m={"10px"} color={"#fff"}>Password :</FormLabel>
   <Input type={showPassword ? 'text' : 'password'}color={"white"} onChange={handleChange} name='password' 
    _focus={{
        outline: 'none', 
        boxShadow: 'none' 
      }}  />
   
   <List position={"absolute"} right={0} top={"35px"} zIndex={"100"}>
   <ListIcon  onClick={togglePasswordVisibility} as={ showPassword? (AiFillEye):(AiFillEyeInvisible)} fontSize={"35px"} color={"#fff"} />
   </List>
   </Box>
</FormControl>

<Button type='submit' mt={"30px"} w={"100%"} h={"3rem"} fontSize={"27px"} variant={"ghost"} backgroundColor={"#333"} color={"#fff"}>Register</Button>
<Box textAlign={"center"}>
  <Text color={"#fff"}  display={"inline-block"}>If you are already an user. Kindly</Text> 
                 {" "}
     <Link as={ReachLink} to="/login" color={"orange"} textDecoration={"underline"}  >
                     Login
    </Link>
              
</Box>
</form>    
</Box>

    </Box>
  )
}

export default Signup;