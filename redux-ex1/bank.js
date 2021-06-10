//store
//initial state
//state
//reducer
//dispatch
//subscribe
//action
//payload / value


//import createStore function
//createStore is the predefined function
//createStore function available in redux package
//createStore function used to create the store
const { createStore }  =  require("redux");


//define initialState
//in general, we will define initialState by using json
const initialState = {
    bal : 10000
};


//create the reducer
//in general, we will create reducer by using arrow functions
//arguments     @state  (output)     @action  (input)
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "DEPOSIT":
            return{
                bal : state.bal+action.payload
            }

        case "WITHDRAW":
            return{
                bal : state.bal - action.payload
            }

        default:
                return state;
    }
};


const store = createStore(reducer);

//subscription
store.subscribe(()=>{
    console.log( store.getState() );
});

//dispatch
store.dispatch({type:"WITHDRAW",payload:1000});
store.dispatch({type:"DEPOSIT",payload:5000});
store.dispatch({type:"WITHDRAW",payload:2000});
store.dispatch({type:"DEPOSIT",payload:10000});