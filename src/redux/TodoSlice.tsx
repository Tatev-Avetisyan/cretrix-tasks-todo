import { createSlice } from "@reduxjs/toolkit";

export interface TodoListType {
  id: number;
  todoName: string;
  date: string;
  isHidden: boolean;
  number: number;
  isDone: boolean;
}

const todoList: TodoListType[] = [
  {
    id: 1,
    todoName: "Finish my React.js tasks",
    date: "20.12.1994",
    isHidden: false,
    number: 1,
    isDone: false,
  },
  {
    id: 2,
    todoName: "Learn Next.js",
    date: "20.12.1995",
    isHidden: false,
    number: 1,
    isDone: false,
  },
  {
    id: 3,
    todoName: "Learn Node.js",
    date: "20.12.1996",
    isHidden: false,
    number: 1,
    isDone: false,
  },
];

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: todoList,
  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        {
          id: Math.random(),
          todoName: action.payload.title,
          date: action.payload.date,
          isHidden: false,
          isDone: false,
          number: action.payload.number,
        },
      ];
    },
    deleteTodo(state, action) {
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    editTodo(state, action) {
      return state.map((todoItem) => {
        return todoItem.id === action.payload.id
          ? {
              ...todoItem,
              todoName: action.payload.todoName,
            }
          : { ...todoItem };
      });
    },
    done(state, action) {
      return state.map((todoItem) => {
        return todoItem.id === action.payload.id
          ? {
              ...todoItem,
              isDone: action.payload.isDone,
            }
          : { ...todoItem };
      });
    },
  },
});

export const { addTodo, editTodo, deleteTodo, done } = todoSlice.actions;
export const todo = (state: any) => {
  return state.todo;
};
export default todoSlice.reducer;
