import { Stack, StackProps } from 'aws-cdk-lib';
import { Code, Function, Handler, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
const path = require('path');


export interface lambdaStackInterface {
    stageName: string;
}
export class LambdaStack extends Stack {
    constructor(scope: Construct, id: string, stageName: string, props?: StackProps) {
      super(scope, id, props);
      
      new Function(this, 'exampleLambda', {
          runtime: Runtime.NODEJS_14_X,
          handler: 'handler.handler',
          code: Code.fromAsset(path.join(__dirname, 'lambda')),
          environment: {'stageName': stageName}
      })

    };
};