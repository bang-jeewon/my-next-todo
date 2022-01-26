import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "마커 이동하기", color: "red", checked: true },
  { id: 2, text: "인원 컴포넌트", color: "navy", checked: false },
  { id: 3, text: "400에러 원인", color: "yellow", checked: false },
];

//pages 폴더에서 사용하는 컴포넌트의 타입은 NextPage
//NextPage는 리액트 컴포넌트의 확장으로 getInitialProps라는 함수를 가지고 있음
const index: NextPage = () => {
  /** TodoList가 props로 todos를 받기로 되어있음 */
  return <TodoList todos={todos} />;
};

export default index;
