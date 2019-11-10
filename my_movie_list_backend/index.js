const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lonelydream17',
    database: 'cs157a'
});



db.connect(err => {
    if (err) {
    console.log(err);
    }
    else {
    console.log('Connected to the MySQL server');
    }
});


app.listen(4040, () => {
    console.log('Server is running')
});

app.get('/login', (req,res)=>{
    const {email}= req.query;
    db.query(`SELECT * FROM User WHERE email = '${email}'`, (err, result)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data: result
            })
        }
    });
})

app.get('/content', (req, res)=>{
    
    db.query('SELECT * FROM CONTENT', (err, results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data: results
            })
        }
    }); 
})

app.get('/content/add', (req, res) =>{
    const {contentname, releaseyear,
         contentgenre, studioname} = req.query;
    console.log(contentname,releaseyear,contentgenre,studioname)
    const INSERT_CONTENT = `INSERT INTO Content VALUES('${contentname}','${releaseyear}', '${contentgenre}', '${studioname}')`
    db.query(INSERT_CONTENT, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send('content successfully added')
        }
    });
})

app.get('/',(req, res) => {
    res.send('go to /content to see all the movies')
});