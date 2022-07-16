import {  render} from "../../config/test-utils";
import SkeletonMovieCard from "./index";



describe("SkeletonMovieCard component", () => {
  test("01. SkeletonMovieCard matches snapshot correctly", () => {
    const component = render(<SkeletonMovieCard />);
    expect(component.asFragment()).toMatchSnapshot();
  });

 
});
