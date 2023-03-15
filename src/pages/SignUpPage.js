import logo from "../assets/logo.png";

import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ThreeDots } from "react-loader-spinner";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    senha: "",
    nome: "",
    foto: "",
    disabled: false,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function signup(e) {
    e.preventDefault();
    setForm({ ...form, disabled: true });
    const signup = {
      email: form.email,
      name: form.nome,
      image: form.foto,
      password: form.senha,
    };
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      signup
    );
    promise.then(signUpSuccess);
    promise.catch(signUpFailed);
  }

  function signUpSuccess() {
    navigate("/");
  }

  function signUpFailed() {
    alert("Dados para cadastro não conferem");
    setForm({ ...form, disabled: false });
  }

  return (
    <SignUpContainer disabled={form.disabled}>
      <img src={logo} alt="trackit-logo" />
      <form onSubmit={signup}>
        <input
          data-test="email-input"
          required
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => handleChange(e)}
          placeholder="email"
          disabled={form.disabled ? true : false}
        />
        <input
          data-test="password-input"
          required
          type="password"
          name="senha"
          value={form.senha}
          onChange={(e) => handleChange(e)}
          placeholder="senha"
          disabled={form.disabled ? true : false}
        />
        <input
          data-test="user-name-input"
          required
          name="nome"
          value={form.nome}
          onChange={(e) => handleChange(e)}
          placeholder="nome"
          disabled={form.disabled ? true : false}
        />
        <input
          data-test="user-image-input"
          required
          name="foto"
          value={form.foto}
          onChange={(e) => handleChange(e)}
          placeholder="foto"
          disabled={form.disabled ? true : false}
        />
        <button data-test="signup-btn" type="submit" disabled={form.disabled ? true : false}>
          <p>Cadastrar</p>
          <ThreeDots
            height="13"
            width="51"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={form.disabled}
          />
        </button>
      </form>
      <Link data-test="login-link" to="/">Já tem uma conta? Faça login!</Link>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  img {
    margin-top: 70px;
    width: 180px;
    height: 180px;
  }
  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
  }
  input {
    width: 303px;
    height: 45px;
    background: ${({ disabled }) => (disabled ? "#f2f2f2" : "#ffffff")};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${({ disabled }) => (disabled ? "#d4d4d4" : "black")};
    padding-left: 11px;
    &::placeholder {
      color: #dbdbdb;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    background: #52b6ff;
    opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
    border: 0px;
    border-radius: 4.63636px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
    color: white;
    p {
      display: ${({ disabled }) => (disabled ? "none" : "")};
    }
  }
  a {
    margin-top: 25px;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    color: #52b6ff;
  }
`;
