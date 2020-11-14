import { uniqueId } from "../actions/index";

const mockTasks = [
  {
    id: uniqueId(),
    title: "learn redux",
    description: "the store, action, reducers...oh my!",
    status: "in progress",
  },
  {
    id: uniqueId(),
    title: "peace on earth",
    description: "no big deal",
    status: "finished",
  },
  {
    id: uniqueId(),
    title: "practice",
    description: "something something",
    status: "unstarted",
  },
  {
    id: uniqueId(),
    title: "testing",
    description: "again again",
    status: "unstarted",
  },
];

export const Tasks = (state = { tasks: mockTasks }, action) => {
  if (action.type === "CREATE_TASK") {
    return {
      tasks: [
        ...state.tasks,
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          status: action.payload.status,
        },
      ],
    };
  } else if( action.type === "EDIT_TASK"){
    return {
      tasks: state.tasks.map( task => {
        if(task.id === action.payload.id) {
          return {
            ...task,
            status: action.payload.status
          }
        }
        return task;
      })
    }    
  } else {
    return state;
  }
};
