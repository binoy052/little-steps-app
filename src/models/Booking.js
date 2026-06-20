import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  centerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Center', required: true },
  type: { type: String, enum: ['hourly', 'daily', 'monthly'], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'rejected', 'cancelled'], default: 'pending' },
  childAge: { type: String },
  specialInstructions: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
