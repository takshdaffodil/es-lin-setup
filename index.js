function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const nameObject = {
  firstName: 'Taksh',
  lastName: 'Mehta',
};

getFullName(nameObject);
