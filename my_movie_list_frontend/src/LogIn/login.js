import React, { Component } from 'react';
import './login.css';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact';


class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      qResult: [],
      email:'',
      password:'',
      name: '',
      auth: false,
      user:{
        email:'',
        password:''
      }
    }
  }

  render(){
    const {user} = this.state;
    if(this.state.auth){
      //route to dashboard
      console.log('Successfully logged in')
    }
    return (
      <div className = "bg">
        <MDBRow>
          <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5"><strong> 
                    <img src = "https://img.icons8.com/bubbles/2x/tv.png" alt = " " width="10%" height="50%"></img>
                     My Movie List</strong>
                  </h3>
                </div>
                <MDBInput label="Email" group type="email" validate error="wrong" success="right" onChange={i=> this.setState({user:{...user,email: i.target.value}})} />
                <MDBInput label="Password" group type="password" validate containerClass="mb-0" onChange={i=> this.setState({user:{...user,password: i.target.value}})}/>
                <div className="text-center pt-3 mb-3">
                  <MDBBtn type = "submit" type="button" gradient="blue" rounded className="btn-block z-depth-1a" onClick={this.login}>Log in</MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="grey-text d-flex justify-content-end" style={{ fontSize:'0.8rem'}}>Not a member? <a href="#!" className="blue-text ml-1"> Sign Up</a></p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }

  login = async _=>{
    const {user, qResult} = this.state;
    await fetch(`http://localhost:4040/login?email=${user.email}`)
     .then(res=> res.json().then(res => this.setState({
       qResult: res.data
      }, ()=> this.state.qResult.map((db)=>(
        this.setState({
          email: db.email,
          password: db.password,
          name: db.username
        })
      ))
      )))
      if(this.state.password === this.state.user.password)
      {
        this.setState({auth: true});
      }
  }
}



export default Login;
