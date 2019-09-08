import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

interface Props {
  createProduct: Function;
}
interface State {
  product: string;
}
class FormContainer extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: ""
    };
  }

  onChangetext(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ product: e.target.value });
  }
  hundleSubmit() {
    this.props.createProduct(this.state.product);
    this.setState({ product: "" });
  }
  render() {
    return (
      <div>
        <form>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              value={this.state.product}
              placeholder="Enter text"
              onChange={(e: any) => this.onChangetext(e)}
            />
          </FormGroup>
        </form>
        <Button type="submit" onClick={() => this.hundleSubmit()}>
          つぶやく
        </Button>
      </div>
    );
  }
}

export default FormContainer;
