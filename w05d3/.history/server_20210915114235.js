const express = require('express');
const app = express();

const dbFns = require('./db/queries');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  console.log('homepage');
  dbFns.getAllObjectives((rows)=>{
//    console.log('rows (according to the server.js file):', rows);
    const templateVars = {objectives: rows};
    res.render('home', templateVars);
  });
});

//
// EDIT
//

app.get('/edit/:id',(req,res)=>{
  console.log('edit page');
  const id = req.params.id;
  dbFns.getObjective(id, (rows)=>{
//    console.log('rows (according to the server.js file):', rows);
    const templateVars = {objective: rows[0]};
    res.render('edit', templateVars);
  });
});

app.post('/edit/:id', (req,res)=>{
  const id = req.params.id;
  const newQuestion = req.body.question;
  const newAnswer = req.body.answer;

  dbFns.updateObjective({id, newQuestion, newAnswer}, ()=>{
    console.log('update successful');
  });

});

const port = process.env.PORT || 7889;
app.listen(port, ()=>{
  console.log(`Server is listening on port=${port}`);
});
