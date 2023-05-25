const router = require('express').Router();
const controllerSchedule = require('../controllers/scheduleController');
// const validates = require('../middleware');

// const {} = validates;
const { insert, allTasks, deleteById, update } = controllerSchedule;

router.get('/', (_request, response) => {
  response.status(200).json({ path: '/' });
  console.log('Cê é o bichão mêmo, hein doido.');
});
router.get('/', allTasks);
router.post('/', insert);
router.patch('/:id', update);
router.delete('/:id', deleteById);

module.exports = router;
