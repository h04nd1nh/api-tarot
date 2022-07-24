const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
   id: {
      type: String
   },
   name: {
      type: String
   },
   title_main: {
      type: String
   },
   title_forward: {
      type: String
   },
   title_reverse: {
      type: String
   },
   title_love: {
      type: String
   },
   title_work: {
      type: String
   },
   title_money: {
      type: String
   },
   title_heath: {
      type: String
   },
   
});



const Model = mongoose.model('tarot_cards',ModelSchema);

module.exports = Model;