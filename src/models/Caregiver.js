import mongoose from 'mongoose';

const CaregiverSchema = new mongoose.Schema({
  centerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Center', required: true },
  name: { type: String, required: true },
  bio: { type: String },
  experienceYears: { type: Number },
  certifications: [{ type: String }],
  isVerified: { type: Boolean, default: false },
  photo: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Caregiver || mongoose.model('Caregiver', CaregiverSchema);
