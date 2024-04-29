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

    const bottomContent = {

    }

    const topContent = {
        width: "100%",
    }

    return (
        <div style={containerWrapper}>
            <div style={gridContainerStyle}>
                <div style={gridItem}>
                    <div style={topContent}>
                        <img src="https://via.placeholder.com/150" alt="placeholder" />
                    </div>
                    <div style={bottomContent}>
                        <h1>container 1</h1>
                        <p>Web Wizards, the creator of EzComponents and Ezalgo, is the your go to agency for any of your web development needsß</p>
                    </div>
                </div>
                <div style={gridItem}>
                    <div style={topContent}>
                        <img src="https://via.placeholder.com/150" alt="placeholder" />
                    </div>
                    <div style={bottomContent}>
                        <h1>container 2</h1>
                        <p>Web Wizards, the creator of EzComponents and Ezalgo, is the your go to agency for any of your web development needsß</p>
                    </div>
                </div>

                <div style={gridItem}>
                    <h1>container 3</h1>
                </div>
            </div>
        </div>
    );
}


export default GridContainer;