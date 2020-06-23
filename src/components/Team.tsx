import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { login } from "../store/auth/actions";

const Team = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: AppState) => state.auth);

  const handleLogin = () => {
    // enviaria o email e senha para o backend e receberia o fakeData
    const apiCall = (ms: number) => new Promise((r) => setTimeout(r, ms));
    apiCall(2000).then(() => {
      const fakeData = {
        id: 10,
        email: "rodgarcialima@gmail.com",
        firstName: "Rodrigo",
        lastName: "Lima",
      };
      dispatch(login(fakeData));
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <br />
      <span>Nome: {`${auth.firstName || ""} ${auth.lastName || ""}`}</span>
      <br />
      <span>Email: {auth.email}</span>
    </div>
  );
};

export default Team;
