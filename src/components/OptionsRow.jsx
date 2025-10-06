import { Box } from "@mui/material";
import { useState } from "react";
import CircleOption from "./CircleOption/CircleOption";

export default function OptionsRow() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const circleConfigs = [
        {size: 70, color: "#33a474"},
        {size: 56, color: "#33a474"},
        {size: 46, color: "#33a474"},
        {size: 36, color: "#ccc"},
        {size: 46, color: "#88619a"},
        {size: 56, color: "#88619a"},
        {size: 70, color: "#88619a"}
    ];

    return (
        <Box sx={{display: "flex", gap: 5, justifyContent: "center", alignItems: "center"}}>
            {circleConfigs.map((config, index) => (
                <CircleOption
                    key={index}
                    size={config.size}
                    color={config.color}
                    selected={selectedIndex === index}
                    onClick={() => setSelectedIndex(index)}
                />
            ))}
        </Box>
    );
}
