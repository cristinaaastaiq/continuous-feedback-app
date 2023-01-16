import { User } from "../models/user.js";
import { Activity } from "../models/activity.js";
import { Feedback } from "../models/feedback.js";
import { Enrollment } from "../models/enrollment.js"
import { Op } from "sequelize";

// get all users
const getAllUsersFromDB = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all activities
const getAllActivitiesFromDB = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    return res.status(200).json(activities);
  } catch (err) {
    res.status(500).json(err);
  }
};


const getActivitiesForProfessorFromDB = async (req, res) => {
  try {
    const professorID = req.query.professorID;
    const activities = await Activity.findAll({
      where: {professor_id: professorID}
    });
    return res.status(200).json(activities);
  } catch (err) {
    res.status(500).json(err);
  }
};

// insert a new activity
const insertActivitiesIntoDB = async (req, res) => {
  try {
    const newActivity = await Activity.create(req.body);
    res.status(200).json(newActivity);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const filterActivityFromDB = async (req, res) => {
  try {
    const professorID = req.query.professorID; //
    const activities = await Activity.findAll({
      where: professorID ? { year: { [Op.gt]: professorID } } : undefined,
    });
    return res.status(200).json(activities);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get filtered feedbacks
const filterFeedbackFromDB = async (req, res) => {
  try {
    const activityID = req.query.activityID; 
    const feedbacks = await Feedback.findAll({
      where: {activity_id : activityID} 
    });
    return res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json(err);
  }
};

//enroll Student to activity
const enrollStudent = async(req, res) => {
  try {
    console.log(req.body)
  const enrollment = await Enrollment.create(req.body);
  return res.status(200).json(enrollment)
  } catch (err) {
    res.status(500).json(err)
  }

}

const activitiesForStudent = async (req, res) => {
  try {
    const studentID = req.query.studentID
    const enrollment = await Enrollment.findAll(
        {where: {student_id: studentID}}
    )
    const activityIDs = enrollment.map((el) => el.activity_id)

    const activities = await Activity.findAll(
        {where: {id: activityIDs}}
    )

    return res.status(200).json(activities)
  } catch (err) {
    res.status(500).json(err)
  }
}

const giveFeedback = async (req, res) => {
  try{
    console.log(req.body)
    const feedback = await Feedback.create(req.body)
    return res(200).json(feedback)
  } catch (err) {
    res.status(500).json(err)
  }
}
const getFeedbackForStudentActivity = async (req, res) => {
  try {
    const student_id = +req.query.studentID
    const activity_id = +req.query.activityID
    const feedback = Feedback.findAll()

    res.status(200).json(feedback)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteActivity = async (req, res) => {
  try {
    const row = await Activity.findOne({
      where: { id: req.query.activityID },
    });

    if (row) {
      await row.destroy();
    }
    res.status(200).json({"message": "deleted"})
  } catch (err) {
    res.status(500).json(err)
  }
}

export { getAllUsersFromDB, getAllActivitiesFromDB, insertActivitiesIntoDB, filterActivityFromDB, filterFeedbackFromDB, getActivitiesForProfessorFromDB, enrollStudent, activitiesForStudent, giveFeedback, getFeedbackForStudentActivity, deleteActivity };