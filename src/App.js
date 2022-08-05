import * as React from "react";
import BananaComponent from "./Component/BananaComponent";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "absolute",
      }}
    >
      <Header />
      <BananaComponent />
      <Footer />
    </div>
  );
}

export default App;
