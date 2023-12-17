// userController.js
const User = require('../schema/model'); 



const getAllUsers = async (req, res) => {
  console.log('querrystr=',req.query)
  const { page = 1, limit = 20, pagecount = false, ...queryParams } = req.query;
  const filters = {};
  Object.keys(queryParams).forEach((param) => {
    if (queryParams[param]) {
      const values = queryParams[param].split(',');
      filters[param] = values.length > 1 ? values : values[0];
    }
  });
  console.log('redFilters:', filters);
  try {
    if(pagecount) {
        const users = await User.find(filters);
        return (
        res.json(users.length))
      }
    const users = await User.find(filters)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    console.log('Request Page:', page);
    console.log('Filters:', filters);
    console.log('Number of Users Sent:', users.length);
    console.log();
    console.log();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const getuser = async (req, res) => {
  const { name } = req.query;

  if (!name || name.trim() === "") {
  }

  try {
    const users = await User.find({ first_name: { $regex: new RegExp(name, 'i') } }).limit(20);

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getTeam = async (req, res) => {
  try {
      const teamId = req.params.id;

      // Retrieve the team details from the database
      const team = await Team.findById(teamId).populate('members');

      if (!team) {
          return res.status(404).json({ message: 'Team not found' });
      }

      res.json(team);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

const createTeam = async (req, res) => {
  try {
      const { selectedUserIds } = req.body;

      // Validate selectedUserIds to ensure they have unique domains and availability
      // Implement your validation logic here

      // Create a new team
      const team = new Team({
          members: selectedUserIds
      });

      // Save the team to the database
      const savedTeam = await team.save();

      res.json(savedTeam);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}


// Get all users count
const getUserscount = async (req, res) => {
  try {
    const users = await User.find().distinct("domain")
    console.log(users)
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const { body } = req;
  try {
    console.log("create user req received",body)
    const newUser = await User.create(body);
    console.log("new user crates",newUser)
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing user by ID
const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log('update request received', req.body)
  try {
    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a user by ID
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  getUserscount,
  getuser,
  createTeam,
  getTeam
};
