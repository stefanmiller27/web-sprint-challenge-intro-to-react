// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character(props) {
    
    const Container = styled.div` 
        width: 75%;
        display: flex;
        justify-content: space-between;
        margin: .5% 5% 1% 1%;
        padding: 10px;
        background-color: rgba(247, 179, 39, 0.57);
        color: #162cf5;
        
    
        span{
            display: inline-block;
            vertical-align: middle;
            padding: 10px;
        }
    `;

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid #162cf5;
color: #162cf5;
margin: 0.5em 1em;
padding: 0.25em 1em;
`;

return (
<Container>
    <span>
        {props.info.name}
    </span>
    <Button onClick={() => props.openDetails(props.info.id)}>
        See Details
    </Button>
</Container>
);

}