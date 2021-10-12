import styled from "styled-components";

const Container = styled.div`
  height: 70px;
  width: 100%;
  max-width: 11300px;
  padding: 0 30px;
  margin: 0 auto;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 30px;
  } ;
`;
export default Container;
