import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data.stocks);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <p>인기종목</p>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>종목명</th>
            <th>종목코드</th>
            <th>등락률</th>
            <th>현재가</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock, index) => (
            <tr key={stock.itemCode}>
              <td>{index + 1}</td>
              <td>{stock.stockName}</td>
              <td>{stock.itemCode}</td>
              <td>{stock.fluctuationsRatio}%</td>
              <td>{stock.closePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockApp;
