import { Box, Divider, Typography } from "@mui/material";
import OptionsRow from "./OptionsRow";

export default function Question({ refs, question, dimmed, selectedIndex, onSelect }) {
    return (
        <Box ref={refs} sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: 4, opacity: dimmed ? 0.3 : 1 }}>
            <Typography variant="h5" sx={{ textAlign: "left" }}>
                {question}
            </Typography>
            <OptionsRow selectedIndex={selectedIndex} onSelect={onSelect} />
            <Divider
                sx={{
                    width: "100%",
                    borderColor: "grey.300",
                    my: 3
                }}
            />
        </Box>
    )
}
