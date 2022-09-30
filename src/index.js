import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import rootReducer from "./modules";
import {Provider} from "react-redux";
import {devToolsEnhancer} from "redux-devtools-extension"; //modules의 index.js

const store = createStore(rootReducer,
    devToolsEnhancer() //리덕스 devTool 적용
    /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */  ); //store 생성

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <App />
    </Provider>
    //store를 사용할 수 있도록 App 컴포넌트를 Provider컴포넌트로 감싸준다.
    //이때 위에서 생성한 store를 props로 전달해 주어야..
);

