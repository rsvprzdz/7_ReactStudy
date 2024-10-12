import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const MainTitle = styled.h1`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
`

export const StartButton = styled.button`
  background-color: #5D2510;
  color: #EDE1D2;

  width: 300px;
  height: 95px;

  text-align: right;
  padding-right: 50px;
  font-size: 40px;
  border-radius: 50px;

  cursor: pointer;

  &:hover {
    background-color: #412f26;
  }
`