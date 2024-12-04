import React from "react";
import '../Styles/Stats.css';

function Stats ({stats}) {
    return (
        <div className="stats-card">

            <div className="flex-items2">
                <div className="start-flex">
                    <div className="start-div"></div>
                    <div className="end-div">
                        <div className="top-item">{stats.totalUsers}</div>
                        <div style={{fontSize:"20px"}}>Total Users</div>
                    </div>
                </div>
            </div>

            <div className="flex-items2">
                <div className="start-flex">
                <div className="start-div"></div>
                    <div className="end-div">
                        <div className="top-item">{stats.activeUsers}</div>
                        <div style={{fontSize:"20px"}}>Active Users</div>
                    </div>
                </div>
            </div>

            <div className="flex-items2">
                <div className="start-flex">
                <div className="start-div"></div>
                    <div className="end-div">
                        <div className="top-item">{stats.newSignups}</div>
                        <div style={{fontSize:"20px"}}>New Sign-ups</div>
                    </div>
                </div>
            </div>

            <div className="flex-items2">
                <div className="start-flex">
                <div className="start-div"></div>
                    <div className="end-div">
                        <div className="top-item">{stats.activePercentage}%</div>
                        <div style={{fontSize:"20px"}}>Active Percentage</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;