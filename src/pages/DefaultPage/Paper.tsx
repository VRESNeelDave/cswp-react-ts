import React from "react";
import Slideshow from "../../components/Slideshow/Slideshow";

const images = [
  "https://vresneeldave.github.io/hotformerloc/assets/karawatha_image_1.png",
  "https://vresneeldave.github.io/hotformerloc/assets/karawatha_image_2.png",
  "https://vresneeldave.github.io/hotformerloc/assets/karawatha_image_3.png",
];

const Paper: React.FC = () => {
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", padding: "10px" }}>
          HOTFormerLoc: Hierarchical Octree Transformer for Lidar Place Recognition
        </h2>
      </div>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <Slideshow images={images} />
      </div>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h3 id="abstract">Abstract</h3>
        <p>
          We present HOTFormerLoc, a novel and versatile Hierarchical Octree-based TransFormer,
          for large-scale 3D place recognition in both ground-to-ground and ground-to-aerial scenarios
          across urban and forest environments. Leveraging an octree-based structure, we propose a
          multi-scale attention mechanism that captures spatial and semantic features across granularities.
        </p>
        {/* Shortened for brevity */}
      </div>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h3 id="network-architecture">Network Architecture</h3>
        <p>This is the Network Architecture section.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          <div style={{ textAlign: "center", maxWidth: "100%" }}>
            <h4 id="hot">HOTFormerLoc</h4>
            <img
              src="assets/architecture_hotformerloc.png"
              alt="HOTFormerLoc Architecture Diagram"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div style={{ textAlign: "center", maxWidth: "100%" }}>
            <h5 id="rtsa">Relay Token Self-Attention (RTSA) Block</h5>
            <img
              src="assets/architecture_rtsa.png"
              alt="RTSA Block Architecture Diagram"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div style={{ textAlign: "center", maxWidth: "100%" }}>
            <h5 id="hosa">Hierarchial Octree Self-Attention (HOSA) Block</h5>
            <img
              src="assets/architecture_hosa.png"
              alt="HOSA Block Architecture Diagram"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h4 id="coa">Cylindrical Octree Attention</h4>
          <img
            src="assets/architecture_coa.png"
            alt="Cylindrical Octree Attention Architecture Diagram"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h4 id="pap">Pyramid Attention Pooling</h4>
        </div>
      </div>
    </>
  );
};

export default Paper;
