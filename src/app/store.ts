import { CHECK_ANSWER, GENERATE_NOTES } from './actions';

export interface IAPPState{
    note1: string;
    note2: string;
    noOfSemitones: number;
    message: string;
}

//the initial state of the app
export const INITIAL_STATE: IAPPState = {
    note1: '?',
    note2: '?',
    noOfSemitones: 0,
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

            state = Object.assign({}, state, {
                note1: notes[note1Indx], 
                note2: notes[note2Indx],
                noOfSemitones: (note2Indx-note1Indx)
            });

        case CHECK_ANSWER:
            if(state.noOfSemitones == action.input){
                state = Object.assign({}, state, {message: 'YOU GOT IT RIGHT, WELL DONE!', note1: '?', note2: '?'});
            }else{
                state = Object.assign({}, state, {message: 'WRONG ANSWER, PLEASE TRY AGAIN'});
            }
    }
    return state;
}