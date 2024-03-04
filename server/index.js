const express = require('express')
const multer  = require('multer')
const app = express()
const port = 3000
const storage = multer.diskStorage({
  //保存路径
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  //保存在 destination 中的文件名
  filename: function (req, file, cb) {    
    cb(null,Date.now() + file.originalname)
  }
})
const upload = multer({ storage: storage })


app.get('/test', (req, res) => {
  setTimeout(() => {
    res.json({
      code: 10000,
      msg: "操作成功！",
      data: "test"
    })
  }, 500)
})

app.post('/uploadFile', upload.single('file'), function (req, res, next) {
  setTimeout(() => {
    res.json({
      code: 10000,
      msg: "操作成功！",
      data: "upload"
    })
  }, 2000)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})