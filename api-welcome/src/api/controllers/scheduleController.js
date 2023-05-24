const serviceSchedule = require('../services/scheduleServices');

const allTasks = async (_req, res) => {
  const response = await serviceSchedule.allTasks();
  if (response.length === 0) {
    return res.status(200).json({ path: '/' });
  }
  if (response === null) {
    return res.status(400).json({
      message: 'Não localizamos sua agenda de tarefas, atualize a pagina.',
    });
  }

  return res.status(200).json(response);
};

const insert = async (req, res) => {
  const { titulo, concluida } = req.body;
  const response = await serviceSchedule.insert(titulo, concluida);
  if (!response) {
    return res
      .status(500)
      .json({ message: 'Tarefa não criada, tente novamente.' });
  }
  return res.status(201).json(response);
};

const update = async (req, res) => {
  const { titulo, concluida } = req.body;
  const { id } = req.params;
  const response = await serviceSchedule.update(id, titulo, concluida);
  if (!response) {
    return res
      .status(400)
      .json({ message: 'Tarefa não atualizada, tente novamente.' });
  }

  return res.status(200).json(response);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const response = await serviceSchedule.deleteById(id);
  if (response === null) {
    return res
      .status(400)
      .json({ message: 'Ação não realizada, tente novamente.' });
  }
  if (response.length === 0) {
    return res.status(200).json({ path: '/' });
  }
  return res.status(204).json(response);
};

module.exports = {
  allTasks,
  insert,
  update,
  deleteById,
};
