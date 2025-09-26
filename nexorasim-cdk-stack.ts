import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as sns from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';

export class NexoraSimStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // EAL6+ Device Compatibility Table
    const compatibilityTable = new dynamodb.Table(this, 'EAL6Compatibility', {
      partitionKey: { name: 'device_model', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'eUICC_version', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      stream: dynamodb.StreamViewType.NEW_IMAGE,
      tableName: 'nexorasim-eal6-compatibility'
    });

    // Compliance Documents Bucket
    const complianceBucket = new s3.Bucket(this, 'ComplianceBucket', {
      bucketName: 'nexorasim-compliance-docs',
      versioned: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL
    });

    // KMS Key for FIPS 140-3 Compliance
    const complianceKey = new kms.Key(this, 'ComplianceKey', {
      description: 'NexoraSIM FIPS 140-3 Compliance Key'
    });

    // SNS Topic for Alerts
    const alertsTopic = new sns.Topic(this, 'ComplianceAlerts', {
      topicName: 'nexorasim-compliance-alerts'
    });

    // CloudWatch Alarms
    new cloudwatch.Alarm(this, 'EIDValidationAlarm', {
      alarmName: 'HighEIDValidationFailureRate',
      metric: new cloudwatch.Metric({
        namespace: 'NexoraSIM/Compliance',
        metricName: 'ValidationFailureRate',
        statistic: 'Average'
      }),
      threshold: 5.0,
      evaluationPeriods: 2
    });

    new cloudwatch.Alarm(this, 'SASSMComplianceAlarm', {
      alarmName: 'SAS-SM-Compliance-Breach',
      metric: new cloudwatch.Metric({
        namespace: 'NexoraSIM/Compliance',
        metricName: 'SAS-SM-Compliance-Score',
        statistic: 'Minimum'
      }),
      threshold: 99.9,
      evaluationPeriods: 1,
      comparisonOperator: cloudwatch.ComparisonOperator.LESS_THAN_THRESHOLD
    });

    // Outputs
    new cdk.CfnOutput(this, 'CompatibilityTableName', {
      value: compatibilityTable.tableName
    });

    new cdk.CfnOutput(this, 'ComplianceBucketName', {
      value: complianceBucket.bucketName
    });
  }
}