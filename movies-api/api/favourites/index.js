import express from 'express';
import Favourites from './favouriteModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const favourites = await Favourites.find();
    res.status(200).json(favourites);
});

router.get('/user/:id', async (req, res) => {
  const name = req.params.id;
  console.log(req.params.id);
  const favourites = await Favourites.findByUserId(name);
  res.status(200).json(favourites);
});

// create new favourites for user
router.post('/user/:id', asyncHandler(async (req, res) => {
    try {
        await createFavourite(req, res);
    } catch (error) {
        // Log the error and return a generic error message
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

// Update a user
router.put('/user/:id', async (req, res) => {
    console.log(req.body);
    if (req.body.username) delete req.body.username;
    const result = await Favourites.updateOne({
        username: req.params.id
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});

async function createFavourite(req, res) {
    // Add input validation logic here
    await Favourites.create(req.body);
    res.status(201).json({ success: true, msg: 'User favourites successfully created.' });
}

// async function authenticateUser(req, res) {
//     const user = await User.findByUserName(req.body.username);
//     if (!user) {
//         return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
//     }

//     const isMatch = await user.comparePassword(req.body.password);
//     if (isMatch) {
//         const token = jwt.sign({ username: user.username }, process.env.SECRET);
//         res.status(200).json({ success: true, token: 'BEARER ' + token });
//     } else {
//         res.status(401).json({ success: false, msg: 'Wrong password.' });
//     }
// }



export default router;
