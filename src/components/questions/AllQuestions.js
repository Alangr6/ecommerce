import React from "react";
import AboutUs from "./AboutUs";
import {
  questionsAboutUs,
  questionsN2O,
  questionsShipping,
} from "./QuestionsData";
import QuestionN2O from "./QuestionsN2O";
import QuestionsShipping from "./QuestionsShipping";

export const AllQuestions = () => {
  return (
    <div className="questions-div">
      
      <h2 className="question-title">OXIDO NITROSO</h2>
      {questionsN2O.map((question) => {
        return <QuestionN2O key={question.title} question={question} />;
      })}

      <h2 id="questions" className="question-title">ENVIOS, METODOS DE PAGO Y REEMBOLSO</h2>
      {questionsShipping.map((question) => {
        return <QuestionsShipping key={question.title} question={question} />;
      })}

      <h2 className="question-title">SOBRE NOSOTROS</h2>

      {questionsAboutUs.map((question) => {
        return <AboutUs key={question.title} question={question} />;
      })}
    </div>
  );
};
