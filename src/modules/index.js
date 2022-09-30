import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos";


const rootReducer = combineReducers({
    counter, //기존에 만들었던 리듀서 함수들
    todos
});


//createStore함수를 사용하여 스토어를 만들때는 리듀서를 하나만 사용해야해서
//기존에 만들었던 리듀서를 하나로 합쳐주어야 함


export default rootReducer;
//루트 리듀서


//파일 이름을 index.js로 설정해주면 나중에 불러올때 디렉터리 이름만 입력하여 불러올 수 있음
// import rootReducer from './modules'; 이런식으로..


//스토어를 만들고 리액트에 리덕스 적용하는 작업은 src 디렉터리의 index.js에서 이루어짐