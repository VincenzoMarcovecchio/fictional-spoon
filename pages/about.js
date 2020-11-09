import React from "react";
import Root from "../components/common/Root";
import Footer from "../components/common/Footer";

const About = () => (
  <Root>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4">Commerce.js Demo Store</h2>
            <h4 className="font-size-subheader mb-4">
              This is an open source storefront built using Chec’s headless architecture and the
              Commerce.js SDK. Commerce.js is a smarter, more efficient way to build eCommerce
              projects, and we hope you can see that as you explore the world custom eCommerce.
              Please build on top of, or pick apart this project for your own use. Everything in
              this project, from the storefront, to the cart, checkout and receipt, is 100%
              customizable. To build more custom eCommerce projects, using any frontend framework or
              platform, head over to{" "}
              <a
                href="https://commercejs.com/"
                target="_blank"
                className="cjs-link"
                rel="noopener noreferrer"
              >
                commercejs.com
              </a>
              .
            </h4>
            <div className="about-cjs mt-3 d-flex flex-row">
              <a
                className="px-4 py-3 font-color-white about-doc"
                href="https://commercejs.com/docs/"
                target="_blank"
              >
                Documentation
              </a>
              <a
                className="px-4 py-3 about-dev"
                href="https://commercejs.com/docs/community/"
                target="_blank"
              >
                Guides from the community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
