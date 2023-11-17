import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  const backMainPageHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <h2 >La pagina solicitada no fue encontrada</h2>
      <Button onClick={backMainPageHandler}>Volver a recetas</Button>
    </div>
  );
};

export default PageNotFound;