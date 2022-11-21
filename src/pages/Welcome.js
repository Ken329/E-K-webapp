import React from 'react'
import { useHistory } from 'react-router-dom';

import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import Memo from '../components/memo'
import Plus from '../components/plus'
  
function Welcome() {
    let history = useHistory();
    function homePage(e){
        history.push("/");
    }
    return (
      <>
      <Container>
        <Header />
        <div class="py-8 mx-auto grid grid-cols-1 gap-1 mx-2 px-2 overflow-y-auto lg:grid-cols-4 gap-4 md:grid-cols-3 gap-3 sm:grid-cols-2 gap-2">
          <Memo updatedAt="dsads" createdAt="fasdass">This is testing messagedsa das add a d dd asddas sd as </Memo>
          <Memo />
          <Memo />
          <Memo />
          <Memo updatedAt="dsads" createdAt="fasdass">This is testing message dasdaa ddas add ad  d</Memo>
          <Plus />
        </div>
        <Footer />
      </Container>
    </>
    )
  }
  export default Welcome;
