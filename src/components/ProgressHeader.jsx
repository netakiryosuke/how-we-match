import { Button, LinearProgress, Paper, Tooltip } from "@mui/material";

export default function ProgressHeader({ isPage1, answeredQuestion, totalQuestions }) {
    const progress = (answeredQuestion / totalQuestions) * 100;

    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100vw",
                gap: 5,
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1,
                pl: "4vw",
            }}>
            <Tooltip title="最初にした回答が一番自分を表していると思いますよ。" arrow>
                <Button
                    onClick={() => console.log("If you wanna go back, just reload the page. Or... you could make that feature yourself and send me a PR.")}
                    disabled={isPage1}
                >
                    ←前の質問に戻る
                </Button>
            </Tooltip>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    width: "80vw",
                    height: 8,
                    borderRadius: 5,
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: "#4298B4",
                    },
                    backgroundColor: "#eee"
                }} />
        </Paper>
    );
}
