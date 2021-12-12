const createError = require('http-errors')
const express = require('express')
require('dotenv').config()

const fileRouter = require('./routes/file')

const app = express()

app.use('/files', fileRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(process.env.PORT, () => {
  console.log(`File app listening at http://localhost:${process.env.PORT}`)
})


module.exports = app
