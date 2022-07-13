const express = require('express');
const app = express();
const { validateArray, mean, median, mode } = require('./helper')
const ExpressError = require('./expressError')

app.get('/mean', (req, res)=> {
  if(!req.query.nums){
    throw new ExpressError('Not a valid input', 400);
  }
  let splitNums = req.query.nums.split(',');
  if(!validateArray(splitNums)){
    throw new ExpressError('Not a valid number', 400);
  } 

  let result = mean(splitNums);
  res.status(200);

  res.json(
  {
    operation: "mean",
    value: result
  });

  
});

app.get('/median', (req, res)=> {
  if(!req.query.nums){
    throw new ExpressError('Not a valid input', 400);
  }
  let splitNums = req.query.nums.split(',');
  if(!validateArray(splitNums)){
    throw new ExpressError('Not a valid number', 400);
  } 

  let result = median(splitNums);
  res.status(200);

  res.json(
  {
    operation: "median",
    value: result
  });
});

app.get('/mode', (req, res)=> {
  if(!req.query.nums){
    throw new ExpressError('Not a valid input', 400);
  }
  let splitNums = req.query.nums.split(',');
  if(!validateArray(splitNums)){
    throw new ExpressError('Not a valid number', 400);
  } 

  let result = mode(splitNums);
  res.status(200);

  res.json(
  {
    operation: "mode",
    value: result
  });
});

// 404 handler
app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});

app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  res.status(err.status || 500);

  // set the status and alert the user
  return res.json({
    error: err
  });
});


app.listen(3000, function () {
  console.log('App on port 3000');
})