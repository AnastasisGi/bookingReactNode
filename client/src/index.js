import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 1.import from react-redux  and redux 
 import {createStore,combineReducers} from 'redux'
 import {Provider} from 'react-redux'
 import {composeWithDevTools} from 'redux-devtools-extension'
 //2.Create a reducer function 

 const authReducer = (state={},action)=>{
  //  Each action will have a {type:" e.g. LOGGED_IN_USER   ", payload: e.g. {name:"ryan",role:"seller"}  }
  switch(action.type) {
    case "LOGGED_IN_USER":
      return {...state, ...action.payload}
      case "LOGGED_OUT":
        return action.payload;
        default:
          return state;
  }
 }


//  3. Combine multiple reducers 

const rootReducer = combineReducers({
  user: authReducer,
})

// 4. Create redux store 
// we need to execure the below devtools because it is a function 
const store = createStore(rootReducer,composeWithDevTools());

// 5. Provide redux store to the whole app

// see below we are rapping our app with the Provider tags 




ReactDOM.render(
  <React.StrictMode>
<Provider store = {store}>

    <App />

</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
