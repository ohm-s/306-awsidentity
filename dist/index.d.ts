export interface AwsIdentityDocument {
    accountId: string;
    architecture: string;
    availabilityZone: string;
    billingProducts?: any;
    devpayProductCodes?: any;
    marketplaceProductCodes?: any;
    imageId: string;
    instanceId: string;
    instanceType: string;
    kernelId?: any;
    pendingTime: Date;
    privateIp: string;
    ramdiskId?: any;
    region: string;
    version: string;
}
export declare function identity(): Promise<AwsIdentityDocument | undefined>;
export declare function mockIdentity(data: Partial<AwsIdentityDocument>): Promise<AwsIdentityDocument>;
