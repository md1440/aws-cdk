"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_ec2_1 = require("aws-cdk-lib/aws-ec2");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const integ = require("@aws-cdk/integ-tests-alpha");
const aws_rds_1 = require("aws-cdk-lib/aws-rds");
class TestStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id) {
        super(scope, id);
        const vpc = new aws_ec2_1.Vpc(this, 'Vpc', { maxAzs: 2, natGateways: 1 });
        new aws_rds_1.DatabaseInstance(this, 'Instance', {
            engine: aws_rds_1.DatabaseInstanceEngine.mysql({ version: aws_rds_1.MysqlEngineVersion.VER_8_0_30 }),
            instanceType: aws_ec2_1.InstanceType.of(aws_ec2_1.InstanceClass.BURSTABLE3, aws_ec2_1.InstanceSize.SMALL),
            vpc,
            allocatedStorage: 1000,
            storageType: aws_rds_1.StorageType.GP3,
            removalPolicy: aws_cdk_lib_1.RemovalPolicy.DESTROY,
        });
    }
}
const app = new aws_cdk_lib_1.App();
new integ.IntegTest(app, 'InstanceGp3Test', {
    testCases: [new TestStack(app, 'cdk-integ-rds-instance-gp3')],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuaW5zdGFuY2UtZ3AzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWcuaW5zdGFuY2UtZ3AzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXFGO0FBQ3JGLDZDQUF3RDtBQUN4RCxvREFBb0Q7QUFFcEQsaURBQWdIO0FBRWhILE1BQU0sU0FBVSxTQUFRLG1CQUFLO0lBQzNCLFlBQVksS0FBZ0IsRUFBRSxFQUFVO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFaEUsSUFBSSwwQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ3JDLE1BQU0sRUFBRSxnQ0FBc0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDaEYsWUFBWSxFQUFFLHNCQUFZLENBQUMsRUFBRSxDQUFDLHVCQUFhLENBQUMsVUFBVSxFQUFFLHNCQUFZLENBQUMsS0FBSyxDQUFDO1lBQzNFLEdBQUc7WUFDSCxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLFdBQVcsRUFBRSxxQkFBVyxDQUFDLEdBQUc7WUFDNUIsYUFBYSxFQUFFLDJCQUFhLENBQUMsT0FBTztTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFHLEVBQUUsQ0FBQztBQUV0QixJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFFO0lBQzFDLFNBQVMsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0NBQzlELENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluc3RhbmNlQ2xhc3MsIEluc3RhbmNlU2l6ZSwgSW5zdGFuY2VUeXBlLCBWcGMgfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZWMyJztcbmltcG9ydCB7IEFwcCwgUmVtb3ZhbFBvbGljeSwgU3RhY2sgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgKiBhcyBpbnRlZyBmcm9tICdAYXdzLWNkay9pbnRlZy10ZXN0cy1hbHBoYSc7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCB7IERhdGFiYXNlSW5zdGFuY2UsIERhdGFiYXNlSW5zdGFuY2VFbmdpbmUsIE15c3FsRW5naW5lVmVyc2lvbiwgU3RvcmFnZVR5cGUgfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtcmRzJztcblxuY2xhc3MgVGVzdFN0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgIGNvbnN0IHZwYyA9IG5ldyBWcGModGhpcywgJ1ZwYycsIHsgbWF4QXpzOiAyLCBuYXRHYXRld2F5czogMSB9KTtcblxuICAgIG5ldyBEYXRhYmFzZUluc3RhbmNlKHRoaXMsICdJbnN0YW5jZScsIHtcbiAgICAgIGVuZ2luZTogRGF0YWJhc2VJbnN0YW5jZUVuZ2luZS5teXNxbCh7IHZlcnNpb246IE15c3FsRW5naW5lVmVyc2lvbi5WRVJfOF8wXzMwIH0pLFxuICAgICAgaW5zdGFuY2VUeXBlOiBJbnN0YW5jZVR5cGUub2YoSW5zdGFuY2VDbGFzcy5CVVJTVEFCTEUzLCBJbnN0YW5jZVNpemUuU01BTEwpLFxuICAgICAgdnBjLFxuICAgICAgYWxsb2NhdGVkU3RvcmFnZTogMTAwMCxcbiAgICAgIHN0b3JhZ2VUeXBlOiBTdG9yYWdlVHlwZS5HUDMsXG4gICAgICByZW1vdmFsUG9saWN5OiBSZW1vdmFsUG9saWN5LkRFU1RST1ksXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuXG5uZXcgaW50ZWcuSW50ZWdUZXN0KGFwcCwgJ0luc3RhbmNlR3AzVGVzdCcsIHtcbiAgdGVzdENhc2VzOiBbbmV3IFRlc3RTdGFjayhhcHAsICdjZGstaW50ZWctcmRzLWluc3RhbmNlLWdwMycpXSxcbn0pO1xuXG5hcHAuc3ludGgoKTtcbiJdfQ==