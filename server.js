var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

//Use filepaths
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));


app.get('/',function(req,res){
  res.render('index');
})

app.post('/get-file-info',upload.single('file'),function(req,res){
  
  if(!req.file)
    res.send({error:'No file found.'})
  
  var jsonObj = { file_name:req.file.originalname,
                  size: req.file.size,
                 file_type : req.file.mimetype
                };
  res.json(jsonObj);
})


app.listen(process.env.PORT,function(){
  console.log("App started. Listening to port: "+process.env.PORT);
})