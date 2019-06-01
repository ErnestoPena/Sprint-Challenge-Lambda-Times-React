import React from 'react';
import styled from 'styled-components';

const Mytopbar = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`

const Mycontainer = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`

const Containerleft = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`
const Myspans = styled.span`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`
const Containercenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`

const Containerright = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`


const TopBar = () => {
  return (
    <Mytopbar>
      <Mycontainer>
        <Containerleft>
          <Myspans>TOPICS</Myspans><Myspans>SEARCH</Myspans>
        </Containerleft>
        <Containercenter>
          <Myspans>GENERAL</Myspans><Myspans>BROWNBAG</Myspans><Myspans>RANDOM</Myspans><Myspans>MUSIC</Myspans><Myspans>ANNOUNCEMENTS</Myspans>
        </Containercenter>
        <Containerright>
          <Myspans>LOG IN</Myspans>
        </Containerright>
      </Mycontainer>
    </Mytopbar>
  )
}

export default TopBar;