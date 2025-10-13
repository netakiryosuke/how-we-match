import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TopPage() {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 10, mb: 5, gap: 2}}>
            <Typography variant="h2" sx={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "54px", fontWeight: "bold" }}>無料相性診断テスト</Typography>
            <Typography variant="h6" sx={{ fontFamily: "'Noto Sans JP', sans-serif"}}>あなたとnetakiryosukeの相性を診断します</Typography>
            <Button
                onClick={() => navigate("/question")}
                sx={{
                    width: "120px",
                    height: "50px",
                    fontSize: "16px",
                    color: "white",
                    borderRadius: "40px",
                    backgroundColor: "#4298B4",
                    borderColor: "#4298B4",
                    margin: "30px",
                    ":hover": {
                        opacity: 0.8
                    }
                }}
            >診断を開始</Button>
        </Box>
    );
}
