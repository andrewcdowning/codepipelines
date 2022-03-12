## AWS Code Pipelines Example

```mermaid
flowchart LR
G(Github) -->|update| A(Code Build);
A --> B(beta stage);
B --> C{Manual Approval};
C -->|yes| P(Prod Stage)
C -->|no| e(wait)
```
There is a lambda stub to use as an example for deployment

### Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
