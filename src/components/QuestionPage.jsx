import { Box, Button } from "@mui/material";
import Question from "./Question";
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

    const displayingQuestions = questions.slice(0 + (currentPage*5), 5 + (currentPage*5));

    const handleSelect = (answer, questionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answer;
        setAnswers(newAnswers);
    }

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    }

    const handleCalculateClick = () => {
        const score = calculateScore(answers);
        alert(`あなたのスコアは ${score} です`);
    }

    return (
        <Box>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: 6}}>
                {displayingQuestions.map((question, index) => {
                    const actualIndex = index + (currentPage * 5);
                    return (
                        <Question key={index} question={question} selectedIndex={answers[actualIndex]} onSelect={(answer) => handleSelect(answer, actualIndex)} />
                    )
                })}
            </Box>
            <Button onClick={handleNextClick}>次へ→</Button>
            <Button onClick={handleCalculateClick}>計算</Button>
        </Box>
    )
}
