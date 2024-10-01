import React from 'react'

const Searchbar = () => {

    const categories = [
        "Natureza",
        "Pessoas",
        "Tecnologia",
        "Animais",
        "Esportes"
    ]

    return (
        <div className="search-bar">
            <input type="text" placeholder="Pesquisar fotos..."/>
            <button>Pesquisar</button>
            <select>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default Searchbar