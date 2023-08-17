import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForm, submitForm } from "../redux/form/form.action";
import { Box, Button, Heading, Input, Select,FormLabel } from "@chakra-ui/react";

function SubmitResponse() {
  const dispatch = useDispatch();
  const forms = useSelector((store) => store?.form.forms);
  const [selectedForm, setSelectedForm] = useState("");
  const [responses, setResponses] = useState([]);
  const { token } = useSelector((store) => store?.auth);

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  const handleAddResponse = () => {
    if (selectedForm && responses?.length < selectedForm.questions?.length) {
      const question = selectedForm.questions[responses.length];
      const questionId = question._id;
      setResponses([...responses, { questionId, responseValue: "" }]);
    }
  };
  
  const handleResponseChange = (index, field, value) => {
    const updatedResponses = [...responses];
    console.log("responses:", responses);
    console.log("index:", index);
    if(index>=0 && index < updatedResponses?.length){
      updatedResponses[index][field] = value;
      setResponses(updatedResponses);
    }
   
  };

  const handleSubmitForm = () => {
    if (selectedForm && responses?.length === selectedForm.questions?.length) {
      const formattedResponses = responses.map((response) => ({
        questionId: response.questionId,
        responseValue: response.responseValue,
      }));
      dispatch(submitForm(selectedForm, formattedResponses,token));
      setSelectedForm("");
      setResponses([]);
    }
  };

  return (
    <Box width={"80%"} margin={"auto"}>
      <Heading textAlign={"center"} color={"#fff"} textDecoration={"underline"}>Submit Response</Heading>
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
        <Box mt={"3rem"} >
          {forms?.map((form) => {
            if (form._id === selectedForm) {
              return (
                <Box key={form._id}>
                  {form?.questions?.map((question, index) => (
                    <Box key={question._id} m={"2rem"}>
                      <FormLabel fontSize={"1.2rem"}>Question: {question.questionText}</FormLabel>
                      <Input
                        type="text"
                        value={responses[index]?.responseValue}
                        onChange={(e) =>
                          handleResponseChange(index, "responseValue", e.target.value)
                        }
                        placeholder="Enter Response Value"
                      />
                    </Box>
                  ))}
                </Box>
              );
            }
            return null;
          })}
          <Button onClick={handleAddResponse} ml={"40%"}>Add Response</Button>
          {responses?.length === selectedForm.questions?.length && (
            <Button onClick={handleSubmitForm}>Submit Form</Button>
          )}
        </Box>
      )}
    </Box>
  );
}

export default SubmitResponse;
