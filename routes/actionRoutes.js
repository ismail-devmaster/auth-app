const express = require("express");
const router = express.Router();
const actionController = require("../controllers/actionController");
const {
  authenticatePatient,
  authenticateDoctor,
  authenticateReceptionist,
} = require("../middlewares/authMiddleware");

// POST /actions
router.post("/", authenticatePatient, actionController.createAction);
router.post("/", authenticateDoctor, actionController.createAction);

// GET /actions
router.get("/", authenticatePatient, actionController.getAllActions);
router.get("/", authenticateDoctor, actionController.getAllActions);
router.get("/", authenticateReceptionist, actionController.getAllActions);

// GET /actions/:id
router.get("/:id", authenticatePatient, actionController.getActionById);
router.get("/:id", authenticateDoctor, actionController.getActionById);
router.get("/:id", authenticateReceptionist, actionController.getActionById);

// GET /actions/patient/:patientId
router.get(
  "/patient/:patientId",
  authenticatePatient,
  actionController.getActionsByPatientId
);
router.get(
  "/patient/:patientId",
  authenticateDoctor,
  actionController.getActionsByPatientId
);
router.get(
  "/patient/:patientId",
  authenticateReceptionist,
  actionController.getActionsByPatientId
);

// PUT /actions/:id
router.put("/:id", authenticatePatient, actionController.updateAction);
router.put("/:id", authenticateDoctor, actionController.updateAction);

// DELETE /actions/:id
router.delete("/:id", authenticatePatient, actionController.deleteAction);
router.delete("/:id", authenticateDoctor, actionController.deleteAction);

module.exports = router;
