import React from "react";
import AboutUs from "./AboutUs";
import { questionsAboutUs } from "./QuestionsData";

export const AllQuestions = () => {
  return (
    <div>
      <h2 className="question-title">SOBRE NOSOTROS</h2>

      {questionsAboutUs.map((question) => {
        return <AboutUs question={question} />;
      })}
      <h2 className="question-title">ENVIOS, METODOS DE PAGO Y REEMBOLSO</h2>



    </div>
  );
};
