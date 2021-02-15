import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 5000;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Import routes
import issuesRoute from './routes/issues.js';

app.use('/issues', issuesRoute);


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
})


//Connect to DB
mongoose.connect('mongodb://0.0.0.0:80/TestDB',
 { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
 .catch((error) => console.log(error));

 mongoose.set('useFindAndModify', false);