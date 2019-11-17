import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tree of Science is temporary offline</h1>
    <p>
      Tree of Science is going to be offline for a while. We the ToS team, now
      known as Core of Science, and Universidad Nacional de Colombia are working
      on some intellectual property related issues. Although we are working hard
      and towards a common goal the issues might take some time to resolve.
    </p>
    <h2>When can we expect to have tree of science online again?</h2>
    <p>
      Core of Science, as an organization, is working on a more open, performant
      and flexible version of the ToS website you know and love. Furthermore,
      we'll make it compliant with the latest privacy regulations such as GDPR
      in Europe and "Habeas data" in Colombia.
    </p>
    <h2>What can we do to help?</h2>
    <p>
      If you want to help, please visit the{" "}
      <a href="https://github.com/coreofscience">
        core of science organization on github
      </a>{" "}
      or visit the core of science website:{" "}
      <a href="https://coreofscience.com">coreofscience.com</a>.
    </p>
    <h2>How did ToS work?</h2>
    <p>
      If you want to know how ToS worked, please follow{" "}
      <a href="https://www.youtube.com/watch?v=9vegZiCEvWY">this video</a>.
      However, we are working on a new ToS version, with new functionalities and
      design. Please keep in touch to be among the first to use ToS again.
    </p>
    <h2>What could you do meanwhile to use ToS?</h2>
    We the ToS team, among some students of universities from Manizales, were
    working on a minimal ToS on{" "}
    <a href="https://www.r-project.org/">R language</a>. The code is hosted in{" "}
    <a href="https://github.com/coreofscience/r-tos">this respository</a> and
    you could follow{" "}
    <a href="https://www.youtube.com/watch?v=cdrhWCLPypU">this video</a> to run
    ToS on a <a href="https://rstudio.cloud/">RStudio cloud</a> account. That
    repository is open source. Feel free to make suggestions and contribute to
    the code.
  </Layout>
)

export default IndexPage
