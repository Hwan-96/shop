/* eslint-disable */
import { useState } from 'react';
import './App.css';
// import {Button, Navbar, Container, Nav} from 'react-bootstrap'
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
              <Card product={product[i]} i={i} key={i}></Card>
            )
          })
          
        }
      </div>

      {/* <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src= {process.env.PUBLIC_URL + '/01.jpg'} width='80%'></img>
            <h4>{product[0].title}</h4>
            <p>{product[0].price}</p>
          </div>
          <div className='col-md-4'>
            <img src= {process.env.PUBLIC_URL + '/03.jpg'} width='80%'></img>
            <h4>{product[1].title}</h4>
            <p>{product[1].price}</p>
          </div>
          <div className='col-md-4'>
            <img src= {process.env.PUBLIC_URL + '/04.jpg'} width='80%'></img>
            <h4>{product[2].title}</h4>
            <p>{product[2].price}</p>
          </div>

          <Card></Card>
        </div>
      </div> */}

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

function Card(props){
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + '0' + [props.i + 1] + '.jpg'} width="100%" className='col-img'/>
      <h3> {props.product['title']} </h3>
      <p> {props.product['content']} & {props.product['price']}</p>
    </div>
  )
}

export default App;
