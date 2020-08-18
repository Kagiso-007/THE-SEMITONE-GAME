import { CHECK_ANSWER, GENERATE_NOTES } from './actions';
import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IAPPState{
    note1: string;
    note2: string;
    message: string;
}

export const INITIAL_STATE: IAPPState = {
    note1: '?',
    note2: '?',
    message: '',
}

export function rootReducer(state: IAPPState, action):IAPPState {
   const notes = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
   let note1Indx;
   let note2Indx;

    switch(action.type){
        case GENERATE_NOTES:
            let max = notes.length;
            note1Indx = Math.floor(Math.random()*(max-1));
            let min = (note1Indx+1);
            note2Indx = Math.floor(Math.random()*(max-min))+min;

            state = Object.assign({}, state, {note1: notes[note1Indx], note2: notes[note2Indx]});

        case CHECK_ANSWER:
            let actualAnswer =  (note2Indx - note1Indx);
            if(actualAnswer == action.input){
                state = Object.assign({}, state, {message: 'That is correct'});
            }else{
                state = Object.assign({}, state, {message: 'Terribly incorrect!'});
            }
    }
    return state;
}