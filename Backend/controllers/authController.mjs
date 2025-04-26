import Employee from '../models/employeeModel.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Signup
export const registerEmployee = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(400).json({ message: 'Employee already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newEmployee = await Employee.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'Employee registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login
export const loginEmployee = async (req, res) => {
    const { email, password } = req.body;
    try {
        const employee = await Employee.findOne({ email });
        if (!employee) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, employee.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        res.status(200).json({ token, employee: { id: employee._id, name: employee.name } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
