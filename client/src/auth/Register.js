import {useState} from 'react'
import RegisterForm from '../components/RegisterForm.js'
import axios from 'axios'
 import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {register} from '../actions/auth'


const Register = ({history})=>{



    // we want to create a state 

    const [name, setname]=useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const handleSubmit = async (e) =>{
    // we do notwant our page to reload
    e.preventDefault()
    

    try{
        const res=await register({name,email,password})
    // below it shows what our data is 
    console.table({name,email,password})
    console.log('REGISTER USER', res);

    // we deconstruct the history and then we push 
    history.push('/login')
    toast.success("Register success please log in", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }catch(err){
        console.log(err);
    if (err.response.status === 400) 
        toast.error(err.response.data, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })

    }




    
    
}


// console.log(process.env.REACT_APP_API);




    return (

        <>
          
        <div className="container-fluid bg-primary p-3 text-center">
            <h1>
                Registation details 
            </h1>
        </div>










        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-3">
<RegisterForm 
handleSubmit={handleSubmit}
name={name}
setname={setname}
email={email}
setemail={setemail}
password={password}
setpassword={setpassword}
/>



                </div>
            </div>
        </div>
        </>
    )
}

export default Register;

