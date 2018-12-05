require('dotenv').config();
const AWS = require('aws-sdk');
const lambdaParams = {apiVersion: '2015-03-31'};
lambdaParams.region = "us-east-2"; // Configure your profile in .aws/config
lambdaParams.sslEnabled = false;
lambdaParams.paramValidation = false;
lambdaParams.endpoint = 'http://127.0.0.1:3001'; // Default SAM Toolkit Endpoint

const lambda = new AWS.Lambda(lambdaParams);

const params = {
  FunctionName: "HelloWorld",
  InvocationType: 'RequestResponse',
  LogType: 'None',
  Payload: '{ "name": "World" }'
};

lambda.invoke(params, (lambdaErr, lambdaData) => {
  if (lambdaErr) {
    console.error(lambdaErr);
  } else {
    console.log(lambdaData.Payload);
  }
});
