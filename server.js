const express = require( 'express' );
const path = require( 'path' )
const app = express();



const PORT = process.env.PORT || 2000;
const bodyParser = require('body-parser')


if(process.env.NODE_ENV === 'production'){
    //set static
    app.use(express.static('Client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'Client/build', 'index.html'));
    })
}

app.use( bodyParser.urlencoded( { extended: false } ) )
app.use(bodyParser.json())

const api = require('./routes/api')

app.use('/api', api)

app.listen( PORT, () => console.log( `Server Started on port ${ PORT }` ) )