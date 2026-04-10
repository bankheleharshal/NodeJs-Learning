const http=require('http')
const url=require('url')
const app=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>URL ROUTING IN NODEJS</h1>")
   const urlstring='https://www.google.com/search?q=pune&oq=pun&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgoIARAuGLEDGIAEMgYIAhBFGDkyBggDEEUYPDIGCAQQRRg9MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEHNzgyajBqN6gCCLACAfEFvHZMKu_Y5EfxBbx2TCrv2ORH&sourceid=chrome&ie=UTF-8'
  // const result=(urlstring,true)
    const result=url.parse(req.url,true)
    console.log(result)
    console.log(result.pathname)
    res.end()
})

const PORT=2000;
const HOST='127.1.1.1'; 

app.listen(PORT,HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);

})