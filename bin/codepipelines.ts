#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CodepipelinesStack } from '../lib/codepipelines-stack';

const app = new cdk.App();
new CodepipelinesStack(app, 'CodepipelinesStack', {
  env: {
    account: '627074121944',
    region: 'us-west-2'
  }
});

app.synth();