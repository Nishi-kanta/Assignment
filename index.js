const express = require('express')
const app = express();
const fs = require('fs');


app.use(express());

// Task 1: Basic Node.js Server
// Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests.You can use any library or framework of your choice
app.get('/hello', async (req, res) => {
    try {
        res.status(200).json({message:"Hello World"})
    } catch (err) {
        return res.status(500).send({status:false,message:err})
    }
})

// Task 2: Data Manipulation
// Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.
app.get('/sumofintegers', async (req, res) => {
    try {
        const arr = [2, 12, 23, 45]
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
// Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it.The script should print the total word count to the console.
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



