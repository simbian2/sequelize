const express = require('express')
const app = express()
const {image1} = require('./models')
const {curriculum,skill_item,skill} = require('./models')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})

//npm install sequelize-auto
//sequelize-auto
//-o "경로"
//-d "데이터베이스"
//-h "url -> localhost"
//-u "root"
//-p "port"
//-x "password"
//-e "mysql"
//-g sequelize-auto

// npx sequelize-auto -o "./models" -d class -h localhost -u root -p 3306 -x 0000 -emysql
app.set('view engine','html')
app.use(bodyParser.urlencoded({extended:false}))

nunjucks.configure('views',{
    express:app,
})

app.use(express.static('uploads'))

app.get('/',async (req,res)=>{
    let result = await skill.findAll({
        include : {model:skill_item, as:"item"}
    })
    console.log(result)
    res.json({result})
    res.render('index')
})

// app.post('/',upload.single('usefile'),async (req,res)=>{

//     let image = req.body.usefile
//     console.log(image)
//     let result = await image1.create({ image })
//     console.log(result)
//     res.redirect('/')
// })

app.listen(3000,()=>{
    console.log('server start port 3000')
})