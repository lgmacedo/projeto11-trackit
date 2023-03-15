import Header from "../components/Header";
import Menu from "../components/Menu";

import styled from "styled-components";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Usuario from "../globals/Usuario";
import Progresso from "../globals/Progresso";
import DiasSemana from "../globals/DiasSemana";

import Check from "../assets/check.png";

export default function TodayPage() {
  const [usuario, setUsuario] = useContext(Usuario);
  const [progresso, setProgresso] = useContext(Progresso);

  const [todayHabits, setTodayHabits] = useState([]);

  useEffect(todayUpdate, []);

  function todayUpdate() {
    const config = {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    };
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promise.then((res) => todayUpdate2(res.data));
  }

  function todayUpdate2(data) {
    const newTodayHabits = data;
    let done = 0;
    let toDo = data.length;
    for (let i = 0; i < data.length; i++) {
      if (data[i].done === true) {
        done++;
      }
    }
    setProgresso([done, toDo]);
    setTodayHabits(newTodayHabits);
  }

  function clickHabit(id, done) {
    const config = {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    };
    if (done) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        {},
        config
      );
      promise.then(todayUpdate);
    } else {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        {},
        config
      );
      promise.then(todayUpdate);
    }
  }

  return (
    <>
      <Header />
      <TodayContainer>
        <TodayTitle progresso={(progresso[0] / progresso[1]) * 100 > 0}>
          <p>
            {DiasSemana[dayjs().day()].extenso}, {dayjs().date()}/
            {(dayjs().month() + 1).toString().padStart(2, "0")}
          </p>
          <p>Nenhum hábito concluído ainda</p>
          <p>
            {Math.round((progresso[0] / progresso[1]) * 100)}% dos hábitos
            concluídos
          </p>
        </TodayTitle>
        {todayHabits.map((h) => (
          <Habit key={h.id}>
            <HabitInfo>
              <HabitTitle>{h.name}</HabitTitle>
              <HabitStats
                greenSeq={h.done}
                greenRec={
                  h.currentSequence === h.highestSequence &&
                  h.highestSequence > 0
                }
              >
                <p>
                  Sequência atual:{" "}
                  <span>
                    {h.currentSequence !== 1
                      ? `${h.currentSequence} dias`
                      : `${h.currentSequence} dia`}
                  </span>
                </p>
                <p>
                  Seu recorde:{" "}
                  <span>
                    {h.highestSequence !== 1
                      ? `${h.highestSequence} dias`
                      : `${h.highestSequence} dia`}
                  </span>
                </p>
              </HabitStats>
            </HabitInfo>
            <DoneButton done={h.done}>
              <button onClick={() => clickHabit(h.id, h.done)}>
                <img src={Check} alt="check" />
              </button>
            </DoneButton>
          </Habit>
        ))}
      </TodayContainer>
      <Menu />
    </>
  );
}

const TodayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;

const TodayTitle = styled.div`
  padding-top: 28px;
  width: 90.67%;
  margin: 0 auto 28px;
  p:nth-child(1) {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  p:nth-child(2) {
    display: ${({ progresso }) => (progresso ? "none" : "")};
    font-size: 17.976px;
    line-height: 22px;
    color: #bababa;
  }
  p:nth-child(3) {
    display: ${({ progresso }) => (progresso ? "" : "none")};
    font-size: 17.976px;
    line-height: 22px;
    color: #8fc549;
  }
`;

const Habit = styled.div`
  margin: 0 auto 10px;
  width: 90.67%;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HabitInfo = styled.div`
  margin-left: 15px;
`;

const HabitTitle = styled.p`
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  margin-bottom: 7px;
`;

const HabitStats = styled.div`
  font-size: 12.976px;
  line-height: 16px;
  color: #666666;
  p:nth-child(1) span {
    color: ${({ greenSeq }) => (greenSeq ? "#8FC549" : "")};
  }
  p:nth-child(2) span {
    color: ${({ greenRec }) => (greenRec ? "#8FC549" : "")};
  }
`;

const DoneButton = styled.div`
  button {
    width: 69px;
    height: 69px;
    background-color: ${({ done }) => (done ? "#8FC549" : "#ebebeb")};
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 13px;
  }
`;
