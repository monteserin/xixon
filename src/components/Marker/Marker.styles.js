import styled from 'styled-components';

export const Day = styled.div`
 background-color: ${({ today }) => today ? '#f77754' : 'white'};
 padding: 5px;
 border-radius: 5px;
`;
