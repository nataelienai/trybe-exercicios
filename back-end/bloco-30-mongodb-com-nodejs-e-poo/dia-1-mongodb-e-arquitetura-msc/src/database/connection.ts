import mongoose from 'mongoose';

const connection = mongoose.connect('mongodb://localhost:27017/world_cups');

export default connection;
