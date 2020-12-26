import { Connection } from 'mongoose';
import { Cat, CatSchema } from 'src/test/cats/schemas/cat.schema';
import { Celebration, CelebrationSchema } from 'src/test/celebrations/schemas/celebrations.schema';
import { mongooseProviderNames } from './mongoose.providers';

export const modelProviders = [
  {
    provide: Cat.name,
    useFactory: (connection: Connection) => connection.model('cats', CatSchema),
    inject: [mongooseProviderNames.CAT_CONNECTION],
  },
  {
    provide: Celebration.name,
    useFactory: (connection: Connection) => connection.model('celebrations', CelebrationSchema),
    inject: [mongooseProviderNames.CELEBRATIONS_CONNECTION],
  },
];

/**
 * Notes:
 * provide a MODEL
 * create a connection for model
 * inject the <MODEL>_CONNECTION from mongoose providers
 */