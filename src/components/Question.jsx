import { Box, Typography } from "@mui/material";
import OptionsRow from "./OptionsRow";

export default function Question({question}) {
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "start", gap: 4}}>
            <Typography variant="h4">
                {question}
            </Typography>
            <OptionsRow />
        </Box>
    )
}
