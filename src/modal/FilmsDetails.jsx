import Wrapper from "../components/Wrapper";

const FilmsDetails = (name, films) => {
  console.log("FILMY: ", films);

  return (
    <Wrapper direction="column">
      <span>{name}</span>
      <ul>
        {films.map((film, index) => (
          <li key={`${name}-${index}`}>{film}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default FilmsDetails;
