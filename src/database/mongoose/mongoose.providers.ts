import * as mongoose from 'mongoose';
import { C8_MONGO_DB, C8_MONGO_USER, C8_MONGO_USER_PW } from './celebr8.constants';

export const mongooseProviderNames = {
  CELEBR8_CONNECTION: 'CELEBR8_CONNECTION',
  CAT_CONNECTION: 'CAT_CONNECTION',
}

export const mongooseProviders = [
  {
    provide: mongooseProviderNames.CELEBR8_CONNECTION,
    useFactory: (): Promise<any> =>
    mongoose.createConnection(`mongodb://${C8_MONGO_USER}:${C8_MONGO_USER_PW}@localhost/${C8_MONGO_DB}`),
  },
  {
    provide: mongooseProviderNames.CAT_CONNECTION,
    useFactory: (): Promise<any> =>
    mongoose.createConnection(`mongodb://${C8_MONGO_USER}:${C8_MONGO_USER_PW}@localhost/cats`),
  },
];

/**
 * Notes:
 * provide the <MODEL>_CONNECTION
 * create connection to db
 */