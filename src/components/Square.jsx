import React from 'react'
import styled from 'styled-components'


const Gridbutton = styled.button`
  padding: 50px;
  margin: 15px;
  background: red;
  border-radius: 25rem;
  font-size: 25px;
`;

function Square(props) {
  return (

    <Gridbutton
      onClick={props.testing}>
        {props.value}
    </Gridbutton>
  );
}

export default Square;
