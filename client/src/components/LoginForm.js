



const LoginForm = ({
handleSubmit,
email,
setemail,
password,
setpassword

}) => {

    return (
        <form onSubmit = {handleSubmit} className="mt-20">
                
                <div className="form-group mb-3">
                    <label className="form-label">Your email</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder='enter email' 

                    // below we are making use of the hook 
                    value={email} 
                    onChange={(e)=>{setemail(e.target.value)}}></input>
                </div>


                <div className="form-group mb-3">
                    <label className="form-label">Your password</label>
                    <input 
                    type='password' 
                    className='form-control' 
                    placeholder='enter password' 
                    value={password} 
                    onChange={(e)=>{setpassword(e.target.value)}}></input>
                </div>    

{/* below button is bootstrap */}

                <button disabled={!email || !password} className="btn btn-primary mt-1.5">Submit</button>

            </form>

    )

}

export default LoginForm;