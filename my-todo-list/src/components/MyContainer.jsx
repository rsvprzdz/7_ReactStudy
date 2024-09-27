import styled from 'styled-components'

const Container = styled.div`
    width: calc(100% - 25px);
    padding: 25px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center
`

const Title = styled.h1`
    color: blue;
    text-align: center;
    margin: 0;
    font-size: 50px;
`
// 예전에는 props를 매개변수로 전달하고 {props.children}으로 했지만 지금은 key값인 children만 전달해두댐
function MyContainer({children, title}){
    return (
        <>
            <Title>{title}</Title>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default MyContainer;