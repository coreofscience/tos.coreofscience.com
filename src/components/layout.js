/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `3rem`,
            }}
          >
            © {new Date().getFullYear()} Core of Science{" "}
            <a href="https://coreofscience.com">coreofscience.com</a>, Built
            with
            {` `}
            <a href="https://www.gatsbyjs.org" target="blank">
              Gatsby
            </a>
          </footer>
        </div>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            adroll_adv_id = "W4X6GCU4RZENHET6NWIISX"; adroll_pix_id = "DGYWWU6WRVHYZKPV66RLXX"; adroll_version = "2.0";  (function(w, d, e, o, a) { w.__adroll_loaded = true; w.adroll = w.adroll || []; w.adroll.f = [ 'setProperties', 'identify', 'track' ]; var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js"; for (a = 0; a < w.adroll.f.length; a++) { w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) { return function() { w.adroll.push([ n, arguments ]) } })(w.adroll.f[a]) }  e = d.createElement('script'); o = d.getElementsByTagName('script')[0]; e.async = 1; e.src = roundtripUrl; o.parentNode.insertBefore(e, o); })(window, document); adroll.track("pageView");
          `,
          }}
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
