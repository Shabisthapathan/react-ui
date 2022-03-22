const User= ({ user })=>{
 return  <>
             <h5>{user.login}</h5>
                <img style={{borderRadius:'50px'}} 
                  src ={user.avatar_url }width="100" height="100"/>
                   <hr/>
         </>
}


export default User;