import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  font-style: italic;
`;

//pages 폴더에서 사용하는 컴포넌트의 타입은 NextPage
//NextPage는 리액트 컴포넌트의 확장으로 getInitialProps라는 함수를 가지고 있음
const index: NextPage = () => {
  return <Container>hello TypeScript</Container>;
};

export default index;
