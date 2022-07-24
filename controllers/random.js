const Model = require('../db/dbmodel');
const global = require('../package.json');
const draw = (req, res) => {
   var randomNumber = Math.floor(Math.random() * 78)+1;
   Model.find({ id : randomNumber}, (err , cards) => {
      if (err) next(err);
      var isForward = Math.floor(Math.random() * 2);
      return res.status(200).json(
         {
            status: res.statusCode,
            message: 'OK!',
            cards_info: {
               "id": cards[0].id,
               "name": isForward ? `Lá bài ${cards[0].name} ngược` : `Lá bài ${cards[0].name}`, 
               "title_main": cards[0].title_main, 
               "title_secondary": isForward ? cards[0].title_reverse : cards[0].title_forward, 
               "title_love": cards[0].title_love,
               "title_work": cards[0].title_work,
               "title_money": cards[0].title_money,
               "title_heath": cards[0].title_heath,
               image_url : isForward ? `https://tarot-image.000webhostapp.com/reverse/${randomNumber>9?randomNumber:`0${randomNumber}`}.jpg` : `https://tarot-image.000webhostapp.com/forward/${randomNumber>9?randomNumber:`0${randomNumber}`}.jpg`,
            },
            description : global.description,
            author : global.author,
            license : 'MeoZodiac',
            version : global.version
         }
      );
   }) 
}
module.exports = {
   draw
}