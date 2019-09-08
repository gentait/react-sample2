import React from "react";
import ViewProduct, { Product } from "./ViewProduct";

interface Props {
  productData: Product[];
}
class ProductsContainer extends React.Component<Props> {
  render() {
    return (
      <div className="productList">
        {this.props.productData.map(data => {
          return <ViewProduct data={data} key={data.id} />;
        })}
      </div>
    );
  }
}

export default ProductsContainer;
