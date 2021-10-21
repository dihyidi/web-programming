import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { FilmContext } from '../../App'
import { Film } from '../../models/film'
import { FilmList } from '../films/FilmList'
import { Heading } from '../heading/Heading'

type HomeProps = RouteComponentProps;
export const Home = (props: HomeProps) => {
    const { films } = useContext(FilmContext)
    return (
        <div>
            <Heading film={films[0]} />
            <FilmList films={films} />
        </div>
    )
}
