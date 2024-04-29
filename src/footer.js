import React, { useState } from "react";

function FooterComponent() {
  const footerStyle = {
    background: "#0d222e",
    color: "white",
    textAlign: "center",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    marginTop: "3em",
  };

  const footerContent = {
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
  };

  const footerContentPStyle = {
    margin: 0,
    padding: 0,
    textAlign: "center",
  };

  const topFootervideoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0d222e",
  };

  const topFootervideoVideoStyle = {
    width: "60%",
  };

  const listContainer1 = {};

  const lists = {
    listStyleType: "none",
    fontSize: "1.5em",
    padding: "2em",
  };

  const individualLists = {
    marginTop: "0.4em",
  };

  const bottomSection = {
    background: "#1b4242",
    padding: "1em",
  };

  return (
    <footer>
      <main>
        <div style={footerStyle}>
          <div class="footerWrapper">
            <div style={footerContent}>
              <div style={topFootervideoStyle}>
                <video
                  style={topFootervideoVideoStyle}
                  src="./staticFooter/footer.mp4"
                  loop
                  autoPlay
                  muted
                  playsInline
                >
                  Opps element isnt working
                </video>
              </div>
              <div style={listContainer1}>
                <ol style={lists}>
                  <a href="#Top">
                    <li style={individualLists}>Home</li>
                  </a>
                  <a href="#">
                    <li style={individualLists}>Services</li>
                  </a>
                  <a href="#">
                    <li style={individualLists}>Contact</li>
                  </a>
                  <a href="Bottom">
                    <li style={individualLists}>About</li>
                  </a>
                </ol>
              </div>
              <div style={listContainer1}>
                <ol style={lists}>
                  <a href="#">
                    <li style={individualLists}>Products</li>
                  </a>
                  <a href="#">
                    <li style={individualLists}>Showcase</li>
                  </a>
                  <a href="#">
                    <li style={individualLists}>Licenses</li>
                  </a>
                  <a href="#">
                    <li style={individualLists}>Customer Testimonies</li>
                  </a>
                </ol>
              </div>
            </div>
            <div style={bottomSection}>
              <p style={footerContentPStyle}>Powered using React.Js</p>
              <p style={footerContentPStyle}>
                Developed by Chen Yanguang from Web Wizards
              </p>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
}

function FooterApp() {
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

  const [footerCount, setFooterCount] = useState(1);

  const addFooter = () => {
    setFooterCount(footerCount + 1);
  };

  return (
    <div style={addComponentBtnDiv}>
      {/* Generate the footers */}
      {[...Array(footerCount)].map((_, i) => (
        <FooterComponent key={i} />
      ))}

      {/* Button to add more footers */}
      <button style={addComponentBtn} onClick={addFooter}>
        {" "}
        +++Add Footer+++{" "}
      </button>
    </div>
  );
}

export default FooterApp;
