import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get("https://c7cefd48-e6b0-477e-9e10-87968a51eabb.mock.pstmn.io/product")
      .then(function (result) {
        console.log("result : ", result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("error : ", error);
      });
  }, []);
  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>판매 상품</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div key={index} className="product-card">
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

        {/* <div className="product-card">
            <div>
              <img
                className="product-img"
                src="images/products/basketball1.jpeg"
              />
            </div>
            <div className="product-contents">
              <span className="product-name">농구공 1호</span>
              <span className="product-price">5000원</span>
              <div className="product-seller">
                <img className="product-avatar" src="images/icons/avatar.png" />
                <span>그랩</span>
              </div>
            </div>
          </div> */}
        {/* <div class="product-card">
          <div>
            <img class="product-img" src="images/products/keyboard1.jpg" />
          </div>
          <div class="product-contents">
            <span class="product-name"></span>키보드 1호</span>
            <span class="product-price">30000원</span>
            <div class="product-seller">
              <img class="product-avatar" src="images/icons/avatar.png" />
              <span>그랩</span>
            </div>
          </div>
        </div>         */}
        {/* <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div> */}
      </div>
    </div>
  );
}

export default MainPage;
