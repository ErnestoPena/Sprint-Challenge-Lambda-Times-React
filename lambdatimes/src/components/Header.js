import React from 'react';
import styled from 'styled-components';

const Myheaderdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`

const Mydate = styled.span`
  margin-left: 25px;
  flex: 1;
`

const Mytemp = styled.span`
text-align: right;
margin-right: 25px;
flex: 1;
`

const Header = () => {
  return (
    <Myheaderdiv>
      <Mydate>SMARCH 32, 2018</Mydate>
      <h1>Lambda Times</h1>
      <Mytemp>98°</Mytemp>
    </Myheaderdiv>
  )
}

export default Header