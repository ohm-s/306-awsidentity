import { mockIdentity } from '../src/index';
import { assert } from 'console';

describe('aws identity tests', () => {
  it('mock validation', () => {
    return new Promise(async (resolve, reject) => {
      let data = await mockIdentity({ region: 'eu-west-1' });
      assert(data.region == 'eu-west-1');
      resolve();
    });
  });
});
