import React, { useState } from "react";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [sections, setSections] = useState([
    {
      title: "Open Section 1",
      content:
        "Minim esse minim pariatur reprehenderit magna pariatur. Occaecat deserunt sint est culpa nulla aliqua elit aliqua aliquip officia cillum cillum. Pariatur dolor et nulla dolore occaecat laboris do sit consectetur. Mollit sit eiusmod dolor duis labore.",
      additionalInfo:
        "Exercitation laborum fugiat magna pariatur dolore. Est quis commodo est esse consequat ad nulla. Enim officia officia minim nostrud ex commodo elit labore quis ullamco amet. Ex et aute irure minim eu. Occaecat esse cupidatat et aute deserunt cillum laborum esse ea proident eu labore irure. Fugiat aute consequat laborum reprehenderit nostrud. Exercitation amet cupidatat laborum aliquip voluptate excepteur nulla culpa aliquip occaecat minim.",
    },
    {
      title: "Open Section 2",
      content:
        "Nulla Lorem tempor aliquip esse qui ullamco commodo labore cillum sit exercitation mollit culpa veniam. Cillum reprehenderit exercitation pariatur duis enim labore mollit. Aliqua mollit commodo aute anim velit laborum. In dolore officia laboris magna aliqua esse in.",
      additionalInfo:
        "Exercitation laborum fugiat magna pariatur dolore. Est quis commodo est esse consequat ad nulla. Enim officia officia minim nostrud ex commodo elit labore quis ullamco amet. Ex et aute irure minim eu. Occaecat esse cupidatat et aute deserunt cillum laborum esse ea proident eu labore irure. Fugiat aute consequat laborum reprehenderit nostrud. Exercitation amet cupidatat laborum aliquip voluptate excepteur nulla culpa aliquip occaecat minim.",
    },
    {
      title: "Open Section 3",
      content:
        "Commodo labore exercitation pariatur quis cupidatat fugiat officia laboris. Labore mollit qui exercitation fugiat adipisicing do non ex sunt. Qui laboris laborum esse irure deserunt excepteur excepteur anim anim enim aliqua eu id. Velit incididunt enim consequat labore pariatur cupidatat nisi culpa pariatur enim.",
      additionalInfo:
        "Exercitation laborum fugiat magna pariatur dolore. Est quis commodo est esse consequat ad nulla. Enim officia officia minim nostrud ex commodo elit labore quis ullamco amet. Ex et aute irure minim eu. Occaecat esse cupidatat et aute deserunt cillum laborum esse ea proident eu labore irure. Fugiat aute consequat laborum reprehenderit nostrud. Exercitation amet cupidatat laborum aliquip voluptate excepteur nulla culpa aliquip occaecat minim.",
    },
  ]);

  const panelStyle = {
    backgroundColor: "#135D66",
    color: "white",
    fontFamily: "roboto",
    border: "none",
    borderRadius: "10px",
    padding: "40px",
    margin: "5px",
    width: "70%",
    cursor: "pointer",
    marginTop: "2em",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "League Spartan",
    border: "none",
    width: "100%",
    fontSize: "1.5em",
    cursor: "pointer",
  };

  const flexContainerAccordion = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyle = {
    backgroundColor: "#003C43",
    color: "white",
    fontFamily: "roboto",
    padding: "10px",
    margin: "5px",
    borderRadius: "20px",
  };

  const addSection = () => {
    const newSection = {
      title: `Open Section ${sections.length + 1}`,
      content: `Section ${sections.length + 1} content...`,
      additionalInfo: `Additional info for section ${sections.length + 1}...`,
    };
    setSections([...sections, newSection]);
  };

  const addComponentBtnAccordion = {
    marginTop: "2em",
    fontSize: "1.3em",
    fontFamily: "Roboto",
    background: "#003C43",
    color: "white",
    borderRadius: "50px",
    width: "60%",
  };

  const addComponentBtnDivAccordion = {
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: "5em",
  };

  const renderSection = (section, index) => (
    <div className={Accordion} style={flexContainerAccordion}>
      <div style={panelStyle} key={index} onClick={() => setActiveIndex(index)}>
        <button style={buttonStyle}>{section.title}</button>
        {activeIndex === index && (
          <div style={contentStyle}>
            {section.content} <br></br> {section.additionalInfo}{" "}
          </div>
        )}
      </div>
    </div>
  );
  return (
    <div>
      <h1 id={"AccordionId"}> Accordion Component</h1>
      {sections.map(renderSection)}
      <div style={addComponentBtnDivAccordion}>
        <button style={addComponentBtnAccordion} onClick={addSection}>
          {" "}
          +++Add Section+++{" "}
        </button>
      </div>
    </div>
  );
}
export default Accordion;
