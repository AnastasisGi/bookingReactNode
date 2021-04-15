
import User from '../models/user.js'
// export const showMessage = (req, res)=>{
// res.status(200).send(`Here is your message   :  ${req.params.message}`)

// } 

export const register = async(req,res)=>{

// the information that we will be receiving in the backend will be as req.body
// when we get the data and we want to save it in our database we will need to get the 
// schema of the user ... 
// the user will have certain properties 

const {name,email,password} = req.body;

// we will do validation 
if(!name) 
    return res
    .status(400)
    .send("Name is requireed")


if(!password || password.length < 6) 
    return res
    .status(400)
    .send("Password is requireed and should be minimum 6 characters long")
    
let userExist = await User.findOne({email}).exec();
if(userExist)
return res
.status(400)
.send("Email is taken")

const user = new User(req.body)
try{

    await user.save();
    console.log("USER CREATED", user);  
    return res.json({ok: true})

} catch(err){
    console.log("CREATE USER FAILED", err);
    return res 
    .res(400)
    .send("Error try again")
}



    console.table(req.body);
}