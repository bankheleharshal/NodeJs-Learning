const http=require('http')
const url = require('url') 
const app=http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':"text/html"})

res.write('<h1>URL PARSING</h1>')
res.write("<hr>")

//url parse

const url_string='https://www.google.com/search?q=pune&oq=pune&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyCggBEC4YsQMYgAQyBwgCEAAYgAQyBggDEEUYPDIGCAQQRRg9MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEIMTEwN2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8'

const result=url.parse(url_string,true)
console.log(result);
res.write(JSON.stringify(result));

res.end("end")

})
const port=2000
const host='127.0.0.1'
app.listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}`)
})