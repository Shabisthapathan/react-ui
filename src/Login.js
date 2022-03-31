import { Component } from "react";
import ShouldRender from "./utils/ShouldRender";
import UserService from "./services/UserService";

class Login extends Component{

    state={
        user:{
          email:"",
          password:""
        }
    }


    onTextChange=(evt)=>{
        const newUser={...this.state.user ,[evt.target.name]:evt.target.value};
          this.setState({user:newUser});
    }

    onLogin=async()=>{
      try{
        const res = await UserService.login (this.state.user)
        console.log(res.data);
        UserService.saveUser(res.data)
        window.location.assign('/users/update');
        // this.props.history.push('/users);
    }catch(e){
           console.log(e , "error");
    }
  }

    render(){
        return <div  className=" m-3 col-md-5">
          <ShouldRender cond={this.state.error}>
            <div className="alert alert-danger">Wrong User Name Or Password</div>
          </ShouldRender>
            <h1>Login</h1>
            <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input onChange={this.onTextChange} name="email" id="email" type="email" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">Password</label>
        <input onChange={this.onTextChange}  name="password" id="pwd" type="password" className="form-control"/>
      </div>
      <div className="mb-3">
        <button onClick={this.onLogin} className="btn btn-primary">Login</button>
      </div>
        </div>
    }
}


export default Login;