import { GetServerSideProps, NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todos";

// const todos: TodoType[] = [ // 임시 데이터
//   { id: 1, text: "마커 이동하기", color: "red", checked: false },
//   { id: 2, text: "인원 컴포넌트", color: "navy", checked: true },
//   { id: 3, text: "400에러 원인", color: "yellow", checked: false },
// ];

interface IProps {
  todos: TodoType[];
}

//pages 폴더에서 사용하는 컴포넌트의 타입은 NextPage
//NextPage는 리액트 컴포넌트의 확장으로 getInitialProps라는 함수를 가지고 있음
const index: NextPage<IProps> = ({ todos }) => {
  /** TodoList가 props로 todos를 받기로 되어있음 */
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // const res = await Axios.get("api/todos");
    const { data } = await getTodosAPI();
    return { props: { todos: data } };
  } catch (e) {
    console.log(e);
    return { props: { todos: [] } };
  }
};

export default index;
