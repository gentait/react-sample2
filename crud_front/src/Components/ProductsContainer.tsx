import React from "react";
import ViewProduct, { Product } from "./ViewProduct";

interface Props {
  productData: Product[];
  deleateProduct: Function;
  updateProduct: Function;
}
class ProductsContainer extends React.Component<Props> {
  render() {
    return (
      <div className="productList">
        {this.props.productData.map(data => {
          return (
            <ViewProduct
              data={data}
              key={data.id}
              onDelete={this.props.deleateProduct}
              onUpdate={this.props.updateProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductsContainer;
