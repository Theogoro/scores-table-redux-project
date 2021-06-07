// Este archivo tiene toda la logica de los puntajes
import { v4 as uuidv4 } from 'uuid';


// Constantes --> Almacenar los valores
const scoresInitial = {
  array: []
}

// Constantes de los types de acciones
const GET_SCORES_SUCCESS = "GET_SCORES_SUCCESS";
const ADD_SCORE_SUCCESS = "ADD_SCORE_SUCCESS";
const SET_SCORE = "SET_SCORE";
const ADD_TO_SCORE = "ADD_TO_SCORE";

// Reducer --> Manejar los resultados de las acciones y guardarlos en constantes
// Iniciar con el estado inicial
const scoreReducer = (state = scoresInitial, action) => {
  const array = state.array;
  switch (action.type) {
    case GET_SCORES_SUCCESS:
      return state.array;
    case ADD_SCORE_SUCCESS:
      array.push(action.payload);
      return { ...state, array: array }
    case SET_SCORE:
      return { ...state, array: state.array.filter(e => e.id !== action.payload) };
    case ADD_TO_SCORE:
      array[array.findIndex(e => e.id === action.payload.id)].score += action.payload.value;
      return { ...state, array: array };
    default:
      return state;
  }
}

export default scoreReducer;

// Acciones --> Hacer cosas,  ej. Llamar API

export const getScores = () => (dispatch, getState) => {
  dispatch({
    type: GET_SCORES_SUCCESS
  })
}

export const addScore = (newName) => (dispatch, getState) => {
  dispatch({
    type: ADD_SCORE_SUCCESS,
    payload: { id: uuidv4(), name: newName, score: 0 }
  })
}

export const removeScore = (id) => (dispatch, getState) => {
  dispatch({
    type: SET_SCORE,
    payload: id
  })
}

export const addToScore = (value, id) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_SCORE,
    payload: {
      value, id
    }
  })
}
