/**
 * Created by yyj on 19/12/2016.
 */

import mongoose, { Schema } from 'mongoose';

export default mongoose.model('User', new Schema({
  id: Number,
  username: String,
  email: String,
  password: String,
  admin: Boolean,
}));
