import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrderController,
  getAllOrderController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSingIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// Register || Method Post
router.post("/register", registerController);

// Login || Post
router.post("/login", loginController);

// Forgot Password || Post
router.post("/forgot-password", forgotPasswordController);

// test routes
router.get("/test", requireSingIn, isAdmin, testController);

// protected route auth
router.get("/user-auth", requireSingIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected User route auth
router.get("/user-auth", requireSingIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected Admin route auth
router.get("/admin-auth", requireSingIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile", requireSingIn, updateProfileController);

// orders
router.get("/orders", requireSingIn, getOrderController);

// all orders
router.get("/all-orders", requireSingIn, getAllOrderController);

// order status update
router.put("/order-status/:orderId", requireSingIn,isAdmin,orderStatusController)
export default router;
