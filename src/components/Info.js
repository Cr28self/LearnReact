import React, {useState, useEffect, useReducer} from 'react';
import useInput from "../hooks/useInput";


const Info = () => {


    const [state, onChange] = useInput({
        name: ' ',
        nickname: ' ',
    })

    const { name, nickname } = state

    return (
        <>
            <input name="name" value={name} onChange={onChange} />
            <input name="nickname" value={nickname} onChange={onChange} />

            <b>이름 : </b> {name}
            <b>닉네임 : </b> {nickname}
        </>
    )
}
export default Info;