import { Button, LinearProgress, Paper } from "@mui/material";

export default function ProgressHeader({ isPage1, answeredQuestion, totalQuestions }) {
    const progress = (answeredQuestion / totalQuestions) * 100;

    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                gap: 5,
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1,
                pl: 20,
            }}>
            <Button onClick={() => alert("ダメ")} disabled={isPage1}>←前の質問に戻る</Button>
            <LinearProgress variant="determinate" value={progress} sx={{ width: "80vw", height: 8, borderRadius: 5 }} />
        </Paper>
    );
}
