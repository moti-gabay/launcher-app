import express from "express"
import { client, run } from "./db/mongoConnect.js";
import launchersRouter from "./routes/launchers.js";
import cors from 'cors'
const app = express();

const PORT = 3003;

// run().catch(console.dir);

app.use(express.json());
app.use(cors())
app.use('/api/launchers', launchersRouter);

app.get('/', async (req, res) => {
    const testbd = client.db("launchersDB")
    const resualts = await testbd.collection('launchers').find({}).toArray();
    console.log(resualts);

    res.send("hello from laucher server")
})



app.listen(PORT, () => {
    console.log(`server is run on port: ${PORT}`);

})