import styled from "@emotion/styled";
import { Paper, Theme } from "@mui/material";
import flowers from '../../../assets/flowers.avif'
import darkFlowers from '../../../assets/dark-flowers.avif'


export const PaperContainer = styled(Paper)<{theme: Theme}>(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#6c96c0',
    borderRadius: '20px',
    height: '500px',
    minWidth: '360px',
    backgroundImage: theme.palette.mode === 'light' 
        ? `url(${flowers})`
        : `url(${darkFlowers})`
}))