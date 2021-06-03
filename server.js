const express = require('express')
const app = express()
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

app.set('view engine','html')
app.use(bodyParser.urlencoded({extended:false}))

nunjucks.configure('views',{
    express:app,
})

app.use(express.static('uploads'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/file',upload.single('usefile'),(req,res)=>{
    // res.redirect('/')
})

app.listen(3000,()=>{
    console.log('server start port 3000')
})