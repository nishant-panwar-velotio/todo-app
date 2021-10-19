declare interface TodoListAction {
  type: string,
}

declare interface UpdateTodoListAction {
  type: string,
  payload: {
    id: number,
    userId: number
  }
}

declare interface AddTodoTaskAction {
  type: string,
  payload: {
    text: string
  }
}

export const getDummyTodoList = (): TodoListAction => ({
  type: 'GET_DUMMY_TODO_LIST',
});


export const updateTodoTask = (id: number, userId: number): UpdateTodoListAction => ({
  type: 'UPDATE_TODO_TASK',
  payload: {
    id,
    userId
  }
});

export const addTodoTask = (text: string): AddTodoTaskAction => ({
  type: 'ADD_TODO_TASK',
  payload: {
    text
  }
})

