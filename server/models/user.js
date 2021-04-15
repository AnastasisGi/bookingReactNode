import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const {Schema}=mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:'Name is required'
    },

    email:{
        type:String,
        trim:true,
        required:'Email is required',
        unique:true
    },

    password:{
        type:String,
        required:true,
        min:6,
        max:64
    },
    stripe_account_id:'',
    stripe_seller:{},
    stripeSession:{}

},{timestamps:true})

// we will need to do the needfull in order the password to be hashed and not to store a plain password 
// the hashing should be done only into 2 cases when the user is created and when the user
// updates the password 


userSchema.pre('save',function(next) {
    let user = this;
    // we are going to hash the password if the user saves or registers 
    if(user.isModified('password')){
        // in the below function we are getting the result if there was an error and the hash
        return bcrypt.hash(user.password,12,function(err,hash) {
            if(err){
                console.log("BCRYPT HAS ERROR", err);
                return next(err);
            }
            user.password=hash;
            return next();

        })  
    } else {
        return next();
    }



})







export default mongoose.model('User',userSchema);