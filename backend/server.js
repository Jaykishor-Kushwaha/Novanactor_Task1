const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/contact', contactRoutes);

app.use('/api/test', async(req ,res)=>{
    try {  
        res.status(201).json({ message: 'server in running...' });
      } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
      } 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
