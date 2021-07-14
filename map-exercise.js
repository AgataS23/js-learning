// Napisz funkcję toFullNames, która zamienia listę użytkowników na listę ich
// pełnych imion i nazwisk w formacie "{imię} {drugie imię} {nazwisko}",
// lub "{imię} {nazwisko}" jeśli nie ma drugiego imienia. Załóż, że użytkownicy
// mają właściwości firstName, lastName o typie string, oraz secondName
// typu string lub undefined.
// solution:
function toFullNamesUsers(users) {
  return users.map(function (user) {
    if (user.secondName) {
      return `${user.firstName} ${user.secondName} ${user.lastName}`;
    } else {
      return `${user.firstName} ${user.lastName}`;
    }
  });
}
const users = [
  { firstName: "Turanga", lastName: "Leela" },
  { firstName: "Amy", lastName: "Wong" },
  {
    firstName: "Philip",
    secondName: "Jay",
    lastName: "Fry",
  },
  {
    firstName: "Bender",
    secondName: "Bending",
    lastName: "Rodríguez",
  },
];
toFullNamesUsers(users);
