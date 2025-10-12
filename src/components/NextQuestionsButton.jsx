import { Button } from "@mui/material";

export default function NextQuestionsButton({ onNext }) {
    return (
        <Button
            onClick={onNext}
            sx={{
                width: "120px",
                height: "50px",
                fontSize: "16px",
                color: "white",
                borderRadius: "40px",
                backgroundColor: "#88619a",
                borderColor: "#88619a",
                ":hover": {
                    opacity: 0.8
                }
            }}
        >
            次へ →
        </Button>
    );
}
