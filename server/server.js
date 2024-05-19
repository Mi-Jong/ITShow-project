const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const url = "https://m.stock.naver.com/api/stocks/searchTop/all?page=1&pageSize=20";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cors());

app.get('/api/data', async (req, res) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        res.json(data); // JSON 형태로 데이터를 클라이언트에 전송합니다.
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, ()=> console.log(`listening on port ${port}`))