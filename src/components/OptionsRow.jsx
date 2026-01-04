import { Box, Typography } from "@mui/material";
import CircleOption from "./CircleOption";

export default function OptionsRow({ selectedIndex, onSelect }) {

    const circleConfigs = [
        { size: 70, color: "#33a474" },
        { size: 56, color: "#33a474" },
        { size: 46, color: "#33a474" },
        { size: 36, color: "#ccc" },
        { size: 46, color: "#88619a" },
        { size: 56, color: "#88619a" },
        { size: 70, color: "#88619a" }
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}>
            {/* Circles row */}
            <Box
                sx={{
                    display: "flex",
                    gap: { xs: 1, sm: 2, md: 3, lg: 5 },
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    width: "100%"
                }}>
                {circleConfigs.map((config, index) => (
                    <CircleOption
                        key={index}
                        size={config.size}
                        color={config.color}
                        selected={selectedIndex === index}
                        onClick={() => onSelect(index)}
                    />
                ))}
            </Box>
            {/* Labels row */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    px: { xs: 1, sm: 2 }
                }}>
                <Typography 
                    variant="h6" 
                    color="#33a474"
                    sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
                >
                    そう思う
                </Typography>
                <Typography 
                    variant="h6" 
                    color="#88619a"
                    sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
                >
                    そう思わない
                </Typography>
            </Box>
        </Box>
    );
}
