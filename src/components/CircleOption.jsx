import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function CircleOption({ size, color, selected, onClick }) {
    

    return (
        <Box
            onClick={onClick}
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
            {selected ? (
                <CheckIcon sx={{
                    color: "white",
                    fontSize: size * 0.6,
                }} />
            ) : null}
        </Box>
    );
}
