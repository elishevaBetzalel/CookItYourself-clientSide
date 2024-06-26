import { produce } from 'immer'
import { createStore } from 'redux'
import { GetUser, SetUser } from '../function'

const initialState = {
    admin:{
        "id": 1,
        "lastName": "ראשי",
        "firstName": "מנהל",
        "email": "adm@gmail.com",
        "password": "1234"
    },
     currentUser: GetUser()
}


const reducer = produce((state, action) => {
    if(action.type == 'SET_CURRENT_USER'){
        SetUser(action.payload)
        return { ...state, currentUser: action.payload }
    }
    return {state}
}, initialState)

const store = createStore(reducer)
export default store;

