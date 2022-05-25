const express = require("express");
const fs = require('fs');
const app = express()
fs.readFile('./goods.json','utf-8',(err,data)=>{
    if(!err){
        const obj = JSON.parse(data)
        app.get('/goods',(req,res)=>{
          
            const count = parseInt(req.query.count);
            const offset = parseInt(req.query.offset);
            console.log(count)
            console.log(offset)
            console.log(JSON.parse(data))
            const newData = JSON.parse(data).slice(offset,offset+count)
            console.log()
            res.json(newData)
            

        })



        app.get('/goods/:id',(req,res)=>{
            const good = JSON.stringify(obj.find((good)=>good.id === req.params.id))
            if (!good) {
                res.status(404).send('Mehsul yoxdur');
            }else {
                res.send(good)
            }
              
            
        })
      
    }
    
})



app.listen(5000,(err)=>{
    if(!err){
        console.log('Server is running on the port')
        
    }else{
        console.log('Error bash verdi')
    }
    
    
})