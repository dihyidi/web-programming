import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Film } from '../../models/film'
import { FilmList } from '../films/FilmList'
import { Heading } from '../heading/Heading'

type HomeProps = RouteComponentProps & {
    films: Film[];
}
export const Home = (props: HomeProps) => {
    return (
        <div>
            <Heading film={props.films[0]} />
            <FilmList films={props.films} />
        </div>
    )
}
