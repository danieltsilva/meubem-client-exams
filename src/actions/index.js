import framework from '../apis/framework';
import history from '../history';
import {
    FETCH_QUESTIONS,
    CREATE_QUESTION
} from './types';


export const fetchQuestions = () => async dispatch => {
    const response = await framework.get('/api/questions');

    dispatch({ type: FETCH_QUESTIONS, payload: response.data });
};

export const createQuestion = formValues => async (dispatch) => { //TODO , getState 
    //const { userId } = getState().auth;
    const response = await framework.post('/api/question', { ...formValues }); //TODO Add UserId with login

    dispatch({ type: CREATE_QUESTION, payload: response.data });
    history.push('/');
};