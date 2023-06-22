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
        const tempobj={
            name:data.name,
            email:data.email,
            pw:data.pw
        }
        storedata.push(tempobj);
        res.send(storedata);
    }
    console.log("register Api");
}

const login=(req,res)=>{
    const data=req.body;
    // console.log(req.body);

    const user=storedata.find((items)=>{
        if(items.pw===data.pw && items.email===data.email){
            return items;
        }
    })
    
    if(user){
        res.send({msg:"Login successful"})
    }
    else{
        res.send({msg:"please!! provide correct credentials"})
    }
    console.log("login api");
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