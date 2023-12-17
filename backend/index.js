const express = require('express')
const router = express.Router();
var cors = require('cors')
const userController = require('./controllers/userController')
const app = express()
const mongoose = require('mongoose');

const User = require("./schema/model")
app.use(cors())
router.use(express.json());
app.use('/', router);



mongoose.connect('mongodb://127.0.0.1:27017/heliverse')
  .then(() => console.log('Connected!'));






router.get('/api/users',userController.getAllUsers);
router.get('/api/username',userController.getuser);
router.get('/api/team',userController.getTeam);
router.post('/api/users', userController.createUser);
router.get('/api/users/:id', userController.getUserById);
router.put('/api/users/:id', userController.updateUserById);
router.delete('/api/users/:id', userController.deleteUserById);
router.post('/api/team/new', userController.createTeam);

module.exports = router;


app.get('/', async function (req, res) {
   try {
    const data = await User.find();
    res.json(data);
   } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(8080)