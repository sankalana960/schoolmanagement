import React, { useState } from 'react'
import roomsimg from  '../../assets/media/hostel.jpg'
import "../login/loginpage.css"


const Loginpage = () =>{

  const [userdetails, setuserdetails] = useState({email:"", password:""});
  const [signupdetails, setSignupdetails] = useState({name:"", email:"", password:""});
  const [isSignUp, setSignUp] = useState(true);

  const updatestate = (e) => {
    const feild = e.target.id
    const value = e.target.value
    if (!isSignUp){
      setSignupdetails(prev=>({
        ...prev,
        [feild]:value
      }))
    }else{
      setuserdetails((prev)=>(
        {...prev,
        [feild]: value}))
      console.log(userdetails)
    }
  }

  return (
    <div className=''>
        <div className='d-flex'>
            <div className='d-mb-none col-lg-7 p-0'><img className='image' src={roomsimg} /></div>
            <div className='col-5'>
              {isSignUp&&
              <form className='form-container'>
                <div className='container'>
                  <h2 className='main-header'>Annapurna Boys Hostel</h2>
                  <h1 className='login'>Login</h1>
                  <p htmlFor ='email' className='feild-name'>Email ID</p>
                  <input id='email' className='input-feild' value={userdetails.email} onChange={updatestate} type='text' required/>
                  <p className='feild-name'>Password</p>
                  <input id='password' className='input-feild' value={userdetails.password} onChange={updatestate} type='password' required/>
                  <input type='button' className='btn btn-primary w-100'  value="Log In"/>
                  <input type='button' className='btn btn-primary w-100 mt-2' onClick={()=>setSignUp(false)} value="Sign in"/>
                </div>
              </form>}
              {!isSignUp&&
              <form className='form-container'>
                <div className='container'>
                  <h2 className='main-header'>Annapurna Boys Hostel</h2>
                  <h1 className='login'>SignIn</h1>
                  <p htmlFor ='name' className='feild-name'>Name</p>
                  <input id='name' className='input-feild' value={signupdetails.name} onChange={updatestate} type='text' required/>
                  <p htmlFor ='email' className='feild-name'>Email ID</p>
                  <input id='email' className='input-feild' value={signupdetails.email} onChange={updatestate} type='text' required/>
                  <p className='feild-name'>Password</p>
                  <input id='password' className='input-feild' value={signupdetails.password} onChange={updatestate} type='password' required/>
                  <input type='button' className='btn btn-primary w-100 mb-2' value="Sign in"/>
                  <input type='button' className='btn btn-primary w-100' onClick={()=>setSignUp(true)} value="Log In"/>
                </div>
              </form>}
            </div>
        </div>
    </div>
  )
}


export default Loginpage