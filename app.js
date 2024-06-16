const express=require('express');
const bodyParser=require('body-parser');
const HttpError=require('./models/http-error');
const mongoose=require('mongoose');
const fs=require('fs');
const path=require('path');

const placesRoutes=require('./routes/places-routes');
const usersRoutes=require('./routes/users-routes');

const app=express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(bodyParser.json());

app.use('/uploads/images',express.static(path.join('uploads','images')));

app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://places-d2w7.onrender.com"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);
  
    next();
  });

app.use('/api/places',placesRoutes);

app.use('/api/users',usersRoutes)

app.use((req,res,next)=>{
    const error=new HttpError('Could not find this route',404);
    throw error;
});

app.use((error,req,res,next)=>{
    if(req.file){
        fs.unlink(req.file.path,(err)=>{
            console.log(err);
        });
    }
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code||500);
    res.json({message:error.message||'An unknown error occurred!'});
});


mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.stx6kcj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
).then(()=>{
    app.listen(process.env.PORT || 5000);
}).catch(err=>{
    console.log(err);
})


