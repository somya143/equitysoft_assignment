import React, { useEffect, useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Heading,
    Button,
    Link,
    Text,
    List,
    ListIcon
  } from '@chakra-ui/react';
  import { useDispatch,useSelector } from "react-redux";
  import { getLogin } from '../redux/auth/auth.action';
  import Loader from '../components/Loader';
  import Error from "../components/Error";
  import { useLocation, useNavigate } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import Navbar from '../components/Navbar';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

const Login = () => {
    const [login , setLogin] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const { isAuth,isError,isLoading } = useSelector(({auth}) => auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setLogin({...login , 
        [name]: value
    })
    }
  
    const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(getLogin(login))
    }
   
    useEffect(() => {
      if(isAuth && state && state.from){
         navigate(state?.from, {replace : true})
        }else if(isAuth){
        navigate("/")
         }
      }, [isAuth,navigate,state])
  
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
      };

    if(isLoading){
      return <Loader />
    }
    if(isError){
      return <Error />
    }else
  return (
    <Box bgGradient='linear(to-l,#222222, rgba(100,180,349,28.5))'
    width="100%"
    height={{ base: "100vh", sm: "100vh", md: "100vh", lg: "92vh" }}>

        <Navbar />

         <Box margin="auto" w="50%" borderRadius={"10px"} mt={"60px"}  >
        <Heading textAlign={"center"} color={"#fff"} pt={"30px"} fontSize={"3.2rem"} fontWeight={700} fontFamily={"sans-serif"} pb={"30px"} textDecoration={"underline"}>
            Login 
        </Heading>
    <form action="" onSubmit={handleSubmit}>
 <FormControl>
    
   <FormLabel m={"10px"} color={"#fff"}>Email address :</FormLabel>
   <Input type='email' color={"#fff"} border={"2px solid #fff"} onChange={handleChange} name='email' />

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

<Button type='submit' mt={"30px"} w={"100%"} h={"3rem"} fontSize={"27px"} variant={"ghost"} backgroundColor={"#333"} color={"#fff"}>Login</Button>
<Box textAlign={"center"}>
  <Text color={"#fff"}  display={"inline-block"}>If you are new, Kindly Register yourself first , </Text> 
                  {" "}
                  <Link as={ReachLink} to="/signup" color={"orange"} textDecoration={"underline"} >
                     Register
                  </Link>
              
</Box>
</form>    
</Box>
    </Box>
  )
}

export default Login