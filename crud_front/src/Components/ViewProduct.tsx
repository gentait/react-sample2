import React from "react";
export interface Product {
  id: number;
  product: string;
  created_at: string;
  updated_at: string;
}
interface Props {
  data: Product;
}
class ViewProduct extends React.Component<Props> {
  render() {
    return (
      <div>
        <span>{this.props.data.product}</span>
      </div>
    );
  }
}

export default ViewProduct;
