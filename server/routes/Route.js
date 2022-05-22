import express from "express";
import { getEmployees, getEmployeeById, saveEmployee, updateEmployee, deleteEmployee } from "../controllers/Controller.js";

const router = express.Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeeById);
router.post('/employees', saveEmployee);
router.patch('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

export default router;