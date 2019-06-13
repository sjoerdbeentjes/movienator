import React from 'react'
import { ICastMember } from '../types/movies'
import styled from '../styled-components';

const CastList = styled.ul`
  list-style: none;
  padding: 0 2rem 0 1.5rem;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: auto;
`

const CastMember = styled.li`
  flex: 0 0 10rem;
  padding: 1rem;
  border: 1px solid #efefef;
  margin-left: 1rem;
`

const CastPic = styled.img`
  width: 100%;
`

const MovieCast = ({ members }: { members: ICastMember[] }) => (
  <CastList>
    {members.map(member => (
      <CastMember>
        <CastPic
          src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
          alt=""
        />
      </CastMember>
    ))}
  </CastList>
);

export default MovieCast