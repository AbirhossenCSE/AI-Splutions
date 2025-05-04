const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wpavw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection

        const database = client.db('AI-Solutions');
        const testimonialsCollection = database.collection('testimonials');
        const blogsCollection = database.collection('blogs');


        // Get All testimonials
        app.get("/testimonials", async (req, res) => {
            try {
                const testimonials = await testimonialsCollection.find().toArray();
                res.json(testimonials || []);
            } catch (error) {
                res.status(500).json({ message: "Failed to fetch testimonials", error: error.message });
            }
        });

        // Get All blogs
        app.get("/blogs", async (req, res) => {
            try {
                const blogs = await blogsCollection.find().toArray();
                res.json(blogs || []);
            } catch (error) {
                res.status(500).json({ message: "Failed to fetch blogs", error: error.message });
            }
        });



        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('AI task is hare')
})
app.listen(port, () => {
    console.log(`Task at: ${port}`)
})




