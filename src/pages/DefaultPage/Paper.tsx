import React from "react";
import Slideshow from "../../components/Slideshow/Slideshow"

// https://drive.google.com/thumbnail?id={Enter Your ID}&sz=w1000 
const images = [
    "https://vresneeldave.github.io/hotformerloc/assets/karawatha_image_1.png",
    "https://vresneeldave.github.io/hotformerloc/assets/karawatha_image_2.png",
    "https://vresneeldave.github.io/hotformerloc/assets/karawatha_image_3.png",
];

const Paper: React.FC = () => {
    return (
      <>
        <div>
          <h2>HOTFormerLoc: Hierarchical Octree Transformer for Lidar Place Recognition</h2>
        </div>
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <Slideshow images={images} />
        </div>
        <div>
          <h3 id="abstract">Abstract</h3>
          <p>We present HOTFormerLoc, a novel and versatile Hierarchical Octree-based TransFormer, for large-scale 3D place recognition in both ground-to-ground and ground-to-aerial scenarios across urban and forest environments.
Leveraging an octree-based structure, we propose a multi-scale attention mechanism that captures spatial and semantic features across granularities. To address the variable density of point distributions from common spinning lidar, we present cylindrical octree attention windows to better reflect the underlying distribution during attention.
We introduce relay tokens to enable efficient global-local interactions and multi-scale representation learning at reduced computational cost. Our pyramid attentional pooling then synthesises a robust global descriptor for end-to-end place recognition in challenging environments. In ad-dition, we introduce our novel dataset: In-house', a 3D cross-source dataset featuring point cloud data from aerial and ground lidar scans captured in dense forests. Point clouds in In-house contain representational gaps and distinctive attributes such as varying point densities and noise patterns, making it a challenging benchmark for cross-view localisation in the wild. Our results demonstrate that HOT-FormerLoc achieves a top-1 average recall improvement of 5.5% - 11.5% on the In-house benchmark. Furthermore, it consistently outperforms SOTA 3D place recognition meth-ods, with an average performance gain of 5.8% on well-established urban and forest datasets. The code and In-house benchmark will be made available upon acceptance.</p>
        </div>
        <div>
          <h3 id="network-architecture">Network Architecture</h3>
            <p>This is the Network Architecture section.</p>
          <div>
            <h4 id="hot">HOTFormerLoc</h4>
            <img src="assets/architecture_hotformerloc.png" alt="HOTFormerLoc Architecture Diagram" width="600" />
            <h5 id="rtsa">Relay Token Self-Attention (RTSA) Block</h5>
            <img src="assets/architecture_rtsa.png" alt="RTSA Block Architecture Diagram" width="400" />
            <h5 id="hosa">Hierarchial Octree Self-Attention (HOSA) Block</h5>
            <img src="assets/architecture_hosa.png" alt="HOSA Block Architecture Diagram" width="400" />
          </div>
          <div>
            <h4 id="coa">Cyndrical Octree Attention</h4>
            <img src="assets/architecture_coa.png" alt="Cylindrical Octree Attention Architecture Diagram" width="400" />
          </div>
          <div>
            <h4 id="pap">Pyramid Attention Pooling</h4>
          </div>

        </div>
      </>

    );
};

export default Paper;
