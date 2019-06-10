import React, { Fragment } from 'react'
import styled from '../styled-components'
import { IMovieDetail } from '../types/movies'
import { LinkButton } from '../styled-components/Button';

const Wrapper = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 2rem;
  grid-template-areas:  'poster'
                        'content';

  @media (min-width: 40rem) {
    grid-template-columns: minmax(0, 20rem) minmax(0, 1fr);
  }
`

const Poster = styled.img`
  align-self: flex-start;
  grid-area: 'poster';
  width: 100%;
  border-radius: 1rem;
`

const Content = styled.div`
  grid-area: 'content';
  color: ${props => props.theme.colors.text};
`

const ContentSection = styled.section`
  margin-bottom: 1rem;
`

const ContentSectionTitle = styled.h3`
  margin-bottom: 0.5rem;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.large};
`

const Description = styled.p``

const Badge = styled.p`
  display: inline-block;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.imdb};
`

const TorrentLinks = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: repeat(1fr);
  grid-gap: 0.5rem;
`

const SubLinks = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: repeat(1fr);
  grid-gap: 0.5rem;
`

const MovieDetail = ({ movie }: { movie: IMovieDetail}) => (
  <Wrapper>
    <Poster src={movie.large_cover_image} alt="" />

    <Content>
      <ContentSection>
        <Title>{ movie.title }</Title>
      </ContentSection>

      <ContentSection>
        <Description>{ movie.description_intro }</Description>
      </ContentSection>

      <ContentSection>
        <Badge>IMDb: {movie.rating}</Badge>
      </ContentSection>

      <ContentSection>
        <ContentSectionTitle>Torrents:</ContentSectionTitle>
        <TorrentLinks>
          {movie.torrents.map(torrent => (
            <LinkButton
              href={torrent.url}
              key={torrent.hash}
            >{ torrent.quality } - {torrent.type} ({ torrent.size })</LinkButton>
          ))}
        </TorrentLinks>
      </ContentSection>

      <ContentSection>
        <ContentSectionTitle>Subtitles:</ContentSectionTitle>
        <SubLinks>
          {movie.subs.map(sub => (
            <LinkButton
              href={sub.ZipDownloadLink}
              key={sub.SubHash}
              style={{
                backgroundColor: '#0abde3',
                borderColor: '#0abde3'
              }}
            >{sub.SubFileName})</LinkButton>
          ))}
        </SubLinks>
      </ContentSection>
    </Content>
  </Wrapper>
)

export default MovieDetail;
