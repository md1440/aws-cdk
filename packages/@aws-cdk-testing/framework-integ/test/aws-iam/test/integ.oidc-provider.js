"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const iam = require("aws-cdk-lib/aws-iam");
const app = new aws_cdk_lib_1.App();
const stack = new aws_cdk_lib_1.Stack(app, 'oidc-provider-integ-test');
const noClients = new iam.OpenIdConnectProvider(stack, 'NoClientsNoThumbprint', {
    url: 'https://oidc.eks.us-east-1.amazonaws.com/id/test2',
});
const clients = new iam.OpenIdConnectProvider(stack, 'Clients', {
    url: 'https://oidc.eks.us-east-1.amazonaws.com/id/test3',
    clientIds: ['foo', 'bar'],
});
const thumbprints = new iam.OpenIdConnectProvider(stack, 'Thumbprints', {
    url: 'https://oidc.eks.us-east-1.amazonaws.com/id/test4',
    thumbprints: [
        'aa00aa1122aa00aa1122aa00aa1122aa00aa1122',
        'aa00aa1122aa00aa1122aa00aa1122aa00aa1111',
    ],
});
new aws_cdk_lib_1.CfnOutput(stack, 'NoClientsThumbprints', {
    value: `${noClients.openIdConnectProviderthumbprints}`,
});
new aws_cdk_lib_1.CfnOutput(stack, 'ClientsThumbprints', {
    value: `${clients.openIdConnectProviderthumbprints}`,
});
new aws_cdk_lib_1.CfnOutput(stack, 'ThumbprintsThumbprints', {
    value: `${thumbprints.openIdConnectProviderthumbprints}`,
});
new integ_tests_alpha_1.IntegTest(app, 'iodc-provider-test', {
    testCases: [stack],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcub2lkYy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLm9pZGMtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBb0Q7QUFDcEQsa0VBQXVEO0FBQ3ZELDJDQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFHLEVBQUUsQ0FBQztBQUN0QixNQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFLLENBQUMsR0FBRyxFQUFFLDBCQUEwQixDQUFDLENBQUM7QUFFekQsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLHVCQUF1QixFQUFFO0lBQzlFLEdBQUcsRUFBRSxtREFBbUQ7Q0FDekQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUM5RCxHQUFHLEVBQUUsbURBQW1EO0lBQ3hELFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7Q0FDMUIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRTtJQUN0RSxHQUFHLEVBQUUsbURBQW1EO0lBQ3hELFdBQVcsRUFBRTtRQUNYLDBDQUEwQztRQUMxQywwQ0FBMEM7S0FDM0M7Q0FDRixDQUFDLENBQUM7QUFFSCxJQUFJLHVCQUFTLENBQUMsS0FBSyxFQUFFLHNCQUFzQixFQUFFO0lBQzNDLEtBQUssRUFBRSxHQUFHLFNBQVMsQ0FBQyxnQ0FBZ0MsRUFBRTtDQUN2RCxDQUFDLENBQUM7QUFFSCxJQUFJLHVCQUFTLENBQUMsS0FBSyxFQUFFLG9CQUFvQixFQUFFO0lBQ3pDLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRTtDQUNyRCxDQUFDLENBQUM7QUFFSCxJQUFJLHVCQUFTLENBQUMsS0FBSyxFQUFFLHdCQUF3QixFQUFFO0lBQzdDLEtBQUssRUFBRSxHQUFHLFdBQVcsQ0FBQyxnQ0FBZ0MsRUFBRTtDQUN6RCxDQUFDLENBQUM7QUFFSCxJQUFJLDZCQUFTLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFO0lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztDQUNuQixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAsIFN0YWNrLCBDZm5PdXRwdXQgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBJbnRlZ1Rlc3QgfSBmcm9tICdAYXdzLWNkay9pbnRlZy10ZXN0cy1hbHBoYSc7XG5pbXBvcnQgKiBhcyBpYW0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWlhbSc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmNvbnN0IHN0YWNrID0gbmV3IFN0YWNrKGFwcCwgJ29pZGMtcHJvdmlkZXItaW50ZWctdGVzdCcpO1xuXG5jb25zdCBub0NsaWVudHMgPSBuZXcgaWFtLk9wZW5JZENvbm5lY3RQcm92aWRlcihzdGFjaywgJ05vQ2xpZW50c05vVGh1bWJwcmludCcsIHtcbiAgdXJsOiAnaHR0cHM6Ly9vaWRjLmVrcy51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9pZC90ZXN0MicsXG59KTtcblxuY29uc3QgY2xpZW50cyA9IG5ldyBpYW0uT3BlbklkQ29ubmVjdFByb3ZpZGVyKHN0YWNrLCAnQ2xpZW50cycsIHtcbiAgdXJsOiAnaHR0cHM6Ly9vaWRjLmVrcy51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9pZC90ZXN0MycsXG4gIGNsaWVudElkczogWydmb28nLCAnYmFyJ10sXG59KTtcblxuY29uc3QgdGh1bWJwcmludHMgPSBuZXcgaWFtLk9wZW5JZENvbm5lY3RQcm92aWRlcihzdGFjaywgJ1RodW1icHJpbnRzJywge1xuICB1cmw6ICdodHRwczovL29pZGMuZWtzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2lkL3Rlc3Q0JyxcbiAgdGh1bWJwcmludHM6IFtcbiAgICAnYWEwMGFhMTEyMmFhMDBhYTExMjJhYTAwYWExMTIyYWEwMGFhMTEyMicsXG4gICAgJ2FhMDBhYTExMjJhYTAwYWExMTIyYWEwMGFhMTEyMmFhMDBhYTExMTEnLFxuICBdLFxufSk7XG5cbm5ldyBDZm5PdXRwdXQoc3RhY2ssICdOb0NsaWVudHNUaHVtYnByaW50cycsIHtcbiAgdmFsdWU6IGAke25vQ2xpZW50cy5vcGVuSWRDb25uZWN0UHJvdmlkZXJ0aHVtYnByaW50c31gLFxufSk7XG5cbm5ldyBDZm5PdXRwdXQoc3RhY2ssICdDbGllbnRzVGh1bWJwcmludHMnLCB7XG4gIHZhbHVlOiBgJHtjbGllbnRzLm9wZW5JZENvbm5lY3RQcm92aWRlcnRodW1icHJpbnRzfWAsXG59KTtcblxubmV3IENmbk91dHB1dChzdGFjaywgJ1RodW1icHJpbnRzVGh1bWJwcmludHMnLCB7XG4gIHZhbHVlOiBgJHt0aHVtYnByaW50cy5vcGVuSWRDb25uZWN0UHJvdmlkZXJ0aHVtYnByaW50c31gLFxufSk7XG5cbm5ldyBJbnRlZ1Rlc3QoYXBwLCAnaW9kYy1wcm92aWRlci10ZXN0Jywge1xuICB0ZXN0Q2FzZXM6IFtzdGFja10sXG59KTtcblxuYXBwLnN5bnRoKCk7XG4iXX0=