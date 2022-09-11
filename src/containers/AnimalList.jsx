import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getAnimals } from '../data/animal'

const AnimalList = () => {
    let [animals, setAnimals] = useState([])
    let navigate = useNavigate()
    useEffect(
        () => {
            let fetchAnimal = getAnimals()

            let filter = queryStrings.get('filter')

            if (filter === 'asc') {
                fetchAnimal = fetchAnimal.sort((a, b) => a.price - b.price)
            } else {
                fetchAnimal = fetchAnimal.sort((a, b) => b.price - a.price)
            }
            setAnimals(fetchAnimal)
        },
        []
    )
    let [queryStrings, setQueryStrings] = useSearchParams();

    const handlerAnimalDetail = (event, item) => {
        event.preventDefault()
        navigate(`animals/${item.animalId}`)
    }
    return (
        <>
            <h1>List Animal</h1>
            <p>Akan difilter dengan cara {queryStrings.get('filter')}</p>
            <table>
                <thead>
                    <tr>
                        <th>Nomor</th>
                        <th>Nama</th>
                        <th>Foto</th>
                        <th>Harga</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((item, i) => {
                        return(
                        <tr>
                            <td key={item.animalId}>{i+1}</td>
                            <td key={item.animalId}>{item.name}</td>
                            <td key={item.animalId}>
                                <img src={item.imageUrl} />
                            </td>
                            <td key={item.animalId}>{item.price}</td>
                            <td>
                                <a href='#' onClick={handlerAnimalDetail}>Detail</a>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}

export default AnimalList