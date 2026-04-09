const http=require('http')

//user-define module

const calci=require('./user_module')
const pow=require('./user_module2')

const app=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
  res.write("<h1>Welcome to the NODE JS Server</h1> <br>")
  //res.write(`<input type='text' placeholder='Enter your Name '`)

  //used custom module here

 res.write("<h3>Sum is: " + calci(1,2) + "</h3>"+ "<br>")
res.write("<h3>Power is: " + pow(60*60) + "</h3>")
    res.end("")

})
const PORT=2000;
const HOST='127.0.0.1';

app.listen(PORT,HOST,()=>{
console.log(`server is running on http://${HOST}:${PORT}:`);
 
})