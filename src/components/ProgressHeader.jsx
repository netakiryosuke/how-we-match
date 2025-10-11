import { Button, LinearProgress, Paper } from "@mui/material";

export default function ProgressHeader({ currentPage, totalPages }) {
    const progress = (currentPage / totalPages) * 100;

    return (
        <Paper sx={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", gap: 5}}>
            <Button onClick={() => alert("ダメ")}>戻る</Button>
            <LinearProgress variant="determinate" value={progress} sx={{ flexGrow: 0.95, height: 8, borderRadius: 5 }}/>
        </Paper>
    );
}
