import {toast} from 'react-toastify'
import {useState} from 'react'

import {login} from '../actions/auth'
import LoginForm from '../components/LoginForm'






const Login  = ()=>{


const [email, setemail] = useState('');
const [password, setpassword] = useState('');


const handleSubmit = async(e)=>{
    e.preventDefault();



}

    return (
        <>
           <div className="container-fluid bg-primary  p-3 text-center">
               <h1>Login</h1>
           </div>


            <div className="container">
                        <div className="row">
                            <div className="col-md-3 offset-md-3">
                                <LoginForm
                                    handleSubmit={handleSubmit}
                                    email={email}
                                    setemail={setemail}
                                    password={password}
                                    setpassword={setpassword}/>
                            </div>
                        </div>
                    </div>








        </>
    )
}

export default Login;

