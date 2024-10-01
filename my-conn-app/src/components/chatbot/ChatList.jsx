import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;

`

const MessageDiv = styled.div`
    float: right;
    text-align: right;
    border: 1px dotted pink;
`

const ResponseDiv = styled.div`
    float: left;
    text-align: left;
    border: 1px dotted skyblue;
`

const commonStyle = {
    borderRadius: '10px',
    padding: '15px',
    margin: '2px'
}

const ChatList = ({chatList, loading}) => {

    return(
        <Container>
            {
                chatList.map((chat, index)=>{
                    return( //중괄호 있을때는 리턴해줘야함, clear="both": 플롯일때 겹치지않게 구분선 기준으로 요소들이 확실히 나눠지도록 해줌
                        <div key={index}>
                            <MessageDiv style={commonStyle}>
                                {chat.message}
                            </MessageDiv>
                            <br clear="both"></br>  
                            <ResponseDiv style={commonStyle}>
                                {chat.response}
                            </ResponseDiv>
                        </div>
                    )
                })
            }
            {
                loading &&
                <div>
                    챗봇이 답장을 고민하고 있습니다..
                </div>
            }
        </Container>
    )
}

export default ChatList