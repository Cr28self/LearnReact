import React, {useState, useEffect, useCallback} from 'react';
import Counter from "../component/Counter";
import {connect, useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "../modules/counter";
import {bindActionCreators} from "redux";

const CounterContainer = () => {

    const number = useSelector(state=> state.counter.number); //상태 조회
    const dispatch = useDispatch();  //store의 내장 함수 dispatch를 사용 가능케 함, 컨테이너 컴포넌트에서 액션을 디스패치해야할때 이 Hook을 사용하면 됨..

    const onIncrease = useCallback(()=> dispatch(increase()))
    const onDecrease = useCallback(()=> dispatch(decrease()))


    return <Counter number={number} onIncrease={onIncrease } onDecrease={onDecrease}/>
    //useDispatch사용할때 useCallback으로 감싸주는 습관을 들여야 함..

}

/*const mapStateToProps = state => ({
    number:state.counter.number,
})*/
//리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
// state : 현재 스토어가 지니고 있는 상태를 의미함
// 상태를 넘김!!

/*const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch(increase()) //리듀서 호출
    },
    decrease: () => {
        dispatch(decrease())
    }
});*/
//액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
// store의 내장함수 dispatch를 파라미터로 받아옴.
// action생성 함수를 넘김!!


/*export default connect(
    state => ({
        number: state.counter.number,
    }),

// connect함수가 내부적으로 bindActionCreators 작업을 대신 해줌
    {
        increase,  //dispatch(increase())
        decrease
    },
)(CounterContainer);*/
// number, increase, decrese props를 CounterContainer로 전달!!

/*// bindActionCreators 는 액션함수들을 자동으로 바인딩해줍니다.
        BaseActions: bindActionCreators(baseActions, dispatch)*/

/* 컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아오고, 또 액션도 디스패치해줄차례,
*   리덕스 스토어와 연동된 컴포넌트를 "컨테이너 컴포넌트"라고 한다.
*   위 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect함수를 사용해야함..
*       connect( mapStateToProps, mapDispatchToProps ) ( 연동할 컴포넌트 )
*           mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
*           mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
*               connect함수는 호출하면 또 다른 함수를 반환함..
*                           반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어짐
*                               const makeContainer = connect( mapStateToProps, mapDispatchToProps )
*
*                                makeContainer( 타깃 컴포넌트 )           */

//connet 대신 react-redux에서 제공해주는 Hooks를 사용 가능 ( useSelector )
/*
* const 결과 = useSelector( 상태 선택 함수 )  -- mapStateToProps랑 형태 동일함
* useDispatch Hooks
* const dispatch = useDispatch();
*   dispatch({ type: 'INCREASE' })*/

export default CounterContainer;