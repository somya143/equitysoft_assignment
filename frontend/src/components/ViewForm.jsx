import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForm } from "../redux/form/form.action";
import { Box, Text, Grid, GridItem, Link } from "@chakra-ui/react";
import { Link as Reachlink } from "react-router-dom";

function ViewForms() {
  const {isError, isLoading, forms} = useSelector((state) => state.form);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getForm())
  },[dispatch])

  return (
    <Box width={"85%"}  margin={"auto"} mt={"2rem"} >

      <Grid  templateColumns={"repeat(4, 1fr)"} gap={4}
      
      >
        {forms?.map((form) => (
         <Link as={Reachlink} to={`/singleform/${form._id}`} >
          <GridItem key={form._id} w={"300px"} h={"300px"} border={"1px solid yellow"}
          bg={"orange"} borderRadius={"15px"}
          >
            <Text textAlign={"center"} fontSize={"1.5rem"} textDecoration={"underline"}
            fontFamily={"cursive"}
            >{form.title}</Text>
          </GridItem>
        </Link>
        ))}
      </Grid>
    </Box>
  );
}

export default ViewForms;
