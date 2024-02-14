/* eslint-disable */
import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import data from './data';

function App() {

  let [product, setProduct] = useState(data);

  return (
    <div className='App'>
      <HeaderNav></HeaderNav>
      <Representative></Representative>

      <div className='row'>
        {
          product.map(function(n, i){
            return(
              <Card product={product[i]} i={i} key={i}></Card> // 하위컴포넌트로 props 하기위해 첫번째로 할 것, 작명={state명}
            )
          })
          
        }
      </div>
    </div>
  );
}

function HeaderNav(){
  return(
    <Navbar expand='lg' bg="light" data-bs-theme="light" className='navbar-all'>
      <Container>
        <Navbar.Brand href="#home" id='logo'>DOHA</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

function Representative(){
  return(
    <div className='main-bg' style={{backgroundImage : 'url(/bg.jpg)'}}></div>
  )
}

function Card(props){ // props  두번째 스텝
  return (
    <div className="col-md-4 col-content">
      <img src={process.env.PUBLIC_URL + '0' + [props.i + 1] + '.jpg'} className='col-img'/>
      <h3> {props.product['title']} </h3>
      <p> {props.product['content']} & {props.product['price']}</p>
    </div>
  )
}


export default App;
