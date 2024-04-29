import React, { useState } from "react";

function GridContainer() {
  const gridContainerStyle = {
    width: "60%",
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    columnGap: "3%",
    marginTop: "2em",
  };

  const containerWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const gridItem = {
    border: "1px solid #1b4242",
    padding: "10px",
    textAlign: "center",
  };

  const bottomContent = {};

  const topContent = {
    width: "100%",
  };

  const image = {
    width: "80%",
  };

  return (
    <div style={containerWrapper}>
      <div style={gridContainerStyle} className="gridContainerWrapper">
        <div style={gridItem} className="gridCompItem">
          <div style={topContent}>
            <img
              style={image}
              src="https://via.placeholder.com/150"
              alt="placeholder"
            />
          </div>
          <div style={bottomContent}>
            <h5>container 1</h5>
            <p>
              Web Wizards, the creator of EzComponents and Ezalgo, is the your
              go to agency for any of your web development needs
            </p>
          </div>
        </div>
        <div style={gridItem} className="gridCompItem">
          <div style={topContent}>
            <img
              style={image}
              src="https://via.placeholder.com/150"
              alt="placeholder"
            />
          </div>
          <div style={bottomContent}>
            <h5>container 2</h5>
            <p>
              Web Wizards, the creator of EzComponents and Ezalgo, is the your
              go to agency for any of your web development needs
            </p>
          </div>
        </div>
        <div style={gridItem} className="gridCompItem">
          <div style={topContent}>
            <img
              style={image}
              src="https://via.placeholder.com/150"
              alt="placeholder"
            />
          </div>
          <div style={bottomContent}>
            <h5>container 3</h5>
            <p>
              Web Wizards, the creator of EzComponents and Ezalgo, is the your
              go to agency for any of your web development needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridApp() {
  const addComponentBtnDiv = {
    fontFamily: "League Spartan",
    textAlign: "center",
    marginBottom: "5em",
  };
  //---CSS styling for the button itself
  const addComponentBtn = {
    marginTop: "5em",
    fontSize: "1.5em",
    fontFamily: "League Spartan",
    background: "#003C43",
    color: "white",
    borderRadius: "50px",
  };

  const [gridCount, setGridCount] = useState(1);

  const addGridCount = () => {
    setGridCount(gridCount + 1);
  };

  return (
    <div style={addComponentBtnDiv}>
      {/* Generate the footers */}
      {[...Array(gridCount)].map((_, i) => (
        <GridContainer key={i} />
      ))}

      {/* Button to add more footers */}
      <button style={addComponentBtn} onClick={addGridCount}>
        {" "}
        +++Add Grid Container+++{" "}
      </button>
    </div>
  );
}
export default GridApp;
