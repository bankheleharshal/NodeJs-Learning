const http=require('http')

const app=http.createServer((req,res)=>{

    res.write(`<html>
        <head>
            <title>Node Server</title>
            <style>
    body {
        background-color: #3B3B3B;
        color: white;
        margin: 0;

        display: flex;
        justify-content: center;   /* horizontal center */
        align-items: center;       /* vertical center */

        height: 100vh;             /* full screen height */
        text-align: center;
        font-family: Arial;
    }

    h1 {
        color: yellow;
    }
</style>
        </head>
        <body>
            <h1>Welcome to NODEJS Server</h1>
        </body>
        </html>`)
    res.end()
})

const port=2000;
const host='127.0.0.1';
app.listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}`);
})
