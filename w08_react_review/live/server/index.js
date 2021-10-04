const PORT = 8080;
const app = require('express')();
const cors = require('cors');
const uniqid = require('uniqid');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());

const data = [
  {id: uniqid(), task: 'buy milk', done: false},
  {id: uniqid(), task: 'wash dishes', done: false},
  {id: uniqid(), task: 'clean up', done: true },
];

app.get("/todos", (req,res)=>{
  res.json(data);
});

app.post("/todos/:id/delete", (req,res) => {
  // TODO
  res.send('return having done nothing');
});

app.listen(PORT, ()=>{
  console.log(`Server is listening to port=${PORT}`);
});
