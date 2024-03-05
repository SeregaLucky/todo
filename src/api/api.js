import { nanoid } from "nanoid";

let items = [
  {
    id: nanoid(),
    title: "Study",
    isCompleted: false,
  },

  {
    id: nanoid(),
    title: "Work",
    isCompleted: false,
  },

  {
    id: nanoid(),
    title: "Buy milk",
    isCompleted: false,
  },

  {
    id: nanoid(),
    title: "Buy bread",
    isCompleted: false,
  },

  {
    id: nanoid(),
    title: "Slip for 7 hours",
    isCompleted: false,
  },

  {
    id: nanoid(),
    title: "Go to training",
    isCompleted: false,
  },

  {
    id: nanoid(),
    title: "Watch movie",
    isCompleted: false,
  },

  {
    id: nanoid(),
    title: "Call my girlfriend",
    isCompleted: false,
  },

  {
    id: nanoid(),
    title: "Relax",
    isCompleted: false,
  },
];

export const getItemsMock = () => {
  return new Promise(res => setTimeout(() => res(items), 400));
};

export const addItemMock = title => {
  return new Promise(res =>
    setTimeout(() => {
      const newItem = {
        id: nanoid(),
        title: title,
        isCompleted: false,
      };

      items = [...items, newItem];

      res(newItem);
    }, 400),
  );
};

export const changeCompletedStatusInItemMock = ({ id, isCompleted }) => {
  return new Promise(res =>
    setTimeout(() => {
      items = items.map(item =>
        item.id === id ? { ...item, isCompleted } : item,
      );

      res(items);
    }, 400),
  );
};

export const removeItemMock = id => {
  return new Promise(res =>
    setTimeout(() => {
      items = items.filter(item => item.id !== id);
      res(id);
    }, 400),
  );
};
