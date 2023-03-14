import Header from "../components/Header";
import Menu from "../components/Menu";

import styled from "styled-components";

export default function TodayPage() {
  return (
    <>
      <Header />
      <TodayContainer>
        <p>Lorem sdjkasndjksanjdkansjkdnjsakdbnjksbjshjdajdb</p>
      </TodayContainer>
      <Menu />
    </>
  );
}

const TodayContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 70px;
`
