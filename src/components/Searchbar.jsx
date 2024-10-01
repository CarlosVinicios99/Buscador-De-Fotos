import React from 'react'

const Searchbar = ({setQuery, setCategory, setActivateSearch}) => {

    const categories = [
        "Natureza",
        "Pessoas",
        "Tecnologia",
        "Animais",
        "Esportes"
    ]

    return (
        <div className="search-bar">
            <input type="text" placeholder="Pesquisar fotos..." onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={() => setActivateSearch(true)}>Pesquisar</button>
            <select onChange={(e) => {
                setCategory(e.target.value)
                setActivateSearch(true)
            }}>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default Searchbar