import { createSlice } from "@reduxjs/toolkit";
import { todoList } from "./DummyData";



export const todoSlice = createSlice({
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

export const { addTodo, editTodo, deleteTodo, done } = todoSlice.actions;
export const todo = (state: any) => {
  return state.todo;
};
export default todoSlice.reducer;
