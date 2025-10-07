import { Box } from "@mui/material";
import Question from "./Question";

export default function QuestionPage() {
    const questions = [
        "あなたは自分の意見をはっきり言う方だと思いますか？",
        "あなたは新しいことに挑戦するのが好きですか？",
        "あなたは計画を立てて行動するタイプですか？",
        "あなたは人と協力して仕事をするのが得意ですか？",
        "あなたはストレスを感じたときにリラックスする方法を知っていますか？"
    ];
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: 6}}>
            {questions.map((question, index) => (
                <Question key={index} question={question} />
            ))}
        </Box>
    )
}
