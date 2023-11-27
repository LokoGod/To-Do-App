import express from "express";
import taskController from "../controllers/taskController";

const taskRouter = express.Router();

taskRouter.get("/", taskController.getTask).post(taskController.createTask);

export default taskRouter;
