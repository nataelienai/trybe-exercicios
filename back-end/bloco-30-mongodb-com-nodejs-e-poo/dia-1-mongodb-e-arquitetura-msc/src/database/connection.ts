import mongoose from 'mongoose';

export const connection = mongoose.connect('mongodb://localhost:27017/world_cups');
