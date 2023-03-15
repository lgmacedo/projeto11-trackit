import styled from "styled-components";

import Usuario from "../globals/Usuario";
import { useContext } from "react";

export default function Header() {
  const [usuario, setUsuario] = useContext(Usuario);
  return (
    <HeaderContainer>
      <p>TrackIt</p>
      <img src={usuario.image} alt="profile-picture" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 1;
  p {
    font-family: "Playball", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    margin-left: 15px;
    color: white;
  }
  img {
    width: 51px;
    height: 51px;
    margin-right: 15px;
    border-radius: 50%;
  }
`;
