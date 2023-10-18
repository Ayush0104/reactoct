// api create

const express = require('express')
// const cors= require('cors')
const app = express()
// const bodyParser = require('bodyParser')
// app.use(express.json())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(cors())
app.listen(8080,function(err,data){
    if(err)
    console.log(err);
    console.log("server started port:8080");
})

app.post('/register',(req,res)=>{
  //  console.log(req);
    res.send("user register")
})

app.post('/login',(req,res)=>{

    res.send("user login")
})

app.get('/product',(req,res)=>{

   var four=[
    {
      id:1,
  images:"",
  Price:["5999/-","Inclusive of all taxes"],
  Name:'Content Writing',
  Validity:'Valid for 90 days ',
  Teacher: 'Abhimanyu Sir (Former content writer in Google)',
  para:'Career coaching includes mock interviews, CV, LinkedIn, Github and soft skills training',
   discount:'27% Discount for first 100 students',
    },
    {
      id:2,
      images:"",
      Price:["7999/-","Inclusive of all taxes"],
      Name:'Development',
      Validity:'Valid for 120 days ',
      Teacher: 'Hanuman Sir  (Former Developer in Google)',
      para:'Career coaching includes mock interviews, CV, LinkedIn, Github and soft skills training',
      discount:'27% Discount for first 100 students',
    
    },
    {
      id:3,
      images:"",
      Price:["3999/-","Inclusive of all taxes"],
      Name:'Seo',
      Validity:'Valid for 90 days ',
      Teacher: 'Akansha Maam  (Former Developer in Google)',
      para:'Career coaching includes mock interviews, CV, LinkedIn, Github and soft skills training',
      discount:'27% Discount for first 100 students',
    
    },
    {
      id:4,
      images:"",
      Price:["15999/-","Inclusive of all taxes"],
      Name:'App Design',
      Validity:'Valid for 150 days ',
      Teacher: 'Akansha Maam  (Former Developer in Google)',
      para:'Career coaching includes mock interviews, CV, LinkedIn, Github and soft skills training',
      discount:'27% Discount for first 100 students'
    
    }
    ]
   
   
   res.send(four)
})


