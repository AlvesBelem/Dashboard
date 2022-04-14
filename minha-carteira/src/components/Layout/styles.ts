import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    color: ${props => props.theme.colors.white};

    height: 100vh;

    grid-template-areas:
    'AS MH'
    'AS CT'

    
`;

