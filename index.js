const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const connectdatabase=require('./models/config')
app.use(bodyParser.urlencoded({ extended: true }))

dotenv.config({ path: '.env' })
require('./models')
app.use(express.json())
app.use(cookieParser());
 
connectdatabase();
const UserRoutes = require('./routes/UserRouter')
const ContactRoutes = require('./routes/ContactRoutes')

app.use('/api/v1', UserRoutes);
app.use('/api/v1', ContactRoutes);

app.listen(3000, () => {
    console.log("post 3000");
})
