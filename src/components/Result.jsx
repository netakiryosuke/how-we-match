import { useLocation } from "react-router-dom"
import getResultMessage from "../getResultMessage";
import { Box } from "@mui/material";

export default function Result() {
    const location = useLocation();

    const { score } = location.state || {};

    return (
        score ? (
            <Box>
                <h2>netakiryosukeとの相性一致度 {score} ％</h2>
                <h5>一言：{getResultMessage(score)}</h5>
            </Box>
        ) : (
            <Box>
                <h2>質問に答えず、どのように相性を確かめましょうか？</h2>
            </Box>
        )
    );
}
