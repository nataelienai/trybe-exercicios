import mongoose from 'mongoose';

export function createConnection(uri = 'mongodb://localhost:27017/world_cups') {
  return mongoose.connect(uri);
}
