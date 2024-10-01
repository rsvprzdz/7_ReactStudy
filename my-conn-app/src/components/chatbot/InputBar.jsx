import styled from "styled-components"


const Container = styled.div`
    width: 95%;
    border: 1px dotted pink;
    padding: 15px;
    border-radius: 10px;
    height: 50px;
    margin: 0 auto;
    position: relative;
`

const MyInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
`

const InputBar = ({message, changeMessage, sendMessage}) => {


    const showMessage = (e) =>{
        if(e.keyCode==13){
            sendMessage(e.target.value);
            changeMessage("");
        }
    }

    return (

        <Container>
            <MyInput type="text" placeholder="챗봇과 대화하기" 
                     value={message} 
                     onChange={(e) => changeMessage(e.target.value)}
                     onKeyDown={(e) => {showMessage(e)}}/>
        </Container>
    )

}

export default InputBar