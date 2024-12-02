import React from "react";
import Slideshow from "../../components/Slideshow/Slideshow"

// https://drive.google.com/thumbnail?id={Enter Your ID}&sz=w1000 
const images = [
    "https://vresneeldave.github.io/hotformerloc/assets/karawatha_image_1.png",
    "https://vresneeldave.github.io/hotformerloc/assets/karawatha_image_2.png",
    "https://vresneeldave.github.io/hotformerloc/assets/karawatha_image_3.png",
];

const App: React.FC = () => {
    return (
      <>
        <div>
          <h2>HOTFormerLoc: Hierarchical Octree Transformer for Lidar Place Recognition</h2>
        </div>
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <Slideshow images={images} />
        </div>
      </>

    );
};

export default App;
