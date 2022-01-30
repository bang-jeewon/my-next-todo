import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from "../../types/todo";
import fs from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      // const todos = await new Promise<TodoType[]>((resolve, reject) => {
      //   fs.readFile("../../data/todos.json", (err, data) => {
      //     //두번째 인자로 callback을 받는데, 에러값과 데이터값
      //     if (err) {
      //       return reject(err.message);
      //     }

      //     const todosData = data.toString();
      //     if (!todosData) {
      //       //* todos.json 값이 비어있다면(todosData = "") 빈 배열을 넘겨줌 ???
      //       return resolve([]);
      //     }

      //     const todos = JSON.parse(data.toString());
      //     return resolve(todos);
      //   });
      // });
      // res.statusCode = 200;
      // // todos를 결과값으로 보내준다
      // return res.send(todos);

      /** fs의 readFileSync 함수사용도 가능함
       * readFileSync는 파일을 동기적으로 불러오는 함수
       */
      const todosBuffer = fs.readFileSync("data/todos.json");
      const todosString = todosBuffer.toString();
      if (!todosString) {
        res.statusCode = 200;
        res.send([]);
      }
      const todos: TodoType[] = JSON.parse(todosString);
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
  res.statusCode = 405;
  console.log(res.statusCode);
  return res.end();
};

// 터미널에 curl http://localhost:3000/api/todos => hello Next!
// 터미널에 curl -X POST http://localhost:3000/api/todos => 405
