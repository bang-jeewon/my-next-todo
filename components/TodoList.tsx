/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import palette from "../styles/palette";
import { TodoType } from "../types/todo";

import TrashCanIcon from "../public/statics/svg/trashcan.svg";
import CheckMarkIcon from "../public/statics/svg/checkmark.svg";

const Container = styled.div`
  width: 100%;
  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};
    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
    .todo-list-header-colors {
      display: flex;
      .todo-list-header-color-num {
        display: flex;
        margin-right: 8px;
        p {
          font-size: 14px;
          line-height: 16px;
          margin: 0;
          margin-left: 6px;
        }
        .todo-list-header-round-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }
    }
  }
  .bg-blue {
    background-color: ${palette.blue};
  }
  .bg-green {
    background-color: ${palette.green};
  }
  .bg-navy {
    background-color: ${palette.navy};
  }
  .bg-orange {
    background-color: ${palette.orange};
  }
  .bg-red {
    background-color: ${palette.red};
  }
  .bg-yellow {
    background-color: ${palette.yellow};
  }

  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${palette.gray};

      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        .checked-todo-text {
          color: ${palette.gray};
          text-decoration: line-through;
        }
        .todo-text {
          margin-left: 12px;
          font-size: 16px;
        }
      }
      .todo-right-side {
        display: flex;
        margin-right: 12px;

        svg {
          &:first-child {
            margin-right: 16px;
          }
        }

        .todo-trash-can {
          width: 16px;
          path {
            fill: ${palette.deep_red};
          }
        }
        .todo-check-mark {
          path {
            fill: ${palette.deep_green};
          }
          /* fill: ${palette.deep_green}; */
        }

        .todo-button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid ${palette.gray};
          background-color: transparent;
          outline: none;
        }
      }
    }
  }
`;

/** TodoList가 props로 todos를 받기 위해 타입을 설정해주어야 함 */
/** interface도 type과 동일하게 타입을 지정할 수 있다
 *  export를 하지 않는 타입은 interface를 사용하는 걸 선호한다고 함. 책에서는 */
/** TodoList 컴포넌트는 props로 IProps를 전달받기로 타입이 지정돼 있다는 의미 */
interface IProps {
  todos: TodoType[];
}

// eslint-disable-next-line react/function-component-definition
const TodoList: React.FC<IProps> = ({ todos }) => {
  /** todos의 타입이 IProps를 따름 !!!!! */
  /** React.FC의 타입은 '<>'은 제네릭이라고 읽으며
   * 여기서는 P(props)라는 타입(기본 값은 {} 객체?)을 제네릭을 사용하여
   * React.FunctionComponent에 전달해주고 있음 */

  //* 색깔 객체 구하기 2 switch 버전
  /** 컴포넌트가 리렌더(전달받은 props가 변경시)될 때마다 재계산되는데 이를 방지해야 함 */
  //useCallback은 함수에 종속성을 줄 수 있음
  const getTodoColorNums = useCallback(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    todos.forEach((todo) => {
      //하나의 값에 대한 조건문은 switch 사용 편리
      switch (todo.color) {
        case "red":
          red += 1;
          break;
        case "orange":
          orange += 1;
          break;
        case "yellow":
          yellow += 1;
          break;
        case "green":
          green += 1;
          break;
        case "blue":
          blue += 1;
          break;
        case "navy":
          navy += 1;
          break;
        default:
          break;
      }
    });
    return { red, orange, yellow, green, blue, navy };
  }, [todos]);

  //useMemo는 변수에 종속성을 주어 함수의 재연산을 방지할 수 있는 hooks
  const todoColorNums = useMemo(getTodoColorNums, [todos]);
  console.log(todoColorNums);

  return (
    <Container>
      <div className='todo-list-header'>
        <p className='todo-list-last-todo'>
          남은 TODO<span>{todos.length}개</span>
        </p>
        <div className='todo-list-header-colors'>
          {Object.keys(todoColorNums).map((color, index) => (
            <div className='todo-list-header-color-num' key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{todoColorNums[color]}개</p>
            </div>
          ))}
        </div>
      </div>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <li className='todo-item' key={todo.id}>
            <div className='todo-left-side'>
              <div className={`todo-color-block bg-${todo.color}`} />
              <p
                className={`todo-text ${
                  todo.checked ? "checked-todo-text" : ""
                }`}
              >
                {todo.text}
              </p>
            </div>
            <div className='todo-right-side'>
              {/* {todo.checked && (
                <>
                  <TrashCanIcon className='todo-trash-can' onClick={() => {}} />
                  <CheckMarkIcon
                    className='todo-check-mark'
                    onClick={() => {}}
                  />
                </>
              )} */}
              {!todo.checked && (
                <button
                  type='button'
                  className='todo-button'
                  onClick={() => {}}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
