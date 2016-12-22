/**
 * Created by yyj on 19/12/2016.
 */
import mongoose, { Schema } from 'mongoose';

export default mongoose.model('Recipe', new Schema({
  id: String,
  name: String,
  description: String,
  imagePath: String,
  steps: Array,
  updatedAt: Date,
}));
