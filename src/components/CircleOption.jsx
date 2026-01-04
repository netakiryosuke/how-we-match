import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export default function CircleOption({ size, color, selected, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    // Create responsive size
    const responsiveSize = {
        xs: size * 0.5,  // 50% on mobile
        sm: size * 0.65, // 65% on small tablets
        md: size * 0.85, // 85% on tablets
        lg: size          // 100% on desktop
    };

    return (
        <Box
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: responsiveSize,
                height: responsiveSize,
                border: `3px solid ${color}`,
                borderRadius: "50%",
                cursor: "pointer",
                transition: "all 0.2s ease",
                ":hover": {
                    backgroundColor: color
                },
                backgroundColor: selected ? color : "transparent",
                flexShrink: 0
            }}
        >
            {selected || isHovered ? (
                <CheckIcon sx={{
                    color: "white",
                    fontSize: { 
                        xs: size * 0.5 * 0.6,
                        sm: size * 0.65 * 0.6,
                        md: size * 0.85 * 0.6,
                        lg: size * 0.6
                    },
                }} />
            ) : null}
        </Box>
    );
}
