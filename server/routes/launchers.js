import express from "express"
import { client } from "../db/mongoConnect.js";
import { ObjectId } from "mongodb";

const launchersRouter = express.Router();

const testbd = client.db("launchersDB");
const launchers = testbd.collection('launchers');

launchersRouter.get('/', async (req, res) => {
    try {
        const resualts = await launchers.find({}).toArray();
        return res.status(200).json(resualts)

    } catch (error) {
        console.error(error)
    }
});

launchersRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "id is required" })
    }
    try {
        const resualts = await launchers.findOne({ _id: new ObjectId(id) })
        if (!resualts) {
            return res.status(404).json({ error: "launcher not found" })
        }
        return res.status(200).json(resualts);
    } catch (error) {
        console.error(error)
    }
})

launchersRouter.post('/', async (req, res) => {
    const { name, city, rocketType, latitude, longitude } = req.body;
    try {
        if (!name || !city || !rocketType || !latitude || !latitude || !longitude) {
            return res.status(400).json({ error: "all of this fild is require : name ,city ,rocketType ,latitude ,longitude " })
        }
        const resualts = await launchers.insertOne({
            city,
            rocketType,
            latitude,
            longitude,
            name
        })
        if (!resualts) {
            return res.status(400).json({ error: "ther is a problem with create a launcher" })
        }
        return res.status(200).json(resualts)
    } catch (error) {
        console.error(error)
    }

});

launchersRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "id is required" })
    }
    try {
        const resualts = await launchers.deleteOne({ _id: new ObjectId(id) })
        if (!resualts) {
            console.log(resualts);

            return res.status(404).json({ error: "launcher not deleted" })
        }
        return res.status(200).json(resualts.deletedCount);
    } catch (error) {
        console.error(error)
    }

})

launchersRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, city, rocketType, latitude, longitude } = req.body;

    if (!id) {
        return res.status(400).json({ error: "id is required" })
    }
    try {
        const resualts = await launchers.updateOne({ _id: new ObjectId(id) }, { $set: name, city, rocketType, latitude, longitude })
        if (resualts.matchedCount === 0) {

            return res.status(404).json({ error: "launcher not found" })
        }
        return res.status(200).json({ message: "update successeful", modifiedCount: resualts.modifiedCount });
    } catch (error) {
        console.error(error)
    }

})


export default launchersRouter;