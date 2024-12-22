function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log(error.message);
  }
}

const validJSON = '{"name": "Praveen", "age": 20}'
console.log(parseJSON(validJSON));

const inValidJSON = '{"name": "Praveen", "age": 20,}'
console.log(parseJSON(inValidJSON));