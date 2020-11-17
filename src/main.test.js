import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Main from "./main";
describe("Main component", () => {
  it("should render correctly ", async () => {
    const { container } = render(<Main />);

    expect(container).toBeTruthy();
  });

  it("should render correctly", () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
