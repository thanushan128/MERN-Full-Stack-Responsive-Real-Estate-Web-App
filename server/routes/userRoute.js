import express from 'express';
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavorites, toFavourite } from '../controllers/userController.js';
const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/cancelBooking/:id", cancelBooking);
router.post("/toFavourite/:rid", toFavourite);
router.post("/allFavourite/", getAllFavorites);

export { router as userRoute };