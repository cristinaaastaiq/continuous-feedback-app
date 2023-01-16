import express from "express";
import * as userController from "../Controllers/userController.js";
import {sequelize} from "../sequelize.js";

const router = express.Router();

router.get("/users", userController.getAllUsersFromDB);

router.get("/activities", userController.getAllActivitiesFromDB);
router.get("/activitiesForProfessor", userController.getActivitiesForProfessorFromDB);
router.post("/enrollStudent",userController.enrollStudent )
router.get("/activitiesForStudent", userController.activitiesForStudent)
router.post("/newActivity", userController.insertActivitiesIntoDB);
router.get("/filterActivities", userController.filterActivityFromDB);
router.post("/giveFeedback", userController.giveFeedback)
router.get("/filterFeedbacks", userController.filterFeedbackFromDB);
router.get("/feedbackActivityStudent", userController.getFeedbackForStudentActivity);
router.delete("/deleteActivity",userController.deleteActivity )

router.put("/createDatabase", async (request, response) => {
    try {
        await sequelize.sync(); // force:true will drop the tables first
        // call this endpoint to create the tables first => PUT http://localhost:6001/api/createDatabase
        response.sendStatus(204); // 204-No Content Status Code
    } catch (error) {
        response.sendStatus(504) // use the next optional parameter
        // to pass control to the next middleware function if defined (it is, in app.js)
    }
});


export { router as userRoutes };