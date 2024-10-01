import styled from "styled-components";
import InputBar from "./InputBar";
import { useState } from "react";
import ChatList from "./ChatList";
import { chatGo } from "../../services/myGpt";

const Title = styled.h2`
    border-bottom: 1px solid #222;
    padding: 10px;
    text-shadow: 1px 1px 5px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    max-width: 720px;
    margin: 0 auto;
`
// flex: 1 하면 flex 준 화면 전체 높이를 다처먹음
const Main = styled.main`
    flex: 1;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

const FooterText = styled.span`
    font-size: 12px;
    color: teal;
    text-align: center;
`

const MyChatbot = () => {

    const [message, setMessage] = useState('');     // 내가 보낼 메세지
    const [chatList, setChatList] = useState([]);   // 주고받은 메시지 리스트
    const [loading, isLoading] = useState(false);   //  메시지 전송 유무


    const changeMessage = (a) => {
        // 이벤트 타겟 없이 세팅한거잖아요 타겟이 언디파인드일거에요????
        setMessage(a);
    }

    const sendMessage = async () =>{
        // alert(message);
        const data = {
            data: new Date(),
            message: message
        }

        // 입력된 내용으로 메시지 전송 후 결과 받기
        // const result = "답장 내용@@@";

        try{
            isLoading(true);
            const result = await chatGo({message: message});
    
            data.response = result; // 답변내용을 data변수에 추가
    
            setChatList([
                ...chatList,        // 이전에 저장되어 있던 chatList 상태값 
                data
            ]);

        } catch(e) {
            console.log(e);
        } finally {
            isLoading(false);
        }
    }

    return (
        <Container>
            
            <header>
                <Title>My Chatbot</Title>
            </header>
            <Main>
                <ChatList chatList={chatList} loading={loading} />
            </Main>
            <footer>
                <InputBar message={message} 
                          changeMessage={changeMessage}
                          sendMessage={sendMessage} />  
                <FooterText>
                    나의 챗봇은 실수할 수 있습니다. 너그러이 이해해주세요 ^^.
                </FooterText>
            </footer>
        </Container>
    );
}

export default MyChatbot;