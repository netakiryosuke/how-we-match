import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TopPage() {
    const navigate = useNavigate();
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 10, mb: 5 }}>
            <Typography variant="h2">無料相性診断テスト</Typography>
            <Typography variant="h5">自分のこととして回答してください</Typography>
            <Button onClick={() => navigate("/question")}>診断を開始</Button>
        </Box>
    );
}
