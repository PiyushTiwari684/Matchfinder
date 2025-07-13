const users = require("../models/user.model.js");

// create the user

const addUser = (req, res) => {
  const { name, age, interests } = req.body;

  // if ([name, age, interests].some(field => field.trim() === "")) {
  //     return res.status(400).json({
  //         message: "Invalid credentials"
  //     });
  // } // we cannot use this because it give error in case of age

  if (!name?.trim() || !Array.isArray(interests) || !age) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const exists = users.find(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );
  if (exists) {
    return res.status(409).json({
      message: "Username already exists",
    });
  }

  users.push({ name, age, interests });
  res.status(201).json({ message: "User added successfully" });
};

// find Matches

const findMatch = (req, res) => {
  const { userName } = req.params;
  const currentUser = users.find(
    (user) => user.name.toLowerCase() === userName.toLowerCase()
  );

  if (!currentUser) {
    return res.status(404).json({
      message: "NO User found",
    });
  }

  const matchedUsers = users.filter((user) => {
    // to avoid the self comparision
    if (user.name.toLowerCase() === userName.toLowerCase()) return false;

    const sameInterests = user.interests.filter((interest) =>
      currentUser.interests.includes(interest)
    );

    return sameInterests.length >= 2;
  });

  res.json(matchedUsers);
};

module.exports = { addUser, findMatch };
