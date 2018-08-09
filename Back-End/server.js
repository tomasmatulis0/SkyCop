const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(bodyParser.json());

const response = {
    "payload": [
        {
          "id": "f20811144fa-2bf33c-11e5555557-932553252a-b2970b72321c7b36",
          "title": "Canceled"
        },
        {
          "id": "f234235252352bfc-11233333333e7-a902352327-b2970b7c7222b36",
          "title": "Denied"
        },
        {
          "id": "f20863255236c4-2b235235fc-11e3255557-aa20-b2970b3257c7b36",
          "title": "Delayed"
        },
        {
          "id": "f20863255236c4-2b235235fc-11e3255557-aa20-b2970b3257c7b36",
          "title": "Success"
        }
      ],
      "totalItems": 4,
      "items": 4
}

app.get('/', (req, res) => {
    res.send(response);
})


app.listen(3001)