# AWS SAM CLI Lambda GoLang Example
This project is to save someone many hours of time when trying to invoke lambda functions directly. Other examples requires the use an API gateway to use regular http calls to invoke lambda functions. While this might match your environment, the base case in my opinion is stripped down lambda function that is invoked without the gateway.

Users are encouraged to expand the example or file issues to clarify any questions.

## Setup
It's important that you create three files for this example to work on your local machine.

1. `~/.aws/credentials`  https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
2. `~/.aws/config`  (Ensure you have region set, and match regions in the example to it)
3. `.env`

.env file
```
AWS_REGION=us-east-2
AWS_ACCESS_KEY_ID=XYZ_REPLACE
AWS_SECRET_ACCESS_KEY=XYZ_REPLACE
```

```
npm install
```

## Build
```
sh run.sh
```

## Test
```
node e2e-test
```
