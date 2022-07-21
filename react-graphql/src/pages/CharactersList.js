import React from "react";
import useCharacters from "../hooks/useCharacters";
import "./CharacterList.css";

const CharacterList = () => {
  const { error, loading, data } = useCharacters();

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
