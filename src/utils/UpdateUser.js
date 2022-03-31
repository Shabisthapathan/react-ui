import { Component } from "react";
import UserService from "../services/UserService";
import Chips from "./Chips";
import ShouldRender from "./ShouldRender";
import Error from "./Error"

class UpdateUser extends Component{

    constructor(){
        super();
        console.log('constructor...')
    };

    componentDidMount=()=>{
        console.log('componentDidMount...')
        const user=UserService.getUserFormStorage();
        UserService.getUser(user.email)
        .then (res=>{
            this.setState({user:res.data})
        })
        .catch(e=>{
            console.log(e)
            this.setState({error:true})
        });
    }

    state={
       user:{
           email:'',
           firstName:'',
           lastName:'',
           qualification:'',
           degree:'',
           gender:'',
           passout:'',
           skills:[]
       }
    };
    onValueChange=(e)=>{
          const user={...this.state.user, [e.target.name] : e.target.value};
          this.setState( { user } );
    }
    onUpdate=async()=>{
        try{
            await UserService.update(this.state.user);
            this.setState({error:false, success:true});
            
         setTimeout(() => {
             this.setState({success:false})
         }, 3000);


            
        }catch(e){
             console.log(e);
             this.setState({error:true});
        }
    }
    

    onSkillsChange=(skills)=>{
        const user={...this.state.user, skills};
        this.setState( { user } );
    }
    render(){
        const {firstName,lastName, qualification,degree,gender,passout,skills}=this.state.user;
        return <div className="col-md-4 m-3">
            <ShouldRender cond={this.state.error}>
                <Error/>
            </ShouldRender>
            <ShouldRender cond={this.state.success}>
                <div className="alert alert-success">Successfully Updated</div>
            </ShouldRender>
            <div className="mb-3">
                <h3>Update User</h3>
                <hr/>
            </div>
            <div className="mb-3">
        <label htmlFor="fName" className="form-label">FirstName</label>
        <input value={firstName} onChange={this.onValueChange}  name="firstName" id="fName" type="text" className="form-control"/>
</div>
<div className="mb-3">
        <label htmlFor="lName" className="form-label">lastName</label>
        <input value={lastName} onChange={this.onValueChange} name="lastName" id="lName" type="text" className="form-control"/>
</div>
<div className="mb-3">
        <label onClick={this.onValueChange} htmlFor="qualification" className="form-label">Qualification</label>
       <select value={qualification} onChange={this.onValueChange} name='qualification' className="form-control">
       <option value=''>--Select--</option>
           <option value='0'>10+2</option>
           <option value='1'>UG</option>
           <option value='2'>PG</option>

       </select>
</div>
<div className="mb-3">
        <label htmlFor="degree" className="form-label">Degree</label>
        <select value={degree} onChange={this.onValueChange} name='degree' className="form-control">
        <option value=''>--Select--</option>
           <option value='0'>BE/B.Tech</option>
           <option value='1'>Bcom</option>
           <option value='2'>BCA</option>
           <option value='3'>Others</option>

       </select>
</div>
<div className="mb-3">
        <label onClick={this.onValueChange} htmlFor="gender" className="form-label">Gender</label>
       <select value={gender} onChange={this.onValueChange} name='gender' className="form-control">
       <option value=''>--Select--</option>
           <option value='0'>Female</option>
           <option value='1'>Male</option>
      </select>
</div>
<div className="mb-3">
        <label onClick={this.onValueChange} htmlFor="passout" className="form-label">Passout</label>
       <select value={passout} onChange={this.onValueChange} name='passout' className="form-control">
       <option value=''>--Select--</option>
           <option value='0'>2022</option>
           <option value='1'>2021</option>
           <option value='1'>2020</option>
           <option value='2'>2019</option>
           <option value='2'>other</option>

       </select>
</div>
<div className="mb-3">
<label  className="form-label">Skill</label>
    <Chips skills={skills} onSkillsChange={this.onSkillsChange}/>
</div>
      <div className="mb-3">
          <button onClick={this.onUpdate} className="btn btn-danger btn-sm">Update</button>
      </div>
        </div>;

    }

    componentWillUnmount(){
        console.log('unmounted');
    }
}

export default UpdateUser;