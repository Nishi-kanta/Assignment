const express = require('express')
const app = express();
const fs = require('fs');


app.use(express());

// Task 1: Basic Node.js Server
app.get('/Hello', async (req, res) => {
    try {
        res.status(200).json({message:"Hello World"})
    } catch (err) {
        return res.status(500).send({status:false,message:err})
    }
})

// Task 2: Data Manipulation
app.get('/sum', async (req, res) => {
    try {
        const arr = [5,58,7,56]
        const initialValue = 0;
        const totalSum = arr.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        );
     
        res.status(200).json({ message: `Sum of integers is ${totalSum}` })
    } catch (err) {
        return res.status(500).send({ status: false, message: err })
    }
})

// Task 3: Asynchronous File Handling
 function countWords(text) {
  return text.split(/\s+/).filter(word => word !== '').length;
 }


 fs.readFile('data.txt', 'utf8', (err, data) => {
const wordCount = countWords(data);
 console.log('Total word count:', wordCount);
 });

       
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

module.exports = app;



