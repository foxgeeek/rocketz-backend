//Define as rotas
let router = require('express').Router();
let jwt = require('jsonwebtoken');
let authorize = require('../middleware/auth');

let questionController = require('../controllers/questionController');
let clientController = require('../controllers/clientController');
const { JWT_SECRET } = require('../config/env');

router.route('/token').get((req, res) => {
  const payload = {
    name: 'Test',
    scopes: [
      'questions:create',
      'questions:read',
      'questions:update',
      'questions:delete'
    ]
  }
  const token = jwt.sign(payload, JWT_SECRET);
  res.send(token);
});

router.route('/questions').get(authorize('questions:read'), questionController.list);
router.route('/questions/:id').get(questionController.byId);
router.route('/questions/:search').get(questionController.search);
router.route('/questions/new').post(questionController.new);
router.route('/questions/:id').delete(questionController.delete);

router.route('/clients').get(clientController.list);
router.route('/clients/:id').get(clientController.byId);
router.route('/clients/:search').get(clientController.search);
router.route('/clients/new').post(clientController.new);
router.route('/clients/:id').delete(clientController.delete);

module.exports = router;