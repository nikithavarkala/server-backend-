const jwt=require("jsonwebtoken");
const secretkey="authorization_API";

const jsontoken=(items,statuscode,res)=>{
    const user=items.email;
    const token =jwt.sign({user:items.email},secretkey);

    // const options={
    //     expires:new Date(
    //         Date.now()+5*24*60*60
    //     )
    // }

    res.status(statuscode).send({
        msg:"user logged in",
        token:token
    })
}

module.exports=jsontoken