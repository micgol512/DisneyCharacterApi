/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  border: 1px solid #808080;
  border-radius: ${(props) => (props.round ? `50%` : `8px 32px`)};
  object-fit: cover;
  backgrund-color: #808080;
  width: ${(props) => (props.width ? props.width : `100px`)};
  height: ${(props) => (props.height ? props.height : `100px`)};
`;

const Image = ({ src, alt, round, width, height }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(src, { method: "HEAD" });
        if (response.ok) {
          setImageSrc(src);
        } else {
          setError("Image not found.");
        }
      } catch (err) {
        setError(err);
      }
    };
    checkImage();
  }, [src]);
  //   return <StyledImage src={src} alt={alt} round={round} width={width} height={height} />;
  // };

  return (
    <>
      {error ? (
        <StyledImage
          src={"../src/assets/images/Noimage.webp"}
          alt={error}
          round={round}
          width={width}
          height={height}
        />
      ) : (
        <>
          <StyledImage
            src={imageSrc}
            alt={alt}
            round={round}
            width={width}
            height={height}
          />
        </>
      )}
    </>
  );
};

export default Image;
