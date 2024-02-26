import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// let Box = styled.div`
//   padding : 20px;
//   background-color : grey;
// `;
// let YellowBtn = styled.button`
//   background : ${props => props.bg};
//   color : ${props => props.bg == 'blue' ? 'white' : 'black'};
//   padding : 10px;
// `;
// styled 컴포넌트 사용시에 변화가 필요한부분? 가변될 부분도 props 를 이용해서 사용할 수 있다. 위처럼 bg 부분을 props 해서 아래 내용에 bg props에 값을 주면 됨
// props를 활용하면 위처럼 color를 조건문을 써 반응형으로 만들수있다. ${props => props.bg == 'blue' ? 'white' : 'black'}; 의 의미: props.bg가 blue 일때 는 white, 아니면 black 이런 방법

// let newBtn = styled.button(YellowBtn)`
//   margin : 10px;
// `;
// styled 컴포넌트를 위처럼 사용중인걸 복제해서 옵션을 추가적으로 넣어서도 사용할 수 있다.

/* 
단점 : js 파일이 매우 복잡해질수 있음,
중복스타일은 css 파일 쓰는거랑 별 차이 없음
협업할때 css 담당의 숙련도가 요구된다.
*/

/* 
Tip
css파일을 모듈화 해서 관리할수있음 파일명을 컴포넌트명.module.css 이렇게하면
해당 하는 컴포넌트에만 css 파일이 적용됨
예를 들어 Detail.module.css 하면 Detail.js 에만 적용되고 나머지 App.js에는 적용 안됨
css 오염방지 가능
*/

function Detail(props){

  let { id } = useParams();
  let 찾은상품 = props.product.find(function(x){
    return x.id == id
  });

  return(
    <div className="container">
      {/* <YellowBtn bg='red'>버튼</YellowBtn> 위 스타일드 props 예시 */}
      {/* <YellowBtn bg='blue'>버튼</YellowBtn> */}
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