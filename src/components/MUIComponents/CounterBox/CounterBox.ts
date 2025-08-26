import { Box, styled, Theme } from "@mui/material";

export const CounterBox = styled(Box)<{theme: Theme}>(({theme}) => ({
    display: 'flex',
    flexDirection: 'row' ,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 30,
    p: 30,
    minWidth: '100vw',
    minHeight: '100vh',
    margin: '0 auto',
    background: theme.palette.mode === 'light' 
    ? '#fffefe'
    : '#1e2035'
}))

