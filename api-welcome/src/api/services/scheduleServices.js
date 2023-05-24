const modelSchedule = require('../model/scheduleModel');

const allTasks = async () => {
  const response = await modelSchedule.allTasks();
  return response;
};

const insert = async (titulo, concluida) => {
  const list = await allTasks();
  if (list === null) {
    return null;
  }
  const newId = list.length + 1;
  const newTask = { id: newId, titulo, concluida };
  const newList = list.push(newTask);

  const response = await modelSchedule.insert(newList);
  return response;
};

const update = async (id, titulo, concluida) => {
  const list = await allTasks();
  if (!list) {
    return null;
  }
  const indexArrUpdate = list.findIndex((task) => task.id === id);
  list[indexArrUpdate] = { id, titulo, concluida };

  const response = await modelSchedule.update(list);
  return response;
};

const deleteById = async (id) => {
  const list = await allTasks();
  if (list === null) {
    return null;
  }
  const indexArrUpdate = list.findIndex((task) => task.id === id);
  const newList = list.splice(indexArrUpdate, 1);
  const response = await modelSchedule.deleteById(newList);
  if (response === null) {
    return null;
  }
  return response;
};

module.exports = {
  allTasks,
  insert,
  update,
  deleteById,
};
