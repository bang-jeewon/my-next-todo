import Link from "next/link";
import React from "react";
import styled from "styled-components";
import palette from "../styles/palette";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid ${palette.gray};
  h1 {
    //네스팅은 나중에 찾기 쉽도록 마지막 엘리먼트에서만 사용하는 걸 권장
    font-size: 21px;
  }
  &:hover {
    cursor: pointer;
  }
`;

// eslint-disable-next-line react/function-component-definition
const Header: React.FC = () => {
  return (
    <Container>
      <Link href='/'>
        <h1>✅ TodoList</h1>
      </Link>
    </Container>
  );
};

export default Header;
