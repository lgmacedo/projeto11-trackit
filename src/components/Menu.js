import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";

import Progresso from "../globals/Progresso";

export default function Menu() {
  const [progresso, setProgresso] = useContext(Progresso);
  return (
    <MenuContainer data-test="menu">
      <Link data-test="habit-link" to="/habitos">Hábitos</Link>
      <Link data-test="today-link" to="/hoje">
        <CircularProgressbar
          value={Math.round((progresso[0]/progresso[1])*100)}
          text={"Hoje"}
          background={true}
          backgroundPadding={5}
          styles={buildStyles({
            textSize: '17.976px',
            textColor: 'white',
            pathColor: 'white',
            trailColor: '#52B6FF',
            backgroundColor: '#52B6FF'
          })}
        />
      </Link>
      <Link data-test="history-link" to="/historico">Histórico</Link>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 35px;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #ffffff;
  position: fixed;
  left: 0;
  bottom: 0;
  svg {
    width: 91px;
    height: 91px;
    margin-bottom: 40px;
  }
  a {
    text-decoration: none;
    color: #52b6ff;
  }
`;
