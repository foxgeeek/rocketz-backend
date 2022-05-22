//Define as rotas
let router = require('express').Router();

let questionController = require('../controllers/questionController');

router.route('/questions').get(questionController.list);
    
router.route('/questions/:id').get(questionController.byId);

router.route('/questions/:search').get(questionController.search);

router.route('/questions/adicionar').post(questionController.new);

router.route('/questions/:id').delete(questionController.delete);

module.exports = router;