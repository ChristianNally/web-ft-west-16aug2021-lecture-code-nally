const pg = require('pg');
const Client = pg.Client;

const configObj = {
  user: 'postgres',
  host: 'localhost',
  database: 'spot',
  password: 'postgres',
  port: 5433
};

const client = new Client(configObj);

client.connect()
.then(() => {
  console.log('db connected');
})
.catch(err => console.log('db connection error', err));

const getAllObjectives = (cb) => {
  client.query(`SELECT * FROM objectives ORDER BY id;`)
  .then((response)=>{
    cb(response.rows);
  })
  .catch((error)=>{
    console.log("db getAllObjectives errpr:",error);
  });
};

const getObjective = (id, cb) => {
  client.query(`SELECT * FROM objectives WHERE id=$1;`,[id])
  .then((response)=>{
    cb(response.rows);
  })
  .catch((error)=>{
    console.log("db getAllObjectives errpr:",error);
  });
};

const updateObjective = (newObj, cb) => {

  // UPDATE table_name
  // SET column1 = value1,
  //     column2 = value2,
  //     ...
  // WHERE condition;

  client.query(`UPDATE objectives SET question = $1, answer = $2 WHERE id = $3`,[newObj.question,newObj.answer,newObj.id])
  .then((response)=>{
    cb(response.rows);
  })
  .catch((error)=>{
    console.log("db updateObjective errpr:",error);
  });
};

module.exports = {
  getAllObjectives,
  getObjective
};