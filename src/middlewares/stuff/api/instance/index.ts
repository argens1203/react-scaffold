import { IS_MOCK_API, IS_TEST } from '../../../../config';

import { instance as realInstance } from './instance';
import { mockInstance } from './mock';

const instance = IS_TEST || IS_MOCK_API ? mockInstance : realInstance;
export { instance };
