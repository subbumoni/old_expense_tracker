const express=require('express')
const http_server=express()

const PORT=2024
const HOSTNAME="localhost"

http_server.get('/',(req,res)=>{
    res.status(200).json({
        message:'server started successfully',
    })
})

http_server.listen(PORT,HOSTNAME,()=>{
    console.log(`server started at http://${HOSTNAME}:${PORT}`)
})