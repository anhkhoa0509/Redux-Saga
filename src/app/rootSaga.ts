import counterSaga from "features/counter/CounterSaga";
import {all} from "redux-saga/effects"

function* HelloSaga(){
    console.log("Hello Saga");
}




export default function* rootSaga(){
    console.log("Root Saga");
    yield all([HelloSaga(),counterSaga()])
}
