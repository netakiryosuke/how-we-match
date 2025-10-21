import { Box } from "@mui/material";
import Question from "./Question";
import calculateScore from "../calculateScore";
import { motion, AnimatePresence } from "framer-motion";
import ProgressHeader from "./ProgressHeader";
import questions from "../questions";
import NextQuestionsButton from "./NextQuestionsButton";
import ShowResultButton from "./ShowResultButton";
import { useNavigate } from "react-router-dom";
import useQuestionFlow from "../useQuestionFlow";

export default function QuestionPage() {
    const {
        answers,
        currentPage,
        displayingQuestions,
        questionsRefs,
        lastAnsweredIndex,
        handleSelect,
        isAllAnswered,
        goToNextPage,
    } = useQuestionFlow();

    const navigate = useNavigate();

    const handleShowResultClick = () => {
        if (!isAllAnswered) {
            alert("全ての質問に回答してください。（早く結果を見たい気持ちはわかりますが）");
            return;
        }

        navigate("/result", { state: { score: calculateScore(answers) } })
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 10, mb: 5 }}>
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
                    </Box>
                </motion.div>
            </AnimatePresence>
            {currentPage === 3 ? (
                <ShowResultButton onClick={handleShowResultClick} />
            ) : (
                <NextQuestionsButton onClick={goToNextPage} />
            )}
        </Box>
    );
}
