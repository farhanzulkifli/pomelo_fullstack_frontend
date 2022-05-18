import React from 'react'
import moment from 'moment';

const TableBody = ({ tableData, columns }) => {
    //TableBody renders out the data into rows and columns
    return (
     <tbody>
      {tableData.map((data) => {
       return (
        <tr key={data.transactionId}>
         {columns.map(({ accessor }) => {
          const tData = data[accessor] ? data[accessor] : "NA";
          if (accessor === "date"){
              return <td key={accessor}>{moment.unix(data[accessor]).format('LLL')}</td>;
          } 
          return <td key={accessor}>{tData}</td>;
         })}
        </tr>
       );
      })}
     </tbody>
    );
   };

export default TableBody