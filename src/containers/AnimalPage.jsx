import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getAnimal} from '../data/animal.js'

const AnimalPage = () => {
    let params = useParams()
    let [animal, setAnimal] = useState({})
    useEffect(
        () => {
            const selectedAnimal = getAnimal(params.animalId)
            setAnimal(selectedAnimal)
        },
        [params.animalId]
    )
    return(
        <>
        <div>ID Binatang : {animal?.name}
            <img src={animal?.imageUrl}/>
        </div>
        </>
    )
}

export default AnimalPage