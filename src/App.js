/* eslint-disable */
import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import data from './data';

import { Routes, Route, Link } from "react-router-dom";
import DetailPage from './detailPage';

function App() {

  let [product, setProduct] = useState(data);

  return (
    <div className='App'>
      {/* <Routes> 라우트 기본 구성 요소
        <Route path='/' element={<div>메인페이지</div>}/> path='/' path 요소에 /슬래시 하나만 들어가면 메인임
        Route > 페이지, path = url 경로, element = html 내용
        <Route path='/detail' element={<div>상세페이지</div>}/>
        <Route path='/about' element={<div>어바웃페이지</div>}/>
      </Routes> */}

      

      <HeaderNav></HeaderNav>
      <Routes>
        <Route path='/' element={
          <>
          <Representative></Representative>
            <div className='container'>
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
          </>
          /* <></> 프레그먼트 문법 */
        }/>
        <Route path='/detail' element={
          <DetailPage></DetailPage>
        }/>
      </Routes>


      {/* <div className='container'> --> 메인페이지 라우터 안으로 이동
        <div className='row'>
          {
            product.map(function(n, i){
              return(
                <Card product={product[i]} i={i} key={i}></Card> // 하위컴포넌트로 props 하기위해 첫번째로 할 것, 작명={state명}
              )
            })
            
          }
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
            <Link to={"/"}>Home</Link>
            <Link to={"/detail"}>Detail</Link>
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

//라우팅 기본, 세팅
/* 
라우팅 : 페이지 구분 하는 것
리액트 : 싱글 페이지 어플리케이션 / 기본적으로 index.html만 사용함
라우팅을 도와주는 라이브러리 : react-router-dom

react-router-dom 설치방법
1. 터미널 open
2. npm start (미리보기) 인 상태면 종료해둘것
3. npm install react-router-dom@6 입력
4. 에러없이 설치후 npm start
5. index.js 파일로 이동하기
6. App 컴포넌트를 <BrowserRouter><BrowserRouter/>로 감싼다
    <BrowserRouter>
      <App />
    </BrowserRouter>
7. <BrowserRouter> 컴포넌트 쓸때는 index.js 상단에 import 할것
  import { BrowserRouter } from "react-router-dom";



외부 라이브러리 사용법

1. import { Routes, Route, Link } from "react-router-dom"; App.js 상단에 import 할것

*/