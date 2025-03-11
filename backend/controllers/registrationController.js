import Registration from '../models/registrationModel.js';

const submitRegistration = async (req, res) => {
  try {
    const formData = req.body;
    const registration = new Registration(formData);
    await registration.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting form' });
  }
};

const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({});
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching registrations' });
  }
};

export  {
  submitRegistration,
  getRegistrations,
};