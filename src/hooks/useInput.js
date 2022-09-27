import React, {useState, useEffect, useReducer} from 'react';


function reducer ( state, action ){

    return {
      // TODO : state 새롭게 갱신
        ...state,
        [action.name] : action.value,
    };
}


export default function useInput(initialForm) {

    const [state, dispatch] = useReducer( reducer, initialForm );

    const onChange = e => {
        dispatch(e.target)
        //   -> dispatch는 액션을 발생시키는 함수 ( dispatch(action)과 같은 형태 )
        //   -> 여기선 e.target이 action이 된다!!!

    };



    return [state, onChange];
}


// TODO : Custom_Hook
