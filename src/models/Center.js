import mongoose from 'mongoose';

const CenterSchema = new mongoose.Schema({
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
  },
  is24x7: { type: Boolean, default: false },
  operatingHours: {
    open: { type: String },
    close: { type: String }
  },
  ageGroups: [{ type: String, enum: ['infant', 'toddler', 'preschool'] }],
  capacity: { type: Number, required: true },
  pricingPlans: {
    hourly: { type: Number },
    daily: { type: Number },
    monthly: { type: Number }
  },
  certifications: [{ type: String }],
  photos: [{ type: String }],
  description: { type: String },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Center || mongoose.model('Center', CenterSchema);
