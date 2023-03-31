"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const ec2 = require("aws-cdk-lib/aws-ec2");
const app = new aws_cdk_lib_1.App();
class TestStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const vpc = new ec2.Vpc(this, 'Vpc');
        // Test can filter by Subnet Ids via selectSubnets
        const subnets = vpc.selectSubnets({
            subnetFilters: [ec2.SubnetFilter.byIds([vpc.privateSubnets[0].subnetId])],
        });
        new aws_cdk_lib_1.CfnOutput(this, 'PrivateSubnet01', {
            value: subnets.subnetIds[0],
        });
    }
}
new integ_tests_alpha_1.IntegTest(app, 'VPCFilterSubnets', {
    testCases: [new TestStack(app, 'VPCFilterSubnetsTestStack')],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcudnBjLWZpbHRlci1zdWJuZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWcudnBjLWZpbHRlci1zdWJuZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWdFO0FBQ2hFLGtFQUF1RDtBQUN2RCwyQ0FBMkM7QUFFM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxpQkFBRyxFQUFFLENBQUM7QUFFdEIsTUFBTSxTQUFVLFNBQVEsbUJBQUs7SUFDM0IsWUFBWSxLQUFVLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQ3BELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFckMsa0RBQWtEO1FBQ2xELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7WUFDaEMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDMUUsQ0FBQyxDQUFDO1FBRUgsSUFBSSx1QkFBUyxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUNyQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBRUQsSUFBSSw2QkFBUyxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsRUFBRTtJQUNyQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztDQUM3RCxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAsIFN0YWNrLCBTdGFja1Byb3BzLCBDZm5PdXRwdXQgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBJbnRlZ1Rlc3QgfSBmcm9tICdAYXdzLWNkay9pbnRlZy10ZXN0cy1hbHBoYSc7XG5pbXBvcnQgKiBhcyBlYzIgZnJvbSAnYXdzLWNkay1saWIvYXdzLWVjMic7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxuY2xhc3MgVGVzdFN0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IHZwYyA9IG5ldyBlYzIuVnBjKHRoaXMsICdWcGMnKTtcblxuICAgIC8vIFRlc3QgY2FuIGZpbHRlciBieSBTdWJuZXQgSWRzIHZpYSBzZWxlY3RTdWJuZXRzXG4gICAgY29uc3Qgc3VibmV0cyA9IHZwYy5zZWxlY3RTdWJuZXRzKHtcbiAgICAgIHN1Ym5ldEZpbHRlcnM6IFtlYzIuU3VibmV0RmlsdGVyLmJ5SWRzKFt2cGMucHJpdmF0ZVN1Ym5ldHNbMF0uc3VibmV0SWRdKV0sXG4gICAgfSk7XG5cbiAgICBuZXcgQ2ZuT3V0cHV0KHRoaXMsICdQcml2YXRlU3VibmV0MDEnLCB7XG4gICAgICB2YWx1ZTogc3VibmV0cy5zdWJuZXRJZHNbMF0sXG4gICAgfSk7XG4gIH1cbn1cblxubmV3IEludGVnVGVzdChhcHAsICdWUENGaWx0ZXJTdWJuZXRzJywge1xuICB0ZXN0Q2FzZXM6IFtuZXcgVGVzdFN0YWNrKGFwcCwgJ1ZQQ0ZpbHRlclN1Ym5ldHNUZXN0U3RhY2snKV0sXG59KTtcblxuYXBwLnN5bnRoKCk7XG4iXX0=