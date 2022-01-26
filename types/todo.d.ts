export type TodoType = {
  id: number;
  text: string;
  // color: string으로 해도 되지만, 값을 지정해주어 color 속성을 더 명확히 함
  color: "red" | "orange" | "yellow" | "green" | "blue" | "navy";
  checked: boolean;
};

/** 'd.ts'는 타입스크립트 코드의 타입 추론을 돕는 파일이라는 의미임 */
