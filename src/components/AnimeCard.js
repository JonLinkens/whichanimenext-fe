import { useEffect, useState } from "react";
import styled from "styled-components";
import PercentagePie from "./PercentagePie";

export default function AnimeCard({ id, name, match }) {
  const [animedata, setAnimeData] = useState(undefined);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/anime/${id}`)
      .then((response) => response.json())
      .then((data) => setAnimeData(data));
  });

  return (
    <>
      {animedata && (
        <Card>
          <Link href={animedata.url}>
            <Thumbnail>
              <Image>
                <PercentagePie percentage={match} />
              </Image>
            </Thumbnail>
            <CardText>
              <LeftThumb
                style={{ backgroundImage: `url(${animedata.image_url})` }}
              />
              <TitleTotal>
                <Extra>
                  {animedata.aired.prop.from.year} {" - "}
                  {animedata.aired.prop.to.year}
                </Extra>
                <Name>{name}</Name>

                <Synopsis>
                  {animedata.synopsis.match(/[^.!?]+[.!?]+/g).slice(0, 2)}
                </Synopsis>
              </TitleTotal>
            </CardText>
          </Link>
        </Card>
      )}
    </>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
  max-width: 400px;
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  position: relative;
  margin: 1rem;
`;

const Name = styled.h2`
  margin: 0;
  padding: 0 1rem;
`;

const Extra = styled.div`
  padding: 1rem;
  text-align: right;
  color: darkblue;
  font-weight: bold;
  font-size: 12px;
`;

const Synopsis = styled.div`
  padding: 0.5rem 1rem;
  font-size: 12px;
`;

const Thumbnail = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
  border: 6px solid white;
  background: white;
  top: 15px;
  left: 85px;
`;

const Image = styled.div`
  width: 100%;
  text-align: center;
`;

const CardText = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const TitleTotal = styled.div`
  padding: 2.5em 1.5em 1.5em 1.5em;
`;

const LeftThumb = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-position: bottom center;
  background-size: cover;
`;
