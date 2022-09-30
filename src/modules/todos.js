import {createAction, createActions, handleActions} from "redux-actions";

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값 변경
const INSERT = 'todos/INSERT'; // 새로운 todos를 등록
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거
/* action타입 정의 */

/*export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
})*/
export const changeInput = createAction(CHANGE_INPUT, input => input );
//createAction으로 action생성할때, action에 필요한 추가 데이터는 payload라는 이름을 사용함

let id = 3;

/*export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});*/
//호출될때마다 id값에 1씩 더해줌

export const insert = createAction(INSERT, text=> ({  id:id++, text, done:false  }))


/*export const toggle = id => ({
    type: TOGGLE,
    id
})*/

export const toggle = createAction(TOGGLE, id => id );


/*export const remove = id => ({
    type: REMOVE,
    id
})*/

export const remove = createAction(REMOVE, id => id );

/* 액션 생성 함수 정의 */

/*  action = { type: 'fff', data: sfs   }  형태*/


// createAction으로 만든 action생성함수는 파라미터로 받아 온 값을 객체 안에 넣을 때 원하는 이름으로 넣는 것이 아니라, action.id, action.todo와 같이
// action.payload라는 이름을 공통적으로 넣어주게 됨.. 그래서 기존에 업데이트 로직에서도 모드 action.payload값을 조회하여 업데이트 하는 방식으로 ㄱㄱ

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용',
            done: false,
        },

    ]
};
//State의 초기 상태 정의

/*
function todos( state = initialState, action) {
    switch( action.type ) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo)
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id )
            }
        default:
            return state;
    }
}
*/


const todos = handleActions(
    {
        [CHANGE_INPUT]: (state,{ payload: input}) => ({ ...state, input: input  }),
        [INSERT]: (state,action) => ({ ...state, todos : state.todos.concat(action.payload)   }),
        [TOGGLE]: (state,action) => ({ ...state, todos: state.todos.map( todo=> todo.id === action.payload ? { ...todo, done:!todo.done } : todo )}),
        //action.payload == id
        [REMOVE]: (state,action) => ({ ...state, todos: state.todos.filter( todo=> todo.id !== action.payload)}),
        //filter : 원하는 조건을 만족하는 새로운 배열을 반환
    },
    initialState,
)


export default todos;
// 리듀서 함수 생성