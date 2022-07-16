import {  render} from "../../config/test-utils";
import MovieCard from "./index";


const mock = {
    rank:4,
    title:'titulo prueba',
    img:'img prueba',
    year:2022,
    imdbRating: 5.6,
    crew:'crew prueba',
    id:'T17262'
}

describe("MovieCard component", () => {
  it("01. MovieCard matches snapshot correctly", () => {
    const component = render(<MovieCard 
        year={mock.year}
        rank={mock.rank}
        img={mock.img}
        imbdRating={mock.imdbRating}
        crew={mock.crew}
        id={mock.id}
        title={mock.title}
        />);
    expect(component.asFragment()).toMatchSnapshot();
  });

});
