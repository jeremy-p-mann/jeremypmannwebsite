import * as React from "react";
import Layout from "../components/layout";
import Paragraph from "../components/paragraph";
import Url from "../components/url";
import graph_qm from "../pdfs/graph_qm.pdf";
import cs_theory from "../pdfs/cs_notes.pdf";
import alexander_duality from "../pdfs/Alexander_Duality_in_Image_Analysis.pdf";

const Writing = () => {
  const title = "Writing";
  const ad_description = "Alexander Duality in Image Analysis";
  const graph_qm_description =
    "(Graph) Quantum Mechanics: Towards a Homotopical Approach to Spectral Graph Theory.";
  const cs_theory_description =
    "Notes on Abelian Chern-Simons Theory (For Homotopy Theorists) ";
  const pm_descr = "Defining topology through interviews: Jeremy Mann";
  const pm_url =
    "https://picturethismaths.wordpress.com/2016/10/28/defining-topology-through-interviews-interview-seven-with-jeremy-mann/";
  const thesis_url =
    "https://scholar.rose-hulman.edu/cgi/viewcontent.cgi?article=1074&context=rhumj";
  const thesis_description =
    "Equilateral Dimension of Riemannian Manifolds with Bounded Curvature.";
  const first_onc_paper =
    "https://ascopubs.org/doi/abs/10.1200/JCO.2022.40.16_suppl.e18701";
  const first_onc_paper_descriptin =
    "here";
  const second_onc_paper =
    "https://www.valueinhealthjournal.com/article/S1098-3015(22)01752-1/fulltext";
  const second_onc_paper_descriptin =
    "here";
  const content = (
    <main>
      <Paragraph>
        I've co-authored a couple of abstracts on using real world data to improve the diversity and power
                of clinical trials, see:{" "}
        <Url url={first_onc_paper} description={first_onc_paper_descriptin} />
                {" "}and{" "}
        <Url url={second_onc_paper} description={second_onc_paper_descriptin} />.
      </Paragraph>
      <Paragraph>
        I wrote a “not-suitable-for-publication” outline on using{" "}
        <Url url={alexander_duality} description={ad_description} />.
      </Paragraph>
      <Paragraph>
        I wrote a “not-suitable-for-publication” outline on using{" "}
        <Url url={alexander_duality} description={ad_description} />.
      </Paragraph>
      <Paragraph>
        I wrote some rough notes going through the BV-approach to scalar field
        theory on a graph:{" "}
        <Url url={graph_qm} description={graph_qm_description} />.
      </Paragraph>
      <Paragraph>
        I wrote some <Url url={cs_theory} description={cs_theory_description} />
        based on a lecture given at the Notre Dame Graduate Student Topology
        Seminar.
      </Paragraph>
      <Paragraph>
        I was interviewed by Picture this Maths in celebration of the Nobel
        Prize in Physics for topological phases of matter.{" "}
        <Url url={pm_url} description={pm_descr} />.
      </Paragraph>
      <Paragraph>
        I wrote an undergraduate thesis on some stuff in Riemannian geometry:
        <Url url={thesis_url} description={thesis_description} />.
      </Paragraph>
    </main>
  );
  return <Layout title={title}>{content}</Layout>;
};

export default Writing;
