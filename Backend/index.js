const express = require('express');
const cors = require('cors');
const userRoutes =  require('./src/routers/user.routes.js');


const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',userRoutes);

app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`);
})