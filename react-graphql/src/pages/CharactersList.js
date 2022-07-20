import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./CharacterList.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharacterList = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);
  console.log(error, loading, data);

  if (loading) return <div>Spinner.....</div>;
  if (error) return <div> Error Occured</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;

{
  /*

1.useQuery : useQuery hook takes the graphql qurey and returns the object which has 3 properties.

i.obj.error : This populates all the errors and used for error handling.
ii.obj.loading  : This is a Boolean value , which says that our app is loading or not i.e while fetching data.
iii.obj.data : 

*/
}
