const express = require('express');
const app = express();
app.set('view engine','ejs');

app.get('/',(req,res)=>{
  console.log('homepage');
});

const port = process.env.PORT || 7889;
app.listen(port, ()=>{
  console.log(`Server is listening on port=${port}`);
});
