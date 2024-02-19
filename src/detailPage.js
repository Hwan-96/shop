import { useState } from 'react';
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



export default DetailPage;