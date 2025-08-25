import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import flowers from '../../assets/flowers.avif'


export const PaperContainer = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#6c96c0',
    borderRadius: '20px',
    height: '500px',
    minWidth: '360px',
    backgroundImage: `url(${flowers})`
})