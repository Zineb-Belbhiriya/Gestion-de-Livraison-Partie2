const express = require("express");
const router = express.Router();
const { isAuthenticated, authorizedRoles } = require("../middleware/auth");

const {
  register,
  login,
  logout,
  addNewManager,
  addNewConductor,
  addNewResponsableDuLivraison,
} = require("../controller/user-controller");
const { createNewTruck } = require("../controller/truck-controller");

const { createNewLivraison } = require("../controller/livraison-controller");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router
  .route("/admin/new-manager")
  .post(isAuthenticated, authorizedRoles("admin"), addNewManager);
router
  .route("/admin/new-responsable")
  .post(
    isAuthenticated,
    authorizedRoles("manager"),
    addNewResponsableDuLivraison
  );
router
  .route("/admin/new-truck")
  .post(isAuthenticated, authorizedRoles("admin"), createNewTruck);
router
  .route("/admin/new-conductor/:id")
  .post(isAuthenticated, authorizedRoles("admin"), addNewConductor);
router.route("/admin/new-livraison").post(
  // isAuthenticated, authorizedRoles("delivery"),
  createNewLivraison
);

module.exports = router;
