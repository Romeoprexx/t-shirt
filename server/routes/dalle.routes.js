import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';


dotenv.config();

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E Route"})
})

//creating a route that passes the prompt from frontend to server 

router.route('/').post(async (req, res) => {
    try {
        //getting the prompt from the frontend
      const { prompt } = req.body;
       //passing the prompt to openai and getting its response
      const response = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
      });
       
      //extracting the image out of the response
      const image = response.data.data[0].b64_json;
      
      //passing the image to frontend
      res.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Opps something went wrong"})
    }
})

export default router;