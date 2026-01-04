import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

// Responsive size multipliers for different breakpoints
const SIZE_MULTIPLIERS = {
    xs: 0.5,  // 50% on mobile
    sm: 0.65, // 65% on small tablets
    md: 0.85, // 85% on tablets
    lg: 1.0   // 100% on desktop
};

const CHECK_ICON_SIZE_RATIO = 0.6;

export default function CircleOption({ size, color, selected, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    // Create responsive size
    const responsiveSize = {
        xs: size * SIZE_MULTIPLIERS.xs,
        sm: size * SIZE_MULTIPLIERS.sm,
        md: size * SIZE_MULTIPLIERS.md,
        lg: size * SIZE_MULTIPLIERS.lg
    };

    // Create responsive icon size based on circle size
    const responsiveIconSize = {
        xs: responsiveSize.xs * CHECK_ICON_SIZE_RATIO,
        sm: responsiveSize.sm * CHECK_ICON_SIZE_RATIO,
        md: responsiveSize.md * CHECK_ICON_SIZE_RATIO,
        lg: responsiveSize.lg * CHECK_ICON_SIZE_RATIO
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
                    fontSize: responsiveIconSize,
                }} />
            ) : null}
        </Box>
    );
}
