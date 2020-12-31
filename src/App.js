import React from "react";
import 'App.css'
import thumb from './thumb.png';
import styled from 'styled-components';
import Test from 'components/Test';

const Header=styled.h1`
    color:blue;
`;

const App = () => {
 return <div><Header>react webpack boilerplate</Header>
 <Test/>
 <img src={thumb} alt="image"></img>
 </div>
};

export default App;