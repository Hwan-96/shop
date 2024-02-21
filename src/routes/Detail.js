/* import { useState } from 'react';
import React from 'react';
import data from './data';

const DetailPage2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="Shoes" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

function Card(props){
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
            <img src={process.env.PUBLIC_URL + '01' + '.jpg'} width={"100%"}/>
          <div className="col-md-6 col-content">
            <h4 className='pt-5'> {props.product['title']} </h4>
            <p>{props.product['content']}</p>
            <p>{props.product['price']}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function DetailPage(){

  let [product, setProduct] = useState(data);

  return(
    <>
      <Card product={product[0]}></Card>
    </>
  )
}

export default DetailPage; */

import { useParams } from 'react-router-dom';

function Detail(props){ /* detail.js 꾸미기 2. 엘리멘트에 props 추가 */

  let {id} = useParams();
  console.log(id);
  /* url 파라미터 문법으로 상세페이지 개수 늘리기 3단계.
  useParams 를 컴포넌트 최상위에 import 하고 컴포넌트 내에서 실행
  useParams의 변수명은 app.js에서 넣어둔 url 파라미터명과 동일하게 지으면 좋을듯
  */

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <img src={process.env.PUBLIC_URL + '/' + String(id).padStart(2, '0') + '.jpg'} width={"100%"}/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.product[id].title}</h4> {/* detail.js 꾸미기 3. 필요한 부분 데이터바인딩 */}
          {/* 
          url 파라미터 문법으로 상세페이지 개수 늘리기 2단계.
          <h4 className="pt-5">{props.product[0].title}</h4> 여기서 product[] 안에 app.js 에서 만들어둔 url파라미터를 넣음
          {props.product[현재 url에 입력한 숫자].title}
          */}
          <p>{props.product[id].content}</p>
          <p>{props.product[id].price} 원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default Detail;