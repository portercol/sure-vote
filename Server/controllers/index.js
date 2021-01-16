const path = require('path');
const router = require('express').Router();
const userRoutes = require('./user.routes');
const electionRoutes = require('./elections.routes');
const mailerRoutes = require('./mailer.route');

router.use('/api/signin', userRoutes);
router.use('/signup', userRoutes);
router.use('/api/login', userRoutes);
router.use('/api/profile', userRoutes);
router.use('/api/elections', electionRoutes);
router.use('/api/candidate', electionRoutes);
router.use('/mailer', mailerRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;
