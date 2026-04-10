const http=require('http')
const url=require('url')
 const app=http.createServer((req,res)=>{
res.writeHead(200,{"content-type":'text/html'})
const result=url.parse(req.url,true)
res.write("Node JS Server")
//routing in nodejs

if(result.pathname=='/')
{

    res.write("<h1>Homepage</h1>");
}
if(result.pathname=='/about')
{
    res.write("<h1>About us Page</h1>");

}
else if(result.pathname=='/contact')
{
      res.write("<h1>Contact us Page</h1>");
}
//fallback routing
 else  
{
    res.write("<h1>404 page </h1>");
}
res.end()


 })

 const HOST='127.0.1.1';
 const PORT=1000;
 app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT}`)
 })
 