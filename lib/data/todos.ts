/** 투두 데이터를 관리하는 함수들을 정의 */
import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../types/todo";

//투두리스트 데이터 불러오기 pages/api/todos.ts 내용을 그대로 가져옴
const getList = () => {
  const todosBuffer = readFileSync("data/todos.json");
  const todosString = todosBuffer.toString();
  if (!todosString) {
    return [];
  }
  const todos: TodoType[] = JSON.parse(todosString);
  return todos;
};

//id의 투두가 있는지 확인하기
/** some 함수는 일치하는 id가 있다면 true를 리턴하고, id가 없다면 false를 리턴하게 됩니다 */
const exist = ({ id }: { id: number }) => {
  const todos = getList();
  const todo = todos.some((todo) => todo.id === id);
  return todo;
};

//투두리스트 저장하기
const write = async (todos: TodoType[]) => {
  writeFileSync("data/todos.json", JSON.stringify(todos));
};

export default { getList, exist, write };
