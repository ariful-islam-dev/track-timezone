import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  margin: 15px 0;
  width: 32%;
  box-sizing: border-box;
  padding: 20px;
  border: 1px ridge gray;
  border-radius: 5px;

  :hover {
    box-shadow: 1px 1px 10px #000;
    background: #edfdff;
  }
`;
