import { Component } from "react";
import ShouldRender from "./utils/ShouldRender";
import Error from "./utils/Error";
import UserService from "./services/UserService";



class Register extends Component{
   
    state={
        user:{
            firstName:"",
        lastName:"",
        email:"",
        password:""
        },
        success:false,
        error:false,
        userExists:false

    };

    onRegister=()=>{

         UserService.register(this.state.user)
           .then(res=>{
              this.setState({firstName:"",lastName:"",email:"",password:"",success:true,error:false,userExists:false})
         })

         .catch(err=>{
             if(err.message.indexOf("409")>-1) this.setState({userExists:true , success:false})
             else this.setState({error:true, success:false});
           });
}

onTextChange=(evt)=>{
    const newUser={...this.state.user ,[evt.target.name]:evt.target.value};
      this.setState({user:newUser});
}


isInvalid=()=>{
    return !this.state.user.firstName
    || !this.state.user.lastName
    || !this.state.user.email
    || !this.state.user.password

}

    // onFirstNameChange=(evt)=>{
    //     this.setState({firstName:evt.target.value});
    // }

    
    // onLastNameChange=(evt)=>{
    //     this.setState({lastName:evt.target.value});
    // }

    
    // onEmailChange=(evt)=>{
    //     this.setState({email:evt.target.value});
    // }

    
    // onPasswordChange=(evt)=>{
    //     this.setState({password:evt.target.value});
    // }

    render(){
        return <div  className=" m-3 col-md-5">
            <ShouldRender cond={this.state.success}>
            <div className="mb-3 alert alert-success">
                Successfully Registered.
            </div>
            </ShouldRender>
            <ShouldRender cond={this.state.userExists}>
            <div className="mb-3 alert alert-danger">
                User already exits.
            </div>
            </ShouldRender>
            <ShouldRender cond={this.state.error}>
            <Error/>
            </ShouldRender>
            <div className="mb-3">
                <h3>Register</h3>
                <hr/>
            </div>
            <div className="mb-3">
        <label htmlFor="fName" className="form-label">FirstName</label>
        <input name="firstName" value={this.state.firstName} onChange={this.onTextChange} id="fName" type="text" className="form-control"/>
         <ShouldRender cond={!this.state.user.firstName}>
         <span className="text-danger">Required</span>
             </ShouldRender>
             <ShouldRender cond={this.state.user.firstName &&this.state.user.firstName.length<3}>
         <span className="text-danger">Min 3 Character</span>
             </ShouldRender>  
      </div>
     
     <div className="mb-3">
        <label htmlFor="lName" className="form-label">LastName</label>
        <input name="lastName" value={this.state.lastName} onChange={this.onTextChange}id="lName" type="text" className="form-control"/>
        <ShouldRender cond={!this.state.user.lastName}>
         <span className="text-danger">Required</span>
             </ShouldRender> 
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input name="email" value={this.state.email} onChange={this.onTextChange} id="email" type="email" className="form-control"/>
        <ShouldRender cond={!this.state.user.email}>
         <span className="text-danger">Required</span>
             </ShouldRender> 
             <ShouldRender cond={this.state.user.email && !this.state.user.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)}>
                 <span className="text-danger">Invalid Email</span>
             </ShouldRender>
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">Password</label>
        <input name="password" value={this.state.password}  onChange={this.onTextChange} id="pwd" type="password" className="form-control"/>
        <ShouldRender cond={!this.state.user.password}>
         <span className="text-danger">Required</span>
             </ShouldRender> 
      </div>
    <div className="mb-3">
<button disabled={this.isInvalid()} onClick={this.onRegister} className="btn btn-danger">Register</button>
    </div>
     </div>
  
}
}

export default Register;
 
