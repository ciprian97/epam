import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import ModalComponent from "./modal";
describe("Modal component", () => {
  it("should render correctly ", async () => {
    const { container } = render(<ModalComponent />);

    expect(container).toBeTruthy();
  });

  it("should render correctly without text props ", () => {
    const films = [
      {
        characters: [
          "http://swapi.dev/api/people/1/",
          "http://swapi.dev/api/people/2/",
          "http://swapi.dev/api/people/3/",
          "http://swapi.dev/api/people/4/",
          "http://swapi.dev/api/people/5/",
          "http://swapi.dev/api/people/6/",
          "http://swapi.dev/api/people/7/",
          "http://swapi.dev/api/people/8/",
          "http://swapi.dev/api/people/9/",
          "http://swapi.dev/api/people/10/",
          "http://swapi.dev/api/people/12/",
          "http://swapi.dev/api/people/13/",
          "http://swapi.dev/api/people/14/",
          "http://swapi.dev/api/people/15/",
          "http://swapi.dev/api/people/16/",
          "http://swapi.dev/api/people/18/",
          "http://swapi.dev/api/people/19/",
          "http://swapi.dev/api/people/81/",
        ],
        created: "2014-12-10T14:23:31.880000Z",
        director: "George Lucas",
        edited: "2014-12-20T19:49:45.256000Z",
        episode_id: 4,
        opening_crawl: "It is a period of civil war.",
        planets: [
          "http://swapi.dev/api/planets/1/",
          "http://swapi.dev/api/planets/2/",
          "http://swapi.dev/api/planets/3/",
        ],
        producer: "Gary Kurtz, Rick McCallum",
        release_date: "1977-05-25",
        species: [
          "http://swapi.dev/api/species/1/",
          "http://swapi.dev/api/species/2/",
          "http://swapi.dev/api/species/3/",
          "http://swapi.dev/api/species/4/",
          "http://swapi.dev/api/species/5/",
        ],
        starships: [
          "http://swapi.dev/api/starships/2/",
          "http://swapi.dev/api/starships/3/",
          "http://swapi.dev/api/starships/5/",
          "http://swapi.dev/api/starships/9/",
          "http://swapi.dev/api/starships/10/",
          "http://swapi.dev/api/starships/11/",
          "http://swapi.dev/api/starships/12/",
          "http://swapi.dev/api/starships/13/",
        ],
        title: "A New Hope",
        url: "http://swapi.dev/api/films/1/",
        vehicles: [
          "http://swapi.dev/api/vehicles/4/",
          "http://swapi.dev/api/vehicles/6/",
        ],
      },
    ];
    const { container } = render(
      <ModalComponent
        key="1"
        openingCrawl="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
        director="director name"
        releaseDate="1997"
        films={films}
      />
    );

    expect(container).toBeTruthy();
  });

  it("should render correctly", () => {
    const tree = renderer.create(<ModalComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
