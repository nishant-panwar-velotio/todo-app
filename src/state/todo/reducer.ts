const initialState: TodoStore = {
  data: [],
  mockData: [],
  error: null,
};


declare interface TodoPayload {
  id: number,
  userId: number,
  text: string,
  filterNumber: number
}

export default (state = initialState, action: ReduxAction<TodoPayload>): TodoStore => {
  const { type, payload } = action;
  const new_state: TodoStore = JSON.parse(JSON.stringify(state));
  switch (type) {
    case 'ADD_TODO_TASK':
      if (!payload) {
        return { ...state }
      }
      new_state.data.push({
        completed: false,
        id: Math.floor(Date.now()),
        title: payload.text,
        userId: 1,
      });
      return {
        ...state, ...new_state
      }
    case 'GET_DUMMY_TODO_LIST':
      return {
        ...state,
        data: [
          {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
          {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
          },
          {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
          },
        ]
      };
    case 'UPDATE_TODO_TASK':
      if (!payload) {
        return { ...state }
      }
      new_state.data.map((value) => {
        if (value.id === payload.id && value.userId === payload.userId) {
          value.completed = !value.completed;
        }
      })
      return {
        ...state, ...new_state
      }
    default:
      return state;
  }
};
