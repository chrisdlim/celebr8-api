import { Connection } from 'mongoose';
import { Celebration, CelebrationSchema } from '../../celebrations/schemas/celebrations.schema';
import { Cat, CatSchema } from '../../../test/cats/schemas/cat.schema';
import { mongooseProviderNames } from './mongoose.providers';
import { CelebrationPost, CelebrationPostSchema } from '../../celebration-posts/schemas/celebration-post.schema';

export const modelProviders = [
  // TEST MODELS
  {
    provide: Cat.name,
    useFactory: (connection: Connection) => connection.model('cats', CatSchema),
    inject: [mongooseProviderNames.CAT_CONNECTION],
  },
  // CELEBR8 MODELS
  {
    provide: Celebration.name,
    useFactory: (connection: Connection) => connection.model('celebrations', CelebrationSchema),
    inject: [mongooseProviderNames.CELEBR8_CONNECTION],
  },
  {
    provide: CelebrationPost.name,
    useFactory: (connection: Connection) => connection.model('posts', CelebrationPostSchema),
    inject: [mongooseProviderNames.CELEBR8_CONNECTION],
  },
];

/**
 * Notes:
 * provide a MODEL
 * create a connection for model
 * inject the <MODEL>_CONNECTION from mongoose providers
 */