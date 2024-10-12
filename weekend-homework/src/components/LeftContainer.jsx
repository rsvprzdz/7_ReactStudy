import styled from 'styled-components';

const Container = styled.div`
  width: ${(props)=>props.width};
  height: 100vh;
  background-color: #6A6F4C;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;    
`


const LeftContainer = ({children, width}) => {

    return (
        <Container width={width}>
            {children}
        </Container>
    )
}

export default LeftContainer;