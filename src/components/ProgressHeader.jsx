import {
    Alert,
    Box,
    Button,
    LinearProgress,
    Paper,
    Snackbar,
    Tooltip,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useState } from "react";

export default function ProgressHeader({ isPage1, answeredQuestion, totalQuestions }) {
    const progress = (answeredQuestion / totalQuestions) * 100;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [isHintOpen, setIsHintOpen] = useState(false);

    const hintMessage =
        "最初にした回答が一番自分を表していると思いますよ。";

    const handleHint = () => {
        if (isPage1) return;
        if (isMobile) {
            setIsHintOpen(true);
            return;
        }

        console.log(
            "If you wanna go back, just reload the page. Or... you could make that feature yourself and send me a PR."
        );
    };

    const hintButton = (
        <span>
            <Button
                onClick={handleHint}
                disabled={isPage1}
                sx={{
                    fontSize: { xs: "12px", sm: "14px" },
                    minWidth: { xs: "auto", sm: "auto" },
                    px: { xs: 1, sm: 2 },
                }}
            >
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                    ←前の質問に戻る
                </Box>
                <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
                    ←戻る
                </Box>
            </Button>
        </span>
    );

    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100vw",
                gap: { xs: 1, sm: 3, md: 5 },
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1,
                pl: { xs: "2vw", sm: "3vw", md: "4vw" },
                pr: { xs: "2vw", sm: "3vw", md: "4vw" },
                py: 1
            }}>
            {isMobile ? (
                hintButton
            ) : (
                <Tooltip title={hintMessage} arrow>
                    {hintButton}
                </Tooltip>
            )}
            <Snackbar
                open={isHintOpen}
                autoHideDuration={2500}
                onClose={() => setIsHintOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setIsHintOpen(false)}
                    severity="info"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {hintMessage}
                </Alert>
            </Snackbar>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    width: { xs: "60vw", sm: "70vw", md: "80vw" },
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
