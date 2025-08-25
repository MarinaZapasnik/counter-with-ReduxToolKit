import styled from "@emotion/styled";
import { Paper } from "@mui/material";


export const PaperContentContainer = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
    gap: '30px',
    padding: '30px',
    backgroundColor: '#f8c9bf',
    borderRadius: '20px'
})