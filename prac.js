const user = [
  {
    name: "A",
    age: 12,
  },

  {
    name: "B",
    age: 13,
  },

  {
    name: "C",
    age: 14,
  },
  {
    name: "D",
    age: 15,
  },
];
const newUser = user.filter((n) => n.name !== "C");
newUser;
