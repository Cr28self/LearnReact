
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값 변경
const INSERT = 'todos/INSERT'; // 새로운 todos를 등록
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거
/* action타입 정의 */

export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
})

let id = 3;

export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});
//호출될때마다 id값에 1씩 더해줌

export const toggle = id => ({
    type: TOGGLE,
    id
})
export const remove = id => ({
    type: REMOVE,
    id
})
/* 액션 생성 함수 정의 */

/*  action = { type: 'fff', data: sfs   }  형태*/


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
export default todos;
// 리듀서 함수 생성