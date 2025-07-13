const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health/liveness',(req,res)=>{
    res.status(200).send('OKK');
  })
  
  app.get('/health/readiness',async(req,res)=>{
    try{
      res.status(200).send('OK');
    }catch(error){
      res.status(500).send('Error:Not Ready');
    }
  });
   
  
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
