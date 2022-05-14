//Define as rotas
let router = require('express').Router();

let questionController = require('../controllers/questionController');

router.route('/questions')
    .get(questionController.index);
    
router.route('/questions/adicionar')
    .post(questionController.new);

router.route('/questions/id/:question_id')
    .get(questionController.view);

router.route('/questions/id/deletar/:question_id')
    .delete(questionController.delete);

router.route('/questions/title/:enunciado')
    .get(questionController.v);

module.exports = router;