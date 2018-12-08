import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  cuid: { type: String, required: true },
  slug: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now, required: true },
});

export default mongoose.model('Store', storeSchema);
