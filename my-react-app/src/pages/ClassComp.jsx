import { Component } from "react";
import { Title } from '../components/Title';
import CommentList from '../components/ClassComponent/CommentList'
 class MyComponent extends Component {
  render() {
    return (
      <>
        <Title value = "My Component" />
      </>
    )
  }
 }

export const ClassComp = () => {
  return(
    <>
      <Title value="Functional Component"/>
      <MyComponent />

      <CommentList />
    </>
  )
}



