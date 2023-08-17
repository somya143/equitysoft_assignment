import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { createForm } from "../redux/form/form.action";
import { Box, Text, Input, Button, Heading } from "@chakra-ui/react";

function CreateForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const { token } = useSelector((store) => store.auth);

  const handleCreateForm = () => {
    if (title.trim() !== "") {
      dispatch(createForm({title,token}));
      setTitle("");
    }
  };

  return (
    <Box w={"85%"} margin={"auto"} mt={"2rem"}>
      <Heading color={"#fff"} textDecoration={"underline"} mb={"1rem"}>Add Form</Heading>
      <Input
        width={"100%"}
        height={"3.5rem"}
        fontSize={"1.5rem"}
        color={"#fff"}
        borderColor={"#fff"}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Form Title"
      />
      <Button width={"100%"} mt={"1rem"} fontSize={"1.5rem"} onClick={handleCreateForm}>Create Form</Button>
    </Box>
  );
}

export default CreateForm;
