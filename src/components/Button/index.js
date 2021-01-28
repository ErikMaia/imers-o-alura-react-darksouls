import styled from 'styled-components';


const Button = styled.button`
    width: 283px;
    height: 38px;
    margin-top: 20px;
    border: none;
    padding: 5px;
    background-color:${({theme})=>theme.colors['secondary-dark']};
    opacity:100%;
    color:white;
    & :disabled{
        background-color:${({theme})=>theme.colors.primary};
    }
`;
export default Button 
