import {createAction, createActions, handleAction, handleActions} from "redux-actions";


const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
/* action 타입 정의
*  action 타입은 대문자로 정의
*   문자열 내용은 '모듈 이름/액션 이름'과 같은 형태로 작성함
*   문자열 안에 모듈 이름을 넣음으로써, 나중에 프로젝트가커졌을때 액션의 이름이 겹치지 않게 해줌   */


/*export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });*/
/* action 타입 정의 후 action 생성 함수 만들기*/
// action == 주문서

    //createAction사용하면 매번 객체를 직접 만들어 줄 필요없이 더욱 간단하게 액션생성함수를 선언 가능

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = { number:0 }; //초기 State 만들기

/*function counter( state = initialState, action ){
    switch ( action.type ) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };

        default:
            return state;
    }
}*/
/* 리듀서 함수 만들기
*  초기 상태 ( initialState )
*   현재 상태를 참조하여 새로운 객체를 생성해서 반환해줌  */



const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState
);

/* handelAction의 첫번째 파라미터는 각 action에 대한 업데이트 함수를 넣어줌,  두번째 파리미터는 초기 상태를 넣어줌*/





//action을 Store에서 바로 전달하는 것이 아니라, 리듀서에 전달해야함
// 리듀서가 주문서(action)을 보고 Store의 상태를 업데이트 하는 구조
// action을 Reducer에게 전달하기 위해서는 dispatch()를 사용해야함
// dispatch( action ) -> 리듀서 호출 -> 리듀서는 새로운 Store를 생성
export default counter;
