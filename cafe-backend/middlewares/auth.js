import jwt from 'jsonwebtoken'
const SECRET = "sometxt"

const authenticate = (req, res, next) => {
  // res.json({message: "access denied"});
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (err) {
    return res.json({ message: "access denied" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (req.role === role) {
      next();
    } else {
      return res.json({ message: "Unauthorized Access" });
    }
  };
};

export { authenticate, authorize }