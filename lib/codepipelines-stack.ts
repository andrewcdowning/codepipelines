import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, ShellStep, CodePipelineSource } from 'aws-cdk-lib/pipelines';
import { pipeline } from 'stream';

export class CodepipelinesStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'exampleCICDPipeline', {
      pipelineName: 'pipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('andrewcdowning/codepipelines', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth'
        ]
      })
    })
  }
}
