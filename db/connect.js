const mongoDB = require('mongoose');

var URL = 'mongodb+srv://hoandinh:hoandinh@cluster0.8mwrx.mongodb.net/?retryWrites=true&w=majority'
var Connect = () => {
   mongoDB.connect(URL , {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
   .then(()=> {
      console.log('✅ Connect to Database Successfully');
   })
   .catch((err) => {
      console.log('⛔ Error Connecting to Database with error:\n' + err);
   });
}

   module.exports = {
      Connect: Connect
   }