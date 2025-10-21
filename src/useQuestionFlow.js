import { useState, useRef } from "react";
import questions from "./questions";

export default function useQuestionFlow() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentPage, setCurrentPage] = useState(0);
  const [lastAnsweredIndex, setLastAnsweredIndex] = useState(-1);
  const questionsRefs = useRef([]);

  const displayingQuestions = questions.slice(currentPage * 5, (currentPage + 1) * 5);

  const handleSelect = (answer, actualIndex) => {
    const newAnswers = [...answers];
    newAnswers[actualIndex] = answer;
    setAnswers(newAnswers);

    const indexInPage = actualIndex - currentPage * 5;
    if (indexInPage > lastAnsweredIndex && indexInPage < 4) {
      setLastAnsweredIndex(indexInPage);

      // 少し下にスクロール（次の質問が見えるように）
      const nextIndex = indexInPage + 1;
      const nextQuestion = questionsRefs.current[nextIndex];
      if (nextQuestion) {
        nextQuestion.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const isAllAnswered = displayingQuestions.every(
    (_, i) => answers[i + currentPage * 5] !== null
  );

  const goToNextPage = () => {
    if (!isAllAnswered) {
      alert("全ての質問に回答してください。");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(currentPage + 1);
    setLastAnsweredIndex(-1);
  };

  return {
    answers,
    setAnswers,
    currentPage,
    setCurrentPage,
    lastAnsweredIndex,
    setLastAnsweredIndex,
    displayingQuestions,
    questionsRefs,
    handleSelect,
    isAllAnswered,
    goToNextPage
  };
}
