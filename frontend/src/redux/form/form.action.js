import { axios_instance } from "../../utils/axios_instance";
import { ADD_QUESTION_FAILURE, ADD_QUESTION_REQUEST, ADD_QUESTION_SUCCESS, CREATE_FORM_FAILURE, CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS, GET_FORMS_FAILURE, GET_FORMS_REQUEST, GET_FORMS_SUCCESS, SUBMIT_FORM_FAILURE, SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS } from "./form.actionTypes";
import axios from "axios";

const api = process.env.FormAPI || "http://localhost:8080/forms"

export const getForm = () => async (dispatch) => {
    dispatch({ type: GET_FORMS_REQUEST });
    try {
        const response = await axios.get(`${api}`)
        dispatch({ type: GET_FORMS_SUCCESS , payload: response.data });
        return response.data;
    } catch (error) {
        dispatch({ type: GET_FORMS_FAILURE , payload : error.message });
    }
};

export const createForm = ({title,token}) => async (dispatch) => {
    dispatch({ type: CREATE_FORM_REQUEST });
    try {
        const response = await axios_instance.post(`${api}/create-forms`, { title },   {
            headers: {
              authorization: token,
            },
          });
        dispatch({ type: CREATE_FORM_SUCCESS , payload : response.data });
        console.log(response.data)
        
    } catch (error) {
        dispatch({ type: CREATE_FORM_FAILURE, payload : error.message })
        console.log(error.message)
    }
}

export const addQuestionToForm = (formId,questionText,valueType,token) => async (dispatch) => {
    dispatch({ type: ADD_QUESTION_REQUEST });
    try {
        const response = await axios_instance.post(`${api}/${formId}/questions`,  { questionText, valueType }, {
            headers: {
              authorization: token,
            },
          });
        dispatch({ type: ADD_QUESTION_SUCCESS , payload: response.data });
        console.log(response.data)
        return response.data
    } catch (error) {
        dispatch({ type: ADD_QUESTION_FAILURE , payload: error.message })
    }
}

export const submitForm = (formId,responses,token) => async (dispatch) => {
    dispatch({ type: SUBMIT_FORM_REQUEST });
    try {
        const response = await axios_instance.post(`${api}/${formId}/submit`, {responses} , {
            headers: {
              authorization: token,
            },
          });
        dispatch({ type: SUBMIT_FORM_SUCCESS , payload: response.data });
        console.log(response.data)
        return response.data;
    } catch (error) {
        dispatch({ type: SUBMIT_FORM_FAILURE , payload: error.message})
        console.log(error.message)
    }
}