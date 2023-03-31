#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ec2 = require("aws-cdk-lib/aws-ec2");
const cdk = require("aws-cdk-lib");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const integ = require("@aws-cdk/integ-tests-alpha");
const elbv2 = require("aws-cdk-lib/aws-elasticloadbalancingv2");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-elbv2-integ');
const vpc = new ec2.Vpc(stack, 'VPC', {
    maxAzs: 2,
});
const lb = new elbv2.NetworkLoadBalancer(stack, 'LB', {
    vpc,
    internetFacing: true,
});
const targetGroup = new elbv2.NetworkTargetGroup(stack, 'TG', {
    vpc,
    port: 443,
    deregistrationDelay: aws_cdk_lib_1.Duration.seconds(5),
    connectionTermination: true,
});
lb.addListener('listener', {
    port: 443,
    defaultTargetGroups: [targetGroup],
});
targetGroup.node.addDependency(vpc.internetConnectivityEstablished);
// The target's security group must allow being routed by the LB and the clients.
new integ.IntegTest(app, 'targetGroupTest', {
    testCases: [stack],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuY29ubmVjdGlvbi10ZXJtaW5hdGlvbi5ubGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRlZy5jb25uZWN0aW9uLXRlcm1pbmF0aW9uLm5sYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBMkM7QUFDM0MsbUNBQW1DO0FBQ25DLDZDQUF1QztBQUN2QyxvREFBb0Q7QUFDcEQsZ0VBQWdFO0FBR2hFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUV4RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUNwQyxNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUMsQ0FBQztBQUVILE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDcEQsR0FBRztJQUNILGNBQWMsRUFBRSxJQUFJO0NBRXJCLENBQUMsQ0FBQztBQUVILE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDNUQsR0FBRztJQUNILElBQUksRUFBRSxHQUFHO0lBQ1QsbUJBQW1CLEVBQUUsc0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLHFCQUFxQixFQUFFLElBQUk7Q0FDNUIsQ0FBQyxDQUFDO0FBRUgsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7SUFDekIsSUFBSSxFQUFFLEdBQUc7SUFDVCxtQkFBbUIsRUFBRSxDQUFDLFdBQVcsQ0FBQztDQUNuQyxDQUFDLENBQUM7QUFFSCxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUVwRSxpRkFBaUY7QUFDakYsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsRUFBRTtJQUMxQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDbkIsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgZWMyIGZyb20gJ2F3cy1jZGstbGliL2F3cy1lYzInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgaW50ZWcgZnJvbSAnQGF3cy1jZGsvaW50ZWctdGVzdHMtYWxwaGEnO1xuaW1wb3J0ICogYXMgZWxidjIgZnJvbSAnYXdzLWNkay1saWIvYXdzLWVsYXN0aWNsb2FkYmFsYW5jaW5ndjInO1xuXG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5jb25zdCBzdGFjayA9IG5ldyBjZGsuU3RhY2soYXBwLCAnYXdzLWNkay1lbGJ2Mi1pbnRlZycpO1xuXG5jb25zdCB2cGMgPSBuZXcgZWMyLlZwYyhzdGFjaywgJ1ZQQycsIHtcbiAgbWF4QXpzOiAyLFxufSk7XG5cbmNvbnN0IGxiID0gbmV3IGVsYnYyLk5ldHdvcmtMb2FkQmFsYW5jZXIoc3RhY2ssICdMQicsIHtcbiAgdnBjLFxuICBpbnRlcm5ldEZhY2luZzogdHJ1ZSxcblxufSk7XG5cbmNvbnN0IHRhcmdldEdyb3VwID0gbmV3IGVsYnYyLk5ldHdvcmtUYXJnZXRHcm91cChzdGFjaywgJ1RHJywge1xuICB2cGMsXG4gIHBvcnQ6IDQ0MyxcbiAgZGVyZWdpc3RyYXRpb25EZWxheTogRHVyYXRpb24uc2Vjb25kcyg1KSxcbiAgY29ubmVjdGlvblRlcm1pbmF0aW9uOiB0cnVlLFxufSk7XG5cbmxiLmFkZExpc3RlbmVyKCdsaXN0ZW5lcicsIHtcbiAgcG9ydDogNDQzLFxuICBkZWZhdWx0VGFyZ2V0R3JvdXBzOiBbdGFyZ2V0R3JvdXBdLFxufSk7XG5cbnRhcmdldEdyb3VwLm5vZGUuYWRkRGVwZW5kZW5jeSh2cGMuaW50ZXJuZXRDb25uZWN0aXZpdHlFc3RhYmxpc2hlZCk7XG5cbi8vIFRoZSB0YXJnZXQncyBzZWN1cml0eSBncm91cCBtdXN0IGFsbG93IGJlaW5nIHJvdXRlZCBieSB0aGUgTEIgYW5kIHRoZSBjbGllbnRzLlxubmV3IGludGVnLkludGVnVGVzdChhcHAsICd0YXJnZXRHcm91cFRlc3QnLCB7XG4gIHRlc3RDYXNlczogW3N0YWNrXSxcbn0pO1xuXG5hcHAuc3ludGgoKTtcbiJdfQ==