import React from "react"

import Layout from "../components/layout"
import IssueImage from "../components/issueImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Dear tree of science users:</h1>
    <p>
      Tree of Science is going to be offline for a while. We the ToS team, now
      known as Core of Science, and Universidad Nacional de Colombia (sede
      Manizales) are working on some intellectual property related issues.
      Although we are working hard and towards a common goal the issues might
      take some time to be resolved.
    </p>
    <p>
      Core of Science, as an organization, is working on a more open, performant
      and flexible version of the ToS website you know and love. And
      furthermore, we'll make it compliant with the latest privacy regulations
      such as GDPR in Europe and "Habeas data" in Colombia.
    </p>
    <p>
      If you want to know a little more about the current state of what we are
      trying to solve, here's a diagram:
    </p>
    <p>
      If you want to help, please visit the{" "}
      <a href="https://github.com/coreofscience">
        core of science organization on github
      </a>{" "}
      or visit the core of science website:{" "}
      <a href="https://coreofscience.com">coreofscience.com</a>.
    </p>
  </Layout>
)

export default IndexPage
