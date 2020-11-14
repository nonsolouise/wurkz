let _id = 1;

export function uniqueId() {
  return _id++;
}

const actions ={
  editTask: 'EDIT_TASK',
  createTask: 'CREATE_TASK'
}

export function createTask( title, description ) {
  return {
    type: actions.createTask,
    payload: {
      id: uniqueId(),
      title,
      description,
      status: "unstarted",
    },
  };
}

export function editTask( id, status ) {
  return {
    type: actions.editTask,
    payload: {
      id,
      status
    }
  }
}
