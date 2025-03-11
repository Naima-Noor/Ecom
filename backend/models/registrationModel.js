import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  description: { type: String },
});

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;