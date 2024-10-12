import styled from 'styled-components';



const Container = styled.div`
  width: ${(props)=>props.width};
  height: 100vh;
  background-color: #EDE1D2;
  display: flex;
  flex-direction: column;
`

const RightContainer = ({children, style, width}) => {
    return (
        <Container style={style} width={width}>
            {children}
        </Container>
    )
}

export default RightContainer;