import { Box, Typography } from "@mui/material";
import OptionsRow from "./OptionsRow";

export default function Question() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "start", gap: 4}}>
            <Typography variant="h4">
                What is your favorite color?
            </Typography>
            <OptionsRow />
        </Box>
    )
}
