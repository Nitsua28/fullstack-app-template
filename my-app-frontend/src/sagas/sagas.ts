//import {takeEvery, put, all} from "@redux-saga/core/effects"

import { FormState } from "../reducers/form-reducer";

//worker sagas
export function* createFormByForm(action: RequestCreateForm){

    try{
        
        const newMeeting: FormState = yield createForm(action.payload);
        yield put({type:"APPEND_FORM_LIST",payload: newMeeting})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

//watcher sagas
export function* watchRequestCreateComplaint(){
    yield takeEvery("REQUEST_CREATE_FORM",createFormByForm)
}

//root saga
export default function* rootSaga(){

    yield all([watchRequestCreateForm()]) // an array of watcher sagas


}