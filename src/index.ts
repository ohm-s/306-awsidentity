import BoltLogger from '306-boltlogger';

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

export function identity(): Promise<AwsIdentityDocument | undefined> {
  return new Promise(async (resolve, reject) => {
    try {
      const req = await fetch('http://169.254.169.254/latest/dynamic/instance-identity/document');
      const rawBody = await req.text();
      const response = JSON.parse(rawBody);
      resolve(response);
    } catch (err) {
      BoltLogger.createLogger().extend('awsidentity').rawerror(err);
      resolve(undefined);
    }
  });
}

export function mockIdentity(data: Partial<AwsIdentityDocument>): Promise<AwsIdentityDocument> {
  return new Promise((resolve) => {
    resolve(data as any);
  });
}
