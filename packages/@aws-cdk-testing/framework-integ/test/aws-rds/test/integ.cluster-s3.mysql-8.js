"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ec2 = require("aws-cdk-lib/aws-ec2");
const s3 = require("aws-cdk-lib/aws-s3");
const cdk = require("aws-cdk-lib");
const rds = require("aws-cdk-lib/aws-rds");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-rds-s3-mysql-8-integ');
const vpc = new ec2.Vpc(stack, 'VPC', { maxAzs: 2 });
const importExportBucket = new s3.Bucket(stack, 'ImportExportBucket', {
    removalPolicy: cdk.RemovalPolicy.DESTROY,
});
new rds.DatabaseCluster(stack, 'Database', {
    engine: rds.DatabaseClusterEngine.auroraMysql({
        version: rds.AuroraMysqlEngineVersion.VER_3_01_0,
    }),
    credentials: rds.Credentials.fromUsername('admin', {
        password: cdk.SecretValue.plainText('7959866cacc02c2d243ecfe177464fe6'),
    }),
    instances: 1,
    instanceProps: { vpc },
    s3ImportBuckets: [importExportBucket],
    s3ExportBuckets: [importExportBucket],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuY2x1c3Rlci1zMy5teXNxbC04LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWcuY2x1c3Rlci1zMy5teXNxbC04LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTJDO0FBQzNDLHlDQUF5QztBQUN6QyxtQ0FBbUM7QUFDbkMsMkNBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsOEJBQThCLENBQUMsQ0FBQztBQUVqRSxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRTtJQUNwRSxhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPO0NBQ3pDLENBQUMsQ0FBQztBQUVILElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFO0lBQ3pDLE1BQU0sRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDO1FBQzVDLE9BQU8sRUFBRSxHQUFHLENBQUMsd0JBQXdCLENBQUMsVUFBVTtLQUNqRCxDQUFDO0lBQ0YsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtRQUNqRCxRQUFRLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsa0NBQWtDLENBQUM7S0FDeEUsQ0FBQztJQUNGLFNBQVMsRUFBRSxDQUFDO0lBQ1osYUFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0lBQ3JDLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0NBQ3RDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVjMiBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZWMyJztcbmltcG9ydCAqIGFzIHMzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zMyc7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgcmRzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1yZHMnO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuY29uc3Qgc3RhY2sgPSBuZXcgY2RrLlN0YWNrKGFwcCwgJ2F3cy1jZGstcmRzLXMzLW15c3FsLTgtaW50ZWcnKTtcblxuY29uc3QgdnBjID0gbmV3IGVjMi5WcGMoc3RhY2ssICdWUEMnLCB7IG1heEF6czogMiB9KTtcbmNvbnN0IGltcG9ydEV4cG9ydEJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQoc3RhY2ssICdJbXBvcnRFeHBvcnRCdWNrZXQnLCB7XG4gIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksXG59KTtcblxubmV3IHJkcy5EYXRhYmFzZUNsdXN0ZXIoc3RhY2ssICdEYXRhYmFzZScsIHtcbiAgZW5naW5lOiByZHMuRGF0YWJhc2VDbHVzdGVyRW5naW5lLmF1cm9yYU15c3FsKHtcbiAgICB2ZXJzaW9uOiByZHMuQXVyb3JhTXlzcWxFbmdpbmVWZXJzaW9uLlZFUl8zXzAxXzAsXG4gIH0pLFxuICBjcmVkZW50aWFsczogcmRzLkNyZWRlbnRpYWxzLmZyb21Vc2VybmFtZSgnYWRtaW4nLCB7XG4gICAgcGFzc3dvcmQ6IGNkay5TZWNyZXRWYWx1ZS5wbGFpblRleHQoJzc5NTk4NjZjYWNjMDJjMmQyNDNlY2ZlMTc3NDY0ZmU2JyksXG4gIH0pLFxuICBpbnN0YW5jZXM6IDEsXG4gIGluc3RhbmNlUHJvcHM6IHsgdnBjIH0sXG4gIHMzSW1wb3J0QnVja2V0czogW2ltcG9ydEV4cG9ydEJ1Y2tldF0sXG4gIHMzRXhwb3J0QnVja2V0czogW2ltcG9ydEV4cG9ydEJ1Y2tldF0sXG59KTtcblxuYXBwLnN5bnRoKCk7XG4iXX0=