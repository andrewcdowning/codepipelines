import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, ShellStep, CodePipelineSource, Step, ManualApprovalStep } from 'aws-cdk-lib/pipelines';
import { pipeline } from 'stream';
import { PipelineAppStage } from './stage';

export class CodepipelinesStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'exampleCICDPipeline', {
      pipelineName: 'pipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('andrewcdowning/codepipelines', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth'
        ]
      })
    });

    const betaStage = pipeline.addStage(new PipelineAppStage(this, 'beta', {
      env: {
        account: '627074121944',
        region: 'us-west-2'
      }
    }));
    betaStage.addPost(new ManualApprovalStep('Manual approval before prod!'));

    pipeline.addStage(new PipelineAppStage(this, 'prod', {
      env: {
        account: '627074121944',
        region: 'us-west-2'
      }
    }));
  };
};
