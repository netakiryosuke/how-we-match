import { Box } from '@mui/material';

export default function CircleOption({ size, color, selected, onClick }) {

    return (
        <Box
            onClick={onClick}
            sx={{
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
        />
    );
}
