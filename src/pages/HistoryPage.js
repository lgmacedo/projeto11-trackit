import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function HistoryPage() {
  return (
    <>
      <Header />
      <HistoryContainer>
        <p>Histórico</p>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </HistoryContainer>
      <Menu />
    </>
  );
}

const HistoryContainer = styled.div`
  margin-left: 16px;
  padding-top: 70px;
  p:nth-child(1) {
    margin-top: 28px;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  p:nth-child(2) {
    margin-top: 17px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;
