require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
const app = express()
 const bodyParser = require('body-parser')
 const cors = require('cors')
 app.use(bodyParser.json())
const PORT = process.env.PORT || 3001
app.use(cors())
const Subscriptor = require('./models/subscriptor')



app.post('/', async (req, res) => {
   let subscriptor = await Subscriptor.findOne({ email: req.body.email })
   if (subscriptor) return res.status(400).send("El email ya se encuentra registrado")
 
    const newSubscriptor = new Subscriptor({
      name: req.body.name,
      lastName: req.body.lastName,
      job: req.body.job,
      email: req.body.email,
      country: req.body.country,
      telephone: req.body.telephone,
   })
  try {
    await newSubscriptor.save()
     return  res.send("The subscriptor has been saved")
  } catch (error) {
     return  res.status(500).send(error.message)
  }
});


app.get('/subscriptors/', async (req,res)=>{
   let subscriptors = await Subscriptor.find({}, {_id:0, created_at:0, __v:0})
  res.send(subscriptors)
})


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vtrhi.mongodb.net/eventovirtual`,
{ useNewUrlParser: true,
  useUnifiedTopology: true },(err)=>{
if(err) throw err;
console.log("DB Connected Successfully");
})

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});