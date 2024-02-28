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
    // 위에 있는 [] 는 디팬덴시?라고 하는데 변수나 스테이트를 넣을수 있음.
    //[] 없을때는 mount, update 될때, [state명] 일때는 state가 변할때만 실행, [] 빈채로 두면 mount 될때 1회만 실행

    /* 
    useEffect(()=>{
      setTimeout(()=>{ setAlert(false) },2000)

      return () => {
        코드 ~~~ 
      }
    },[]);

    이거 처럼 useEffect 안에 리턴을 줄 수 있다, 이때 리턴은 useEffect 동작 전에 실행 됨
    위같은 걸 clean up function 이라고함, useEffect 전에 깨끗하게 정리한다는 의미
    예를 들면 타이머를 하나 만들어서 useEffect 안에 있으면 렌더링이 계속 되서 타이머갯수가 100개 천개 생길 수 있는데,
    그런거를 예방 하기 위해서임.
    return() => {
      기존타이머는 제거해주세요~
    }
    useEffect(()=>{ 
      let a = setTimeout(()=>{ setAlert(false) }, 2000)
      return ()=>{
        clearTimeout(a)
      }
    }, []) 이렇게 하면 됨

    참고로 clean up function은 mount시 실행 안됨, unmount 시에만 실행 됨
    */

    // 삼항연산자 왜우자 ? 는 ~ 일때는 이라는뜻, : 는 ~ 이 아닐때는 이라는 뜻

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