/* eslint-disable */
import { createContext, useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import data from './data';
import Cart from './routes/Cart';

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// import Detail from './routes/Detail';
import Detail from './routes/Detail4';

export let Context1 = createContext()

function App() {

  let [product, setProduct] = useState(data);
  let [clickCount, setClickCount] = useState(1);
  let [isLoading,setLoading] = useState(false);

  // Hook 이란? : 유용한것들을 모아둔 함수
  
  let [재고] = useState([10, 11, 12])
  
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
                      <Card product={product[i]} i={i} key={i}></Card>
                      // 하위컴포넌트로 props 하기위해 첫번째로 할 것, 작명={state명}
                    )
                  })
                }
              </div>
            </div>
            
            {
              isLoading === true
              ? <div className='alert alert-warning loading'>로딩중</div>
              : null
            }

            <button className='btn btn-primary' onClick={()=>{
              setLoading(true);

              let userClick = clickCount + 1;

              setClickCount(userClick);
              // console.log(userClick);
              if(userClick){
                axios.get(`https://codingapple1.github.io/shop/data${userClick}.json`)
                .then((result)=>{
                  setLoading(false);
                  let copy = [...product, ...result.data];
                  setProduct(copy);
                })
                .catch(()=>{
                  setLoading(false);
                  console.log('실패')
                  alert('더 이상 상품이 존재하지 않습니다.')
                })
              }
              // axios.get('https://codingapple1.github.io/shop/data2.json')
              // .then((result)=>{
              //   console.log(result.data);
              //   console.log(product);
              //   let copy = [...product, ...result.data];
              //   setProduct(copy);
              // })
              // .catch(()=>{
              //   console.log('실패했습니다')
              // })
            }}>더보기</button>
            
          </>
          /* <></> 프레그먼트 문법 */
        }/>
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ 재고, product}}>
            <Detail product={product}/>
          </Context1.Provider>
        }/>
        {/* 
          url 파라미터 문법으로 상세페이지 개수 늘리기 1단계.
          <Route path='/detail/:id' element={<Detail product={product}/>}/>
          path 속에 / 다음 콜론,작명 순서 대로 작성(위처럼)
        */}
        {/*
        detail.js 꾸미기 1
        <Route path='/detail' element={<Detail/>}/> 기존 해둔거에 props 전송 필요함
        <Route path='/detail' element={<Detail product={product}/>}/> <- 이렇게 하면됨
        */}
        
        <Route path='*' element={<div>없는 페이지</div>}/> {/* 404 페이지 : 오타포함 이상한 경로로 접속했을때 */}
        
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>}/>
          <Route path='location' element={<div>위치임</div>}/>
        </Route>

        {/* 위 아래 둘다 같은 의미이고, 위를 nested routes 라고한다, 태그 안에 태그, 장점으로는 /about에 들어가도 아래 member의 엘리멘트도 같이 보여짐
        언제 쓸지? 유사 페이지가 필요할때 (반복되는), 여러페이지가 필요할때 사용하면 좋을 듯
        */}
        {/* <Route path='/about/member' element={<About/>}/>
        <Route path='/about/location' element={<About/>}/> */}

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>

        <Route path='/cart' element={ <Cart/> } />

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

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet> {/* 위에서 nested routes 를 쓸 때 하위 라우트를 내보내기 위함 */}
    </div>
  )
}

function HeaderNav(){

  let navigate = useNavigate();

  return(
    <Navbar expand='lg' bg="light" data-bs-theme="light" className='navbar-all'>
      <Container>
        <Navbar.Brand href="#home" id='logo'>DOHA</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            {/* onClick={() => { navigate('1') }} : 1 은 앞으로 가기 -1은 뒤로가기 기능을 한다*/}
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
      <Link to={`/detail/${props.product.id}`}>
        <img src={process.env.PUBLIC_URL + '0' + [props.i] + '.jpg'} className='col-img'/>
      </Link>
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