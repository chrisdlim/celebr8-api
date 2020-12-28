import { Document } from 'mongoose';
import { Celebration } from '../../celebrations/schemas/celebrations.schema';

export interface CelebrationPost extends Document {
  author: string;
  message: string;
  celebration: Celebration;
}