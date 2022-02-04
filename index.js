function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const nameObject = {
  firstName: 'Taksh',
  lastName: 'Mehta',
};

getFullName(nameObject);

const message = {
  glossary: {
    title: 'example glossary',
    GlossDiv: {
      title: 'S',
      GlossList: {
        GlossEntry: {
          ID: 'SGML',
          SortAs: 'SGML',
          GlossTerm: 'Standard Generalized Markup Language',
          Acronym: 'SGML',
          Abbrev: 'ISO 8879:1986',
          GlossDef: {
            para: 'A meta-markup language, used to create markup languages such as DocBook.',
            GlossSeeAlso: ['GML', 'XML'],
          },
          GlossSee: 'markup',
        },
      },
    },
  },
};
const newMessage = JSON.parse(JSON.stringify(message));
newMessage.glossary.GlossDiv.GlossList.GlossEntry.GlossSee = 'markdown';
