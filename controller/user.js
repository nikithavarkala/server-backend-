const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const jsontoken = require('../middleware/auth2');
// const secretkey=Process.env.SECRETKEY;
const secretkey="authorization_API";

let storedata=[]
const register = (req,res)=>{
    const data=req.body;

    const user=storedata.find((items)=>{
        if(items.email===data.email){
            return items;
        }
    })

    if(user){
        res.send({msg:"user already exists"})
    }
    else{
        const salt=bcrypt.genSaltSync(10)
        const hashpw=bcrypt.hashSync(data.password,salt);
        console.log({hashpw});

        const tempobj={
            name:data.name,
            email:data.email,
            // pw:data.pw
            pw:hashpw
        }
        storedata.push(tempobj);
        // res.send(storedata);

        // const token=jwt.sign({user:"items.email"},secretkey);
        // res.send({
        //     msg:"user registered with token",
        //     token:token
        // })
        jsontoken(data,200,res);
    }
}

const login=(req,res)=>{
    const data=req.body;
    // console.log(req.body);
    storedata.find((items)=>{
        if(items.email===data.email){
            const valid=bcrypt.compareSync(data.password,items.pw)
            if(valid){
                // const token=jwt.sign({user:"items.email"},secretkey,{expireIn:3600});
                // res.send({
                //     msg:"user logged in",
                //     token:token
                // });
                jsontoken(items,200,res);
            }
            else{
                res.send("user pw is wrong");
                return;
            }
        }
    })
    res.send({
        // msg:"user pw/email is wrong "
        msg:"user is not registered"
    });
}

const aboutus=(req,res)=>{
    res.send({
        msg:"Abouts us"
    })
    console.log("About Api")
}

const contactus=(req,res)=>{
    res.send({
        msg:"contact us"
    })
    console.log("contactus Api")
}

module.exports ={register,login,aboutus,contactus}