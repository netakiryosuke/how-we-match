import { Box, Typography } from "@mui/material";
import OptionsRow from "./OptionsRow";

export default function Question({ question, selectedIndex, onSelect }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: 4 }}>
            <Typography variant="h4">
                {question}
            </Typography>
            <OptionsRow selectedIndex={selectedIndex} onSelect={onSelect} />
        </Box>
    )
}
