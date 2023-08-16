import { ADD_QUESTION_FAILURE, ADD_QUESTION_REQUEST, ADD_QUESTION_SUCCESS, CREATE_FORM_FAILURE, CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS, GET_FORMS_FAILURE, GET_FORMS_REQUEST, GET_FORMS_SUCCESS, SUBMIT_FORM_FAILURE, SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS } from "./form.actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    forms : []
}

const formReducer = (state=initialState, {type,payload}) => {
    switch(type){
        case GET_FORMS_REQUEST : {
            return{
               ...state,
               isLoading : true,
               isError : false
            }
        }
        case GET_FORMS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                forms : payload
            }
        }
        case GET_FORMS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        case CREATE_FORM_REQUEST : {
            return {
                ...state,
               isLoading : true,
               isError : false
            }
        }
        case CREATE_FORM_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                isError : false,
                forms : [...state.forms, payload]
            }
        }
        case CREATE_FORM_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        case ADD_QUESTION_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }
        case ADD_QUESTION_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                isError: false,
                forms: state.forms.map(form =>
                  form._id === payload.formId
                    ? { ...form, questions: [...form.questions, payload.question] }
                    : form
                )
            }
        }
        case ADD_QUESTION_FAILURE : {
            return {
                isLoading : false,
                isError : true
            }
        }
        case SUBMIT_FORM_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }
        case SUBMIT_FORM_SUCCESS : {
            return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    forms: state.forms.map(form =>
                      form._id === payload._id ? payload : form
                    )
            }
        }
        case SUBMIT_FORM_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
         default : return state
    }
}

export default formReducer;