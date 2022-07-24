const mongoDB = require('mongoose');

var URL = ':>>>'
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
