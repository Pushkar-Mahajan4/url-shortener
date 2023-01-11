import { useEffect } from "react";
import { useNavigate } from "react-router";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const login = localStorage.getItem("token");
    console.log(login);
    if (!login) {
      navigate("/");
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
