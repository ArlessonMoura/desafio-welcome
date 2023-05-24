const fsAsync = require('fs').promises;

const schedule = 'src/api/model/schedule.json';

const allTasks = async () => {
  const scheduleArr = JSON.parse(await fsAsync.readFile(schedule, 'utf8'));
  return scheduleArr;
};

const insert = async (newList) => {
  try {
    fsAsync.writeFile(schedule, JSON.stringify(newList));
    const response = await allTasks();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const update = async (newList) => {
  try {
    fsAsync.writeFile(schedule, JSON.stringify(newList));
    const response = await allTasks();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteById = async (newList) => {
  try {
    fsAsync.writeFile(schedule, JSON.stringify(newList));
    const response = await allTasks();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  allTasks,
  insert,
  update,
  deleteById,
};
