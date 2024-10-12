import express from 'express';
import bodyParser from 'body-parser';
import database from './config/mongoose.js';
import optionRouter from './routes/options.routes.js';
import questionRouter from './routes/question.routes.js';

let app = express()

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/questions', questionRouter);
app.use('/api/options' , optionRouter);

app.listen(3300,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Application running on port 3300');
})