import React from 'react'
import {Form, Button, FormControl, Container, Image} from 'react-bootstrap'
import '../App.css'

export default () => {
    return(
<div className='gambarbg'>
  <h2 className='title' >Baba Futsal</h2>
<div style={{width: 300, height: 250, backgroundColor:'darkgrey', marginTop: 130,opacity: '0.5', marginLeft: 520, borderRadius:20}}>
<h3 style={{ paddingTop: 20, textAlign: "center", marginBottom:40}}>Login</h3>
<Form inline>
  <Container>
  <FormControl style={{width: 260, marginTop:10, borderRadius: 10}} type="text" placeholder="username" classname="mr-sm-2" />
  <FormControl style={{width: 260, marginTop: 10, borderRadius: 10}} type="text" placeholder="password" classname="mr-sm-2" />
  </Container>
  <Button style={{alignItems: 'center', marginTop: 10, marginLeft: 120,}}>Login</Button>
</Form>
</div>
    </div>
    )
}