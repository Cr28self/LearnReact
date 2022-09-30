
import './App.css';
import Counter from './component/Counter'
import Todos from "./component/Todos";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer />
        <hr />
        <TodosContainer />

    </div>
  );
}

export default App;


/*
* 리덕스
*
* action : 상태에 어떠한 변화가 필요하면 action이란 것이 발생
*   하나의 객체
*
* 어떠한 변화를 일으켜야 할때마다 액션 객체를 만들어야 함, 매번 객체를 직접 작성하기 불편하니까 이를 함수로 만들어서 관리함
* */
