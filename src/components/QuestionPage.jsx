import { Box, Button } from "@mui/material";
import Question from "./Question";
import Result from "./Result";
import { useRef, useState } from "react";
import calculateScore from "../scoreCalculator";
import { motion, AnimatePresence } from "framer-motion";
import ProgressHeader from "./ProgressHeader";
import questions from "../questions";
import NextQuestionsButton from "./NextQuestionsButton";

export default function QuestionPage() {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [currentPage, setCurrentPage] = useState(0);
    const [isShowResult, setIsShowResult] = useState(false);
    const [lastAnsweredIndex, setLastAnsweredIndex] = useState(-1);

    const questionsRefs = useRef([]);

    const displayingQuestions = questions.slice(0 + (currentPage * 5), 5 + (currentPage * 5));

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
    }

    const handleNextClick = () => {
        // 今表示されている質問が全て回答されているか確認
        const isAllAnswered = displayingQuestions.every((_, index) => answers[index + (currentPage * 5)] !== null);

        if (!isAllAnswered) {
            alert("全ての質問に回答してください");
            return;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(currentPage + 1);
        setLastAnsweredIndex(-1);
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 10, mb: 5}}>
            <ProgressHeader
                isPage1={currentPage === 0}
                answeredQuestion={answers.filter((answer) => answer !== null).length}
                totalQuestions={questions.length}
            />
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isShowResult ? (
                        <Result score={calculateScore(answers)} />
                    ) : (
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                            {displayingQuestions.map((question, index) => {
                                // 全部の質問に対するインデックス
                                const actualIndex = index + currentPage * 5;

                                return (
                                    <Question
                                        key={index}
                                        refs={element => questionsRefs.current[index] = element}
                                        question={question}
                                        dimmed={index !== lastAnsweredIndex + 1}
                                        selectedIndex={answers[actualIndex]}
                                        onSelect={(answer) => handleSelect(answer, actualIndex)}
                                    />
                                );
                            })}
                            <NextQuestionsButton onNext={handleNextClick} />
                            <Button onClick={() => setIsShowResult(true)}>計算</Button>
                        </Box>
                    )}
                </motion.div>
            </AnimatePresence>
        </Box>
    );
}
