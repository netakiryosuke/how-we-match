import { useLocation } from "react-router-dom";
import getResultMessage from "../getResultMessage";
import { Box } from "@mui/material";
import FallingLeaves from "./FallingLeaves";

export default function Result() {
    const location = useLocation();
    const { score } = location.state || {};

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                margin: 0,
                padding: 0,
                background: "linear-gradient(180deg, #ffcc70 10%, #c85000 80%, #451a00 100%)"
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                <FallingLeaves key={score ?? "no-score"} imageSrc="/leaf.png" count={25} />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                <FallingLeaves key={score ?? "no-score"} imageSrc="/leaf2.png" count={10} />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                <FallingLeaves key={score ?? "no-score"} imageSrc="/leaf3.png" count={15} />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#222",
                    zIndex: 1,
                    width: "100%",
                }}
            >
                {score ? (
                    <>
                        <h2>netakiryosukeとの相性一致度 {score}％</h2>
                        <h5>一言：{getResultMessage(score)}</h5>
                    </>
                ) : (
                    <>
                        <h2>netakiryosukeとの相性一致度 -100％</h2>
                        <h5>一言：質問に答えず相性が分かるならこんなアプリ作っていませんね。</h5>
                    </>
                )}
            </Box>
        </Box>
    );
}
