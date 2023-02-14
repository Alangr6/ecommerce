import React from "react";
import AboutUs from "./QuestionsAboutUs";
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
      <div className="question-title-div">
        <h2 className="question-title">ÓXIDO NITROSO</h2>
      </div>

      {questionsN2O.map((question) => {
        return <QuestionN2O key={question.title} question={question} />;
      })}
      <div className="question-title-div">
        <h2 id="questions" className="question-title">
          ENVÍOS, MÉTODOS DE PAGO Y REEMBOLSO
        </h2>
      </div>
      {questionsShipping.map((question) => {
        return <QuestionsShipping key={question.title} question={question} />;
      })}
      <div className="question-title-div">
        <h2 className="question-title">SOBRE NOSOTROS</h2>
      </div>
      {questionsAboutUs.map((question) => {
        return <AboutUs key={question.title} question={question} />;
      })}
    </div>
  );
};
