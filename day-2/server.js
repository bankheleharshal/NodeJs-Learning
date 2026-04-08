//http is a built in module in node js whhich is helps to create our own http server
const http=require('http')

const app=http.createServer((req,res)=>{


// below line will display on browser and compulsory you should pass string here
    res.write("Hello Welcome to the NODEJS Server")

    // response must be end ow it will go in infinite loop

    res.end()

})

// need port no to configure our server i.e to handle incoming request from server

const PORT=3000;
const HOST='127.1.1.0'

app.listen(PORT,HOST,()=>{
    //below line shows message on terminal that server is running then display it on browser
   console.log(`server is running on http://${HOST}:${PORT}`);
    
})