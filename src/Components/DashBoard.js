import React, { useState, useEffect } from "react";
import Chart from "../Chart";
import "./DashBoard.css";

function DashBoard() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const time = setInterval(() => {
      setDate(new Date());
    }, 60000);
    return function cleanup() {
      clearInterval(time);
    };
  });
  return (
    <div>
      <main>
        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Hello User</h1>
              <p>Welcome to ToolHub dashboard</p>
            </div>
          </div>

          <div className="main__cards">
            <div className="card">
              <ion-icon name="hammer-outline"></ion-icon>
              <div className="card__inner">
                <p className="text-primary-p">Total number of tools:</p>
                <span className="font-bold text-title">10,070</span>
              </div>
            </div>

            <div className="card">
              <ion-icon name="options-outline"></ion-icon>
              <div className="card__inner">
                <p className="text-primary-p">Tools with missing info:</p>
                <span className="font-bold text-title">2,700</span>
              </div>
            </div>

            <div className="card">
              <ion-icon name="bar-chart-outline"></ion-icon>
              <div className="card__inner">
                <p className="text-primary-p">% of tools with missing info:</p>
                <span className="font-bold text-title">26.8%</span>
              </div>
            </div>

            <div className="card">
              <ion-icon name="create-outline"></ion-icon>
              <div className="card__inner">
                <p className="text-primary-p"> Number Of tools edited:</p>
                <span className="font-bold text-title">6,889</span>
              </div>
            </div>
          </div>

          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>ToolHub, worldwide</p>
                </div>
                <ion-icon name="analytics-outline"></ion-icon>
              </div>
              <Chart />
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Today, {date.toLocaleTimeString()}</p>
                </div>
                <ion-icon name="bookmarks-outline"></ion-icon>
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>Shared Tools:</h1>
                  <p>3,000</p>
                </div>

                <div className="card2">
                  <h1>Available Tools:</h1>
                  <p>35,000</p>
                </div>

                <div className="card3">
                  <h1>Incoming Tools:</h1>
                  <p>175000</p>
                </div>

                <div className="card4">
                  <h1>Cost of Tools:</h1>
                  <p>$35000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashBoard;
