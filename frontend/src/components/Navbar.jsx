import React from 'react';
import { Box,ListItem,List,Link,Image, ListIcon,Flex,Text } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import { FcRegisteredTrademark, FcRight, FcClapperboard, FcNews } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from "jwt-decode";
import { RxAvatar } from "react-icons/rx";
import { getSignout } from "../redux/auth/auth.action"

const Navbar = () => {
  const {token} = useSelector(({auth}) => auth);
  const username = token? jwtDecode(token).name : null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    token? dispatch(getSignout()) : navigate("/login")
  }
  return (
    
    <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} 
      position={"fixed"}
      top= "0"
      left= "0"
      width= "100%"
      zIndex={"100"}
      padding= "10px 20px"
      bg={"#333"}
    >
       
        <List fontWeight="400" fontSize="25px" display={"flex"} justifyContent={"space-between"}
        width={"70%"}
        >
        <ListItem>
          <Link as={ReachLink} to="/" color={"#fff"}>
            <ListIcon as={FcNews} />
             Form
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReachLink} to="/signup" color={"#fff"}>
            <ListIcon as={FcRegisteredTrademark} />
             SignUp
          </Link>
        </ListItem>
        <ListItem onClick={handleClick} >
          <Link as={ReachLink} to="/login" color={"#fff"}>
            <ListIcon as={FcRight} />
            {token && token? "Logout" : "Login"}
          </Link>
        </ListItem>
        </List>
        {
          username && (
            <Flex mt={"1rem"}>
              <RxAvatar size={30} m={2} color='white' ></RxAvatar>
              <Text ml={4} color={"#fff"}>{username}</Text>
            </Flex>
          )
        }
    </Box>
    
  )
}

export default Navbar