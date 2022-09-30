import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";


export default function useActions( actions, deps){
    const dispatch = useDispatch();
    return useMemo(
        ()=>{
            if(Array.isArray(actions)){  //actions 파라미터가 배열인지 확인하는 함수
                return actions.map( a=> bindActionCreators(a, dispatch))
            }
            return bindActionCreators( actions, dispatch );
        },
        deps ? [dispatch, ...deps] : deps
    );

}

/*useActions 훅
*   액션 생성 함수를 액션을 디스패치하는 함수로 변환해 줍니다...
*   액션 생성 함수를 사용하여 액션 객체를 만들고, 이를 스토어에 디스패치하는 작업을 해주는 함수
*   첫번째 파리미터 : 액션 생성 함수로 이루어진 배열,
*   두번째 파라미터 : deps배열, 이 배열 안에 들어있는 원소가 바뀌면 action을 디스패치하는 함수를 새로 만들게 된다.*/