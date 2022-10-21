import React from 'react'
import "./widgetLg.css"

function WidgetLg() {
    const Button = ({ type }) => {
      return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1615453261246-4b32e335a4a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnZXJpYW4lMjBsYWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Favour</span>
            </td>
            <td className="widgetLgDate">3 Jul 2022</td>
            <td className="widgetLgAmount">$132.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1612833833572-4f2709907bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnZXJpYW4lMjBsYWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Mercy</span>
            </td>
            <td className="widgetLgDate">1 Jun 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan </span>
            </td>
            <td className="widgetLgDate">3 Aug 2022</td>
            <td className="widgetLgAmount">$126.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Uduak Sam</span>
            </td>
            <td className="widgetLgDate">2 sept 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </table>
      </div>
    );
  }

export default WidgetLg
