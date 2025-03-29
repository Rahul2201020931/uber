const http = require('http');
const app=require('./app');
const port=process.env.PORT || 3000;
const server=http.createServer(app);
const connectToDb = require('./db/db.js')
connectToDb();
server.listen(port,()=>{
    console.log(`Server is ${port}`);
});