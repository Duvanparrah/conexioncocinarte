const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config.js");

const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) return reject(err);
        resolve(token);
      }
    );
  });
};

module.exports = { createAccessToken };
