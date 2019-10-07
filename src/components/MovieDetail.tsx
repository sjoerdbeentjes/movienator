import React from 'react'
import styled from '../styled-components'
import { IMovieDetail } from '../types/movies'
import { LinkButton } from '../styled-components/Button';
import MovieCast from './MovieCast'

const Wrapper = styled.div`
  padding: 2rem 0;
`

const Top = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 2rem;
  grid-template-areas:  'poster'
                        'content';

  @media (min-width: 40rem) {
    grid-template-columns: minmax(0, calc(50% - 0.5rem)) minmax(0, 1fr);
  }
`

const Poster = styled.div`
  position: relative;
  align-self: flex-start;
  grid-area: 'poster';
  width: 100%;
  padding-bottom: 150%;
  background-color: ${props => props.theme.colors.placeholder};
  border-radius: ${props => props.theme.borderRadius.small};
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10;
  }
`

const Content = styled.div`
  grid-area: 'content';
`

const ContentSection = styled.section`
  margin-bottom: 1rem;
`

const ContentSectionTitle = styled.h3`
  margin-bottom: 0.5rem;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.huge};
`

const Description = styled.p``

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    margin: 0 0.5rem 0.5rem 0;
  }
`

const MovieDetail = ({ movie }: { movie: IMovieDetail }) => (
  <Wrapper>
    <Top>
      <Poster>
        <img src={`https://yst.am${movie.large_cover_image}`} alt=""/>
      </Poster>

      <Content>
        <ContentSection>
          <Title>{movie.title}</Title>
        </ContentSection>

        <ContentSection>
          <Description>{movie.description_intro}</Description>
        </ContentSection>

        <ContentSection>
          <ContentSectionTitle>Ratings:</ContentSectionTitle>
          <Links>
            <LinkButton
              href={`https://www.imdb.com/title/${movie.imdb_code}`}
              backgroundColor="#F5C518"
            >
              IMDb: {movie.rating}
            </LinkButton>
          </Links>
        </ContentSection>

        <ContentSection>
          <ContentSectionTitle>Torrents:</ContentSectionTitle>
          <Links>
            {movie.torrents.map(torrent => (
              <LinkButton
                href={`https://yst.am${torrent.url}`}
                key={torrent.hash}
                backgroundColor="#0077ff"
                color="#fff"
              >
                {torrent.quality} - {torrent.type} ({torrent.size})
              </LinkButton>
            ))}
          </Links>
        </ContentSection>

        <ContentSection>
          <ContentSectionTitle>Subtitles:</ContentSectionTitle>
          <Links>
            {movie.subs.map(sub => (
              <LinkButton
                href={sub.ZipDownloadLink}
                key={sub.SubHash}
                backgroundColor="#0077ff"
                color="#fff"
              >
                {sub.SubFileName}
              </LinkButton>
            ))}
          </Links>
        </ContentSection>
      </Content>
    </Top>
    <MovieCast members={movie.cast} />
  </Wrapper>
);

export default MovieDetail;
