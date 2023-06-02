import { createSlice } from "@reduxjs/toolkit";

export interface todoByDateType {
  idByDate: number;
  todoName: string;
  isHidden: boolean;
  isDone: boolean;
}

export interface TodoListType {
  date: string;
  id: number;
  count: number;
  todoByDate: todoByDateType[];
}

const todoList: TodoListType[] = [
  {
    date: "2023-05-10",
    id: 1,
    count: 1,
    todoByDate: [
      {
        idByDate: Math.random(),
        todoName: "Finish my React.js tasks",
        isHidden: false,
        isDone: false,
      },
    ],
  },
  {
    date: "2023-05-20",
    id: Math.random(),
    count: 1,
    todoByDate: [
      {
        idByDate: Math.random(),
        todoName: "Learn Next.js",
        isHidden: false,
        isDone: false,
      },
    ],
  },
  {
    date: "2023-05-29",
    id: Math.random(),
    count: 1,
    todoByDate: [
      {
        idByDate: Math.random(),
        todoName: "Finish tasks",
        isHidden: false,
        isDone: false,
      },
    ],
  },
  {
    date: "2023-05-30",
    id: Math.random(),
    count: 2,
    todoByDate: [
      {
        idByDate: Math.random(),
        todoName: "Tasks",
        isHidden: false,
        isDone: false,
      },
      {
        idByDate: Math.random(),
        todoName: "Call Ann",
        isHidden: false,
        isDone: false,
      },
    ],
  },
];

export const newTodoSlice = createSlice({
  name: "todoSlice",
  initialState: todoList,
  reducers: {
    addTodo: (state, action) => {
      const updatedState = state.map((todoItem) => {
        if (todoItem.date === action.payload.date) {
          return {
            ...todoItem,
            count: todoItem.count + 1,
            todoByDate: [
              ...todoItem.todoByDate,
              {
                idByDate: Math.random(),
                todoName: action.payload.title,
                isHidden: false,
                isDone: false,
              },
            ],
          };
        }
        return todoItem;
      });
      if (
        !updatedState.some((todoItem) => todoItem.date === action.payload.date)
      ) {
        return [
          ...updatedState,
          {
            id: Math.random(),
            date: action.payload.date,
            count: 1,
            todoByDate: [
              {
                idByDate: Math.random(),
                todoName: action.payload.title,
                isHidden: false,
                isDone: false,
              },
            ],
          },
        ];
      }
      return updatedState;
    },

    // addTodoMutable: (state, action) => {
    //   const updatedState = state.map((todoItem) => {
    //     if (todoItem.date === action.payload.date) {
    //       const updatedTodoByDate = [...todoItem.todoByDate];
    //       updatedTodoByDate.push({
    //         idByDate: Math.random(),
    //         todoName: action.payload.title,
    //         isHidden: false,
    //         isDone: false,
    //       });

    //       return {
    //         ...todoItem,
    //         count: todoItem.count + 1,
    //         todoByDate: updatedTodoByDate,
    //       };
    //     }

    //     return todoItem;
    //   });

    //   if (
    //     !updatedState.some((todoItem) => todoItem.date === action.payload.date)
    //   ) {
    //     updatedState.push({
    //       id: Math.random(),
    //       date: action.payload.date,
    //       count: 1,
    //       todoByDate: [
    //         {
    //           idByDate: Math.random(),
    //           todoName: action.payload.title,
    //           isHidden: false,
    //           isDone: false,
    //         },
    //       ],
    //     });
    //   }

    //   return updatedState;
    // },

    deleteTodo: (state, action) => {
      const updatedState = state.map((todoItem) => {
        if (
          todoItem.todoByDate.some(
            (item) => item.idByDate === action.payload.id
          )
        ) {
          const updatedTodoByDate = todoItem.todoByDate.filter(
            (item) => item.idByDate !== action.payload.id
          );
          return {
            ...todoItem,
            count: todoItem.count - 1,
            todoByDate: updatedTodoByDate,
          };
        }
        return todoItem;
      });

      return updatedState;
    },
    editTodo: (state, action) => {
      const updatedState = state.map((todo) => {
        const updatedTodoByDate = todo.todoByDate.map((item) => {
          if (item.idByDate === action.payload.id) {
            return {
              ...item,
              todoName: action.payload.todoName,
            };
          }
          return item;
        });

        return {
          ...todo,
          todoByDate: updatedTodoByDate,
        };
      });

      return updatedState;
    },
    done(state, action) {
      const updatedState = state.map((todoItem) => {
        const checkedTodoByDate = todoItem.todoByDate.map((item) => {
          if (item.idByDate === action.payload.id) {
            return {
              ...item,
              isDone: action.payload.isDone,
            };
          }
          return item;
        });
        return {
          ...todoItem,
          todoByDate: checkedTodoByDate,
        };
      });
      return updatedState;
    },
  },
});

export const { addTodo, editTodo, deleteTodo, done } = newTodoSlice.actions;
export const todo = (state: any) => {
  return state.todo;
};
export default newTodoSlice.reducer;
