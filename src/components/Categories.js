
// import {useState } from "react";

function Categories({ categories, setActiveCategory, activeCategory }) {
    
    return (
           <div className="sbt-categories">
                <select
                    value = {activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="sbt-categories-select"
                >
                    <option value=''>----</option>
                    {categories.map((category) => (
                        <option key={category}  value={category}>
                            {category}
                        </option>
                    ))}

                </select>
                <button
                    onClick={() => setActiveCategory('')}
                > Reset </button>
            </div>
    )
}


export default Categories;