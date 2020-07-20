const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

//drill 1.
app.get('/sum', (req, res) => {
//1. get values from the request
    const a = req.query;
    const b = req.query;

//2. validate the values
    if (!a || !b) {
        return res.status(400).send('Please provide a number');
    }
//convert string value into a number
    const numA = parseFloat(a);
    const numB = parseFloat(b);

//validate that they're numbers     
    if(Number.isNaN(numA) || Number.isNaN(numB)) {
        return res.status(400).send('must be a number')
    }

    const c = numA + numB;
//3. create response string
    const add = `The sum of ${numa} and ${numb} is ${c}.`;
//4. send response string
    res.send(add);
});


//drill 2.
app.get('/cipher', (req, res) => {
    const text = req.query
    const shift = req.query

    if(!text || !shift) {
        return res.status(400).send('this is required');
    }

    const newShift = parseFloat(shift);

    if (Number.isNaN(newShift)) {
        return res.status(400).send('shift must be a number');
    }

    
})

app.listen(8000, () => {
    console.log('Express server is listening on port 8000');
});