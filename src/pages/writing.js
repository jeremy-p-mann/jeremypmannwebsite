import * as React from "react";
import Layout from "../components/layout";
import Paragraph from "../components/paragraph";

const Writing = () => {
  const title = "Writing";
  const alexander_duality = 0;
  const graph_qm = 0;
  const cs_theory = 0;
  const picture_maths = 0;
  const undergrad_thesis = 0;
  const content = (
    <main>
      <Paragraph>
        I wrote a “not-suitable-for-publication” outline on using Alexander
        Duality in Image Analysis.
      </Paragraph>
      <Paragraph>
        I wrote some rough notes going through the BV-approach to scalar field
        theory on a graph: (Graph) Quantum Mechanics: Towards a Homotopical
        Approach to Spectral Graph Theory.
      </Paragraph>
      <Paragraph>
        I wrote some Notes on Abelian Chern-Simons Theory (For Homotopy
        Theorists) based on a lecture given at the Notre Dame Graduate Student
        Topology Seminar.
      </Paragraph>
      <Paragraph>
        I was interviewed by Picture this Maths in celebration of the Nobel
        Prize in Physics for topological phases of matter: Defining topology
        through interviews: Jeremy Mann.
      </Paragraph>
      <Paragraph>
        I wrote an undergraduate thesis on some stuff in Riemannian geometry:
        Equilateral Dimension of Riemannian Manifolds with Bounded Curvature.
      </Paragraph>
    </main>
  );
  return <Layout title={title}>{content}</Layout>;
};

export default Writing;
