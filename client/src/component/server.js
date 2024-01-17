
// const PORT = 5555
// const express = require('express')
// const cors = require('cors')
// const app = express()
// app.use(express.json())
// app.use(cors())

// app.listen(PORT, () => console.log ('Your server is running on PORT'+ PORT))

// const API_KEY = OPENAI_API_KEY;

// app.post('/completions', async (req, res) => {
//     const options = {
//         method: "POST",
//         headers: {
//             "Authorization": `Bearer ${API_KEY}`,
//             "Content-Type": "application/json"
        
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             messages : [{role: "user", content: "Hello Holistic Wellness Assistant is here to assistant you, What are your health concerns?"},],
//                 max_tokens:150,
//         })
//     }
//     try {
//         const response = await fetch('https://api.openai.com/v1/chat/completions', options)
//         const data = await response.json()
//         res.send(data)
//     } catch (error) {
//         console.error(error);
//         // res.status(500).send({ error: 'Internal Server Error' });
//     }
// })