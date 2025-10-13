import { Box, Button, Typography } from "@mui/material";

export default function TopPage() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 10, mb: 5 }}>
            <Typography>あなたのことについて考えてください。</Typography>
            <Button>診断を開始</Button>
        </Box>
    );
}
