//Define as rotas
let router = require('express').Router();

let questionController = require('../controllers/questionController');
let clientController = require('../controllers/clientController');

router.route('/questions').get(questionController.list);
router.route('/questions/:id').get(questionController.byId);
router.route('/questions/:search').get(questionController.search);
router.route('/questions/adicionar').post(questionController.new);
router.route('/questions/:id').delete(questionController.delete);

router.route('/clients').get(clientController.list);
router.route('/clients/:id').get(clientController.byId);
router.route('/clients/:search').get(clientController.search);
router.route('/clients/adicionar').post(clientController.new);
router.route('/clients/:id').delete(clientController.delete);

module.exports = router;