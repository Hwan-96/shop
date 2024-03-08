import { useParams } from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import { Nav } from 'react-bootstrap';

import {Context1} from './../App'

function Detail(props){

  let { id } = useParams();
  let 찾은상품 = props.product.find(function(x){
    return x.id == id
  });

  let {재고, product} = useContext(Context1)

  let [alert, setAlert] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{ setAlert(false) },2000)
  },[]);

  /* Tab 스테이트 저장 */
  let [tab, setTab] = useState(0);

  let [fade2, setFade2] = useState('');
  
  useEffect(()=>{
    setTimeout(()=>{setFade2('end')},10)
    return(
      setFade2('')
    )
  }, [])

  return(
    <div className={'container ' + 'start ' + fade2}>
      {
        alert == true
        ? <div className='alert alert-warning'>2초 뒤 사라질 박스</div>
        : null
      }

      {재고}
      
      <div className="row">
        <div className="col-md-6">
        <img src={process.env.PUBLIC_URL + '/' + String(id).padStart(2, '0') + '.jpg'} width={"100%"}/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>

      {/* Tab 만들기 */}
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* {
        tab == 0 ? <div>내용0</div> : null
      }
      {
        tab == 0 ? <div>내용1</div> : null
      }
      {
        tab == 0 ? <div>내용2</div> : null
      } */}
      {/* 삼항 연산자를 써서 탭별 내용을 보여주기엔 코드가 너무 번거러워짐으로 if문을 써보자 하지만 html 안에서 if문을 쓸 수는 없으니까 html 밖에써야함*/}
      <TabContent product={props.product} tab={ tab }/>
    </div>
  )
}

/* 아래처럼 if문을 작성한 것을 html에서 쓰려면? 컴포넌트 화 해도됨 */
// if(tab == 0 ){
//   <div>내용0</div>
// }else if(tab == 1 ){
//   <div>내용1</div>
// }else if(tab == 2 ){
//   <div>내용2</div>
// }

// function TabContent(props){
//   if(props.tab === 0 ){
//     return <div>내용0</div>
//   }
//   if(props.tab === 1 ){
//     return <div>내용1</div>
//   }
//   if(props.tab === 2 ){
//     return <div>내용2</div>
//   }
// }

/* 위처럼 컴포넌트 해도 되지만 더 축약할 수 있음 */

function TabContent({tab, product}){

  let {재고} = useContext(Context1)

  let [fade, setFade] = useState('');
  
  useEffect(()=>{
    setTimeout(()=>{setFade('end')},10)
    return(
      setFade('')
    )
  }, [tab])

  return (
    <div className={'start ' + fade}>
      {[<div>{product[0].title}</div>, <div>{재고}</div>, <div>내용2</div>][tab]}
    </div>
  )
}

export default Detail;