import { nanoid } from "nanoid";

let todoList = [
  {
    "id": nanoid(),
    "title": "Study",
    "isCompleted": false,
  },

  {
    "id": nanoid(),
    "title": "Work",
    "isCompleted": false,
  },

  {
    "id": nanoid(),
    "title": "Buy milk",
    "isCompleted": false,
  },

  {
    "id": nanoid(),
    "title": "Buy bread",
    "isCompleted": false,
  },

  {
    "id": nanoid(),
    "title": "Slip for 7 hours",
    "isCompleted": false,
  },

  {
    "id": nanoid(),
    "title": "Go to training",
    "isCompleted": false,
  },

  {
    "id": nanoid(),
    "title": "Watch movie",
    "isCompleted": false,
  },

  {
    "id": nanoid(),
    "title": "Call my girlfriend",
    "isCompleted": false,
  },

  {
    "id": nanoid(),
    "title": "Relax",
    "isCompleted": false,
  },
];

export const getTodoListMock = () => {
  return new Promise((resolve) => setTimeout(() => resolve(todoList), 400));
};

export const addTodoMock = (title) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTodo = {
        "id": nanoid(),
        title,
        "isCompleted": false,
      };

      todoList = [...todoList, newTodo];

      resolve(newTodo);
    }, 400);
  });
};

export const changeCompletedStatusInTodoMock = ({ id, isCompleted }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      todoList = todoList.map((todo) => {
        return todo.id === id ? { ...todo, isCompleted } : todo;
      });

      resolve(todoList);
    }, 400);
  });
};

export const removeTodoMock = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      todoList = todoList.filter((todo) => todo.id !== id);
      resolve(id);
    }, 400);
  });
};
