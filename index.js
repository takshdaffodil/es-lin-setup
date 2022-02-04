const message = require('./message.json');

// const messages = {
//   glossary: {
//     title: 'example glossary',
//     GlossDiv: {
//       title: 'S',
//       GlossList: {
//         GlossEntry: {
//           ID: 'SGML',
//           SortAs: 'SGML',
//           GlossTerm: 'Standard Generalized Markup Language',
//           Acronym: 'SGML',
//           Abbrev: 'ISO 8879:1986',
//           GlossDef: {
//             para: 'A meta-markup language, used to create markup languages such as DocBook.',
//             GlossSeeAlso: ['GML', 'XML'],
//           },
//           GlossSee: 'markup',
//         },
//       },
//     },
//   },
// };
// const newMessage = JSON.parse(JSON.stringify(messages));
// newMessage.glossary.GlossDiv.GlossList.GlossEntry.GlossSee = 'markdown';

// print all values of a json object

const printAllValues = (jsonObject) => {
  for (const key in jsonObject) {
    if (typeof jsonObject[key] === 'object') {
      printAllValues(jsonObject[key]);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Key: ${key} : ${jsonObject[key]}`);
    }
  }
};

printAllValues(message);
