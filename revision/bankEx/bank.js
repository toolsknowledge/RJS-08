//store

//initialState

//reducer

//state

//dispatch

//subscribe

//action

//payload


//import createStore function
//createStore function used to create the store
const { createStore } = require("redux");

const initialState = {
    intitialBal : 10000
};


const reducer = ( state=initialState, action )=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                intitialBal : state.intitialBal - action.payload
            }

        case "DEPOSIT":
            return{
                ...state,
                intitialBal : state.intitialBal + action.payload
            }

        default:
            return state;
    }
};


const store = createStore(reducer);


//receive
store.subscribe(()=>{
    console.log( store.getState() );
});


store.dispatch({type:"WITHDRAW",payload:1000});
store.dispatch({type:"DEPOSIT",payload:5000});
store.dispatch({type:"WITHDRAW",payload:2000});
store.dispatch({type:"DEPOSIT",payload:10000});
store.dispatch({type:"WITHDRAW",payload:5000});














