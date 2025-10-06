import { Box } from '@mui/material'
import './CircleOption.css'

export default function CircleOption({size, color, selected, onClick}) {
    
    return (
        <Box
            className={`circle-option `}
            onClick={onClick}
            sx={{
                width: size,
                height: size,
                border: `3px solid ${color}`,
                ":hover": {
                    backgroundColor: color
                },
                backgroundColor: selected ? color : "transparent"
            }}
        />
    );
}
