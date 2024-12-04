import styled from 'styled-components';
import { IoMenuSharp } from "react-icons/io5";


export const Container = styled.div`
max-width: 1200px;
margin:auto;
`;

export const Li = styled.li`
border:1px solid black;
padding:7px;
list-style: none;
margin: 5px;
border-radius: 7px;
transition:0.7s;
cursor: pointer;
&:hover{
  background-color: pink;
  color:white;
}
`;

export const Menu = styled.div`
 position: fixed;
  top: 0; right: 0;
   z-index: 9999999;
   font-size: 2.4rem;
   border-radius: 7px;
   background-color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 5px;
   cursor: pointer;
`;