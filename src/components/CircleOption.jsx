import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export default function CircleOption({ size, color, selected, onClick }) {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <Box
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: size,
                height: size,
                border: `3px solid ${color}`,
                borderRadius: "50%",
                cursor: "pointer",
                transition: "all 0.2s ease",
                ":hover": {
                    backgroundColor: color
                },
                backgroundColor: selected ? color : "transparent"
            }}
        >
            {selected || isHovered ? (
                <CheckIcon sx={{
                    color: "white",
                    fontSize: size * 0.6,
                }} />
            ) : null}
        </Box>
    );
}
