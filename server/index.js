const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  setTimeout(() => {
    res.json({
      code: 10000,
      msg: "操作成功！",
      data: "test"
    })
  }, 500)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})