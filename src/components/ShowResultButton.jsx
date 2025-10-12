import { Button } from "@mui/material";

export default function NextQuestionsButton({ onClick }) {
    return (
        <Button
            onClick={onClick}
            sx={{
                width: "120px",
                height: "50px",
                fontSize: "16px",
                color: "white",
                borderRadius: "40px",
                backgroundColor: "#33a474",
                borderColor: "#33a474",
                ":hover": {
                    opacity: 0.8
                }
            }}
        >
            結果を見る
        </Button>
    );
}
