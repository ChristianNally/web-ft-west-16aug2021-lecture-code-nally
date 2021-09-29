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



const verb = process.argv[2];

switch (verb){
  case 'browse':
    client.query('SELECT * FROM objectives ORDER BY id;')
    .then((response)=>{
      console.log('response.rows:',response.rows);
    });
    break;
  default:
    console.log('i did not recognize your verb!');
}