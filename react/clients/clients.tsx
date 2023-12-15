const headers = {
  'Content-Type': 'application/json',
}

const clients = {
  getQuestions: () =>
    fetch(`https://txm8z41l82.execute-api.us-east-1.amazonaws.com/dev/get-questions`, {
      method: 'GET',
      headers,
    }).then((response) => response.json()),

}

export default clients
