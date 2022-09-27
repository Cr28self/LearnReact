import React, {useReducer, useState} from 'react';


function reducer(state, action) {
    // 현재 상태 ( state ), 업데이트를 위해 필요한 정보를 담은 action값을 전달받아서 새로운 상태를 변환하는 함수!!!
    // 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜줘야 한다!!
    // action.type에 따라 다른 작업 수행

    switch (action.type){
        case 'INCREMENT':
            return { value : state.value +1 }  //불변성을 지키면서 업데이트한 새로운 상태를 반환합니다.
        //여기서 return 하는 값이 state에 새롭게 반영됨!!!! ( 불변성을 지키면서.. )
    }
}


function Counter() {
    const [state, dispatch] = useReducer(reducer, { value:0 });
    /* useReducer ( 리듀서 함수 , 해당 리듀서의 기본값 )
    *  이 Hook을 사용하면 state값과 dispatch 함수를 반환한다!!!
    *   -> 이때 state는 현재 가리키고 있는 상태
    *   -> dispatch는 액션을 발생시키는 함수 ( dispatch(action)과 같은 형태 )
    *       -> 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출되는 구조!!!!
    *
    * useReducer의 장점 : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다!!!!!!!!   */

    return (
        <div>
        <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다.

        </p>


        <button onClick={()=>dispatch({ type: 'INCREMENT' })}>+1</button>
        <button onClick={()=>dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>

    )
}

export default Counter;