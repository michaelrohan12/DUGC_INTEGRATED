import express from "express"
const router = express.Router()

// import controllers
import {createCourse, findCourse, deleteCourse} from "../controllers/courseController.js"

router.route("/").post(createCourse)
router.route("/").get(findCourse)
router.route("/delete").delete(deleteCourse)

export default router;
