import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';


interface Data {
    id: number;
    sender: string;
    receiver: string;
    totalAmount: number;
    totalPaid: number;
  }
  
  const ChildInstallmentData: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      };

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8181/installment/child');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
        <div style={divStyle}>
        <table className="custom-table" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '1px solid #ccc' }}>ID</th>
              <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '1px solid #ccc' }}>Sender</th>
              <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '1px solid #ccc' }}>Receiver</th>
              <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '1px solid #ccc' }}>Total Amount</th>
              <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '1px solid #ccc' }}>Total Amount To Be Paid</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id}>
                <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.id}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.sender}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.receiver}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.totalAmount}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{item.totalPaid}</td> 
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
      );
  };
  
  export default ChildInstallmentData;
  