import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { connect } from "react-redux";

class CategoryBanner extends Component {
  render() {
    const categories = [
      "/images/collection/1.jpg",
      "/images/collection/2.jpg",
      "/images/collection/3.jpg",
    ];
    const prodotti = ["carne", "formaggi", "mozzarelle"];
    return (
      <div className="bg-brand300 py-5 collection-banner">
        <div className="custom-container py-5">
          <p className="font-size-display2 my-3 py-5 text-center font-family-secondary">
            Categorie
          </p>

          <div className="row">
            {categories.map((item, index) => (
              <div key={`category-item-${index}`} className="col-12 col-md-4 collection-item mb-5">
                <Link href="#">
                  <a className="align-items-center font-color-black flex-column cursor-pointer mb-5">
                    <div>
                      <div
                        className="mb-4 w-100 collection-item-image"
                        style={{
                          background: `url("${item}") center center/cover`,
                        }}
                      />
                      <p className="mb-2 font-size-heading text-center" key={index}>
                        {prodotti[index]}
                      </p>
                      <p className="text-center">{item.count} </p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

CategoryBanner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

CategoryBanner.defaultProps = {
  categories: [],
};

export default connect((state) => state)(CategoryBanner);
