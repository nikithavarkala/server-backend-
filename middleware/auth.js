const AllRoutes=(req,res,next)=>{
    console.log("Middleware applicable to all routes");
    next()
}

const specificRoutes=(req,res,next)=>{
    console.log("Middleware applicable to specific routes");
    next()
}

module.exports={AllRoutes,specificRoutes}