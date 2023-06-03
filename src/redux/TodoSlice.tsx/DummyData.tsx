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

export const todoList: TodoListType[] = [
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
