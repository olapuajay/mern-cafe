import jwt from 'jsonwebtoken'
const SECRET = "sometxt"

const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (error) {
    res.json({ message: "access denied" })
  }
}

const authorize = (role) => {
  return (req, res, next) => {
    if(req.role === role) {
      next();
    } else {
      return res.json({ message: "Unauthorizes Access" });
    }
  };
};

export { authenticate, authorize }