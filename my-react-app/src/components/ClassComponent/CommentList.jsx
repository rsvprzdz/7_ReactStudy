import { Component } from "react";
import Comment from "./Comment";

const comments = [
  { id: 1, value: '안녕하세요?'},
  { id: 2, value: '반갑습니다. 곧 점심시간이네요'},
  { id: 3, value: '맛있게 드세요.'}
];

let timer;

class CommentList extends Component{
  constructor(props){
    super(props);

    this.state = {
      list: []
    }
  }

  // 현재 컴포넌트가 마운트 되었을 때
  // list에 2초마다 comments 변수에 있는 데이터를 추가
  // list의 길이가 comments 길이보다 작을경우에 실행해야겟죠
  componentDidMount(){
    const { list } = this.state;  // 비구조 할당

    timer = setInterval(()=>{
      if (list.length < comments.length){
        const idx = list.length;

        list.push(comments[idx]);

        this.setState({...list});

      } else {
        this.setState({
          list: []
        });

        clearInterval(timer);   // 인터벌 제거
      }
    }, 2*1000);

  }


  render(){
    return(
      <>
        {
          this.state.list.map((item, index)=>{
            return(
              <Comment key={item.id}
                       value={item.value} />
            )
          })
        }
      </>
    )
  }
}

export default CommentList;