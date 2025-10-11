import { Box, Button } from "@mui/material";
import Question from "./Question";
import Result from "./Result";
import { useState } from "react";
import calculateScore from "../scoreCalculator";

export default function QuestionPage() {
    const questions = [
        "あなたは自分の意見をはっきり言う方だと思いますか？",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"
    ];

    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [currentPage, setCurrentPage] = useState(0);
    const [isShowResult, setIsShowResult] = useState(false);

    const displayingQuestions = questions.slice(0 + (currentPage * 5), 5 + (currentPage * 5));

    const handleSelect = (answer, questionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answer;
        setAnswers(newAnswers);
    }

    return (
        <Box>
            {isShowResult ? (
                <Result score={calculateScore(answers)} />
            ) : (
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    {displayingQuestions.map((question, index) => {
                        const actualIndex = index + currentPage * 5;
                        return (
                            <Question
                                key={index}
                                question={question}
                                selectedIndex={answers[actualIndex]}
                                onSelect={(answer) => handleSelect(answer, actualIndex)}
                            />
                        );
                    })}
                    <Button onClick={() => setCurrentPage(currentPage + 1)}>次へ→</Button>
                    <Button onClick={() => setIsShowResult(true)}>計算</Button>
                </Box>
            )}
        </Box>
    );
}
