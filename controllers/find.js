const Model = require('../db/dbmodel');
const global = require('../package.json');
const index = (req,res) => {
   
   idFind = req.query.id;
   nameFind = req.query.name;
   if (!idFind && !nameFind) {
      return res.status(404).json({
         status: res.statusCode,
         message: 'thiếu id hoặc name',
         description : global.description,
         author : global.author,
         license : 'MeoZodiac',
         version : global.version
      });
   }
   if (idFind) {
      Model.find({id: idFind},(err,cards) => {
         if (err || cards.length === 0) return res.status(200).json({
            status: 404,
            message: err || id !== undefined ? 'Id tìm kiếm trong khoảng 1 đến 78 ^_^': 'tên lá bài không tồn tại',
            
         });
         return res.status(200).json(
            {
               status: res.statusCode,
               message: 'OK!',
               cards_Info: cards,
               description : global.description,
               author : global.author,
               license : 'MeoZodiac',
               version : global.version
            }
         );
      })
   } else {
      Model.find({name: nameFind},(err,cards) => {
         if (err || cards.length === 0) return res.status(200).json({
            status: 404,
            message: err || 'Không tồn tại lá bài này!',
            
         });
         return res.status(200).json(
            {
               status: res.statusCode,
               message: 'OK!',
               cards_Info: cards,
               description : global.description,
               author : global.author,
               license : 'MeoZodiac',
               version : global.version
            }
         );
      })
   }
   
}


module.exports = {
   index
}