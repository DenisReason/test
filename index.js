import { MongoClient } from "mongodb";
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const url = process.env.url

const app = express()
const Client = new MongoClient(url)
const dbName = "MinhDb"
async function connectToDB(){
    try { 
        await Client.connect();
        console.log("Connected successfully to server")
        const db = Client.db(dbName);
        const collection = db.collection('Col1')
        collection.insertOne({name:"minh",age:19})
        return 'done'
    }
    catch(err){
        console.log(err)
    }
}

app.post('/login', (req, res, next)=>{
    connectToDB()
})