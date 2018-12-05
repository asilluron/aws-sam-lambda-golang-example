go get github.com/aws/aws-lambda-go/events
go get github.com/aws/aws-lambda-go/lambda
GOOS=linux go build -o ./bin/hello
sam local start-lambda -n development-env.json --region=us-east-2 --debug --profile default -t template.yml

