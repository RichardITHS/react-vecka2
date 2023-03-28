import React from 'react'
//Importerar styled components
import styled from 'styled-components'

function StyledComponents() {

function testFunction(){
    return alert('Hej')
}
function testFunction2(){
    return alert('Allihopa')
}

    return <div>
        <Wrap>
            <h1 className='text'>StyledComponents</h1>
        </Wrap>
        <ButtonLeft onMouseOver={testFunction} value="Hej">Hej</ButtonLeft>
        <ButtonRight onMouseOver={testFunction2}>Allihopa</ButtonRight>
    </div>

}

export default StyledComponents

//Använder styled components

const Wrap = styled.div`
background-color: black;
width: 50%;
align-items: center;
margin: 0 auto;

.text{
    color: white;
}
`
const ButtonLeft = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
cursor: pointer;
`
const ButtonRight = styled(ButtonLeft)`
color: black;
border: 2px solid black;
`
