let express=require('express');
let app=express()
let port=8000;
let obj=require('./config/db_config')
app.get('/',(req,res)=>{
    res.json(obj);
})
app.listen(port,()=>{
    console.log('server listening port no ',port);
})





