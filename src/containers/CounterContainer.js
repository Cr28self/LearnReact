import React, {useState, useEffect} from 'react';
import Counter from "../component/Counter";
import {connect} from "react-redux";
import {decrease, increase} from "../modules/counter";
import {bindActionCreators} from "redux";

const CounterContainer = ({number, increase, decrease}) => {

    return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>

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


export default connect(
    state => ({
        number: state.counter.number,
    }),

// connect함수가 내부적으로 bindActionCreators 작업을 대신 해줌
    {
        increase,  //dispatch(increase())
        decrease
    },
)(CounterContainer);
// number, increase, decrese props를 CounterContainer로 전달!!

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