export const protectRoute = (req, res, next) => {
  if (!req.auth().isAuthenticated) {
    return res
      .status(401)
      .json({ message: "Unauthorized access - you must be logged in" });
  }
  next();
};
