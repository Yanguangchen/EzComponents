import React from 'react';

function GridContainer() {

    const gridContainerStyle = {
        width: "60%",
        display: "grid",
        gridTemplateColumns: "33% 33% 33%",
        columnGap: "3%",
    }

    const containerWrapper = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const gridItem = {
        border: "1px solid black",
        padding: "10px",
        textAlign: "center",
    }
    return (
        <div style={containerWrapper}>
            <div style={gridContainerStyle}>
                <div style={gridItem}>
                    <h1>container1</h1>
                </div>
                <div style={gridItem}>
                    <h1>container2</h1>
                </div>
                <div style={gridItem}>
                    <h1>container 3</h1>
                </div>
            </div>
        </div>
    );
}


export default GridContainer;