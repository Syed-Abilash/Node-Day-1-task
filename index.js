import express from 'express';
import fs from 'fs';
import {format } from 'date-fns';
import {log} from 'console'
const app = express();
const PORT = 8001;

app.get('/', (req,res)=>{
    res.status(200).json({message:"give the end point /read"})
})
app.get('/write',(req,res)=>{
    let today = format(new Date(), 'dd-mm-yyyy-hh-mm-ss')
    console.log(("today",today));
    const filePath = `TimeStamp/${today}.txt`
    fs.writeFileSync(filePath,`${today}`,'utf8')
    let data = fs.readFileSync(filePath,'uts')
    res.status(200).send(data)
})
app.get('/read', (req, res) => {
    let today = format(new Date(), 'dd-mm-yyyy-hh-mm-ss')
    const filePath = `TimeStamp/ ${today}.txt`
    fs.writeFileSync(filePath, `${today}`, 'utf8')
    let dataTime = fs.readFileSync(filePath, 'utf8')
    res.status(200).send(dataTime)
})

app.listen(PORT,()=>{
    console.log(`app is running in the port = ${PORT}`);
})