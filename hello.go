package main

import (
	"context"
	"fmt"
	"github.com/aws/aws-lambda-go/lambda"
	"os"
)

type HelloEvent struct {
	Name string `json:"name"`
}

func HandleRequest(ctx context.Context, helloEvent HelloEvent) (string, error) {
	return fmt.Sprintf("%s %s", os.Getenv("HELLO"), helloEvent.Name), nil
}

func main() {
	lambda.Start(HandleRequest)
}
