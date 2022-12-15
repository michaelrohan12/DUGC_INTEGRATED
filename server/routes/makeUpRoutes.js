import express from "express"
const router = express.Router()

// import controllers
import {createApplication,findApplication, getApprove} from "../controllers/makeupController.js";
import makeUpMinor from "../models/MakeUpMinor.js";


router.route("/").post(createApplication)
router.route("/").get(findApplication)
router.route("/apprMakeUp/").get(getApprove)

// router.route("/semDisplay").get(semDisplay)




router.route('/:id').get((req, res) => {
    makeUpMinor.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err))
})
router.route('/approveMakeup/:id').post((req, res) => {
    makeUpMinor.findByIdAndUpdate(req.params.id)
        .then(user => {
            const sub = req.body.cou
            for (var course of user.courses) {
                if (course.course == sub) { course.approval = true }
            }
            user.save()
                .then(() => res.json('student updated'))
                .catch(err => res.status(400).json('Error:' + err))
        })
        .catch(err => res.status(400).json('Error:' + err))
})
router.route('/rejectMakeup/:id').post((req, res) => {
    makeUpMinor.findByIdAndUpdate(req.params.id)
        .then(user => {
            const sub = req.body.cou
            for (var course of user.courses) {
                if (course.course == sub) { course.Reject = true }
            }
            user.save()
                .then(() => res.json('student updated'))
                .catch(err => res.status(400).json('Error:' + err))
        })
        .catch(err => res.status(400).json('Error:' + err))
})
export default router;