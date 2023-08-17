import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestionToForm, getForm } from "../redux/form/form.action";
import { Box, Heading, Select, Button, Input } from "@chakra-ui/react";

function AddQuestion() {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form.forms);
  const [selectedForm, setSelectedForm] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [valueType, setValueType] = useState("Text"); // Default value type
  const { token } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  const handleAddQuestion = () => {
    if (selectedForm && selectedForm !== "" && questionText && valueType) {
      dispatch(addQuestionToForm(selectedForm, questionText, valueType,token));
      setSelectedForm("");
      setQuestionText("");
      setValueType("Text"); // Reset to default value type
    }
  };

  return (
    <Box width={"80%"} margin={"auto"} >
      <Heading textAlign={"center"} color={"#fff"} textDecoration={"underline"}>Add Question</Heading>
      <Select
        mt={"3rem"}
        height={"4rem"}
        fontSize={"21px"}
        fontFamily={"cursive"}
        color={"#333"}
        value={selectedForm}
        onChange={(e) => setSelectedForm(e.target.value)}
      >
        <option value="">Select Form</option>
        {forms?.map((form) => (
          <option key={form._id} value={form._id}>
            {form.title}
          </option>
        ))}
      </Select>
      {selectedForm && (
        <Box>
          <Input
            mt={"2rem"}
            height={"4rem"}
            color={"#333"}
            fontSize={"20px"}
            backgroundColor={"#fff"}
            focusBorderColor="transparent"
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter Question Text"
          />
          <Select
             mt={"2rem"}
             height={"3rem"}
             fontSize={"19px"}
             fontFamily={"cursive"}
             focusBorderColor="transparent"
             color={"#333"}
            value={valueType}
            onChange={(e) => setValueType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="Integer">Integer</option>
            <option value="Date">Date</option>
            <option value="Time">Time</option>
            <option value="Float">Float</option>
          </Select>
          <Button mt={"2rem"} onClick={handleAddQuestion}>Add Question</Button>
        </Box>
      )}

      
    </Box>
  );
}

export default AddQuestion;
