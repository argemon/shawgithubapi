const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/SearchingProfile/GitHub/:name', controller.searchProfileGitHub);

module.exports = router;