import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

/* 
컴포넌트의 Lifecycle
컴포넌트가 페이지에 장착(생산)되기도 하고 (mount)
컴포넌트가 업데이트(재렌더링) 되기도 하고(update)
컴포넌트가 필요없으면 제거(삭제)되고 (unmount)
컴포넌트의 인생주기? 왜? 배우나?
알고있으면 중간중간 간섭이 가능하다.
간섭 = 코드실행이 가능하다는 말

간섭하는 방법으론,
"Detail 컴포넌트 등장 전에 어떤 행동을 해줘"
"Detail 컴포넌트 사라지기 전에 어떤 행동을 해줘"
"Detail 컴포넌트 업데이트 되고나서 어떤 행동을 해줘"
이렇게 간섭을 할 수 있고, 간섭은 갈고리를 달아서 한다.
*/

function Detail(props){

  let { id } = useParams();
  let 찾은상품 = props.product.find(function(x){
    return x.id == id
  });

  let [alert, setAlert] = useState(true)
  useEffect(()=>{
    //여기 적은 코드는 컴포넌트 로드, 업데이트마다 실행
    setTimeout(()=>{ setAlert(false) },2000)
  },[]);

  return(
    <div className="container">
      {
        alert == true
        ? <div className='alert alert-warning'>2초 뒤 사라질 박스</div>
        : null
      }
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
    </div>
  )
}

export default Detail;