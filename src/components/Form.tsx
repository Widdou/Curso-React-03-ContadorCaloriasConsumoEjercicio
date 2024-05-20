import { useState, ChangeEvent, FormEvent } from "react"

import { categories } from "../data/categories"
import type { Activity } from "../types"


export default function Form() {

  const [activity, setActivity] = useState<Activity>({
    category: 2,
    name: '',
    calories: 0,
  })


  const handleChange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

    const isNumberField = ['category', 'calories'].includes(e.target.id)

    setActivity({
      ...activity, 
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }

  const isValidActivity = () => {
    const {name, calories} = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Submitting Activity')
  }

  return (<>
  
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white shadow p-10 rounded-lg"
    >

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoria:</label>
        <select 
          className="w-full p-2 bg-white border border-slate-300 rounded-lg"
          id="category"
          onChange={handleChange}
          value={activity.category}
        >
          {categories.map(category => 
            <option 
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          )}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Actividad:</label>
        <input 
          id="name"
          type="text" 
          className="w-full p-2 bg-white border border-slate-300 rounded-lg"
          placeholder="Ej, Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
          value={activity.name}
          onChange={e => handleChange(e)}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        <input 
          id="calories"
          type="number" 
          className="w-full p-2 bg-white border border-slate-300 rounded-lg"
          placeholder="Calorias, ej. 300 ó 500"
          value={activity.calories}
          onChange={e => handleChange(e)}
        />
      </div>

      <input 
        type="submit"
        value={
          activity.category === 1 
          ? 'Guardar Comida' 
          : activity.category === 2 
          ? 'Guardar Ejercicio' 
          : 'Guardar Actividad'
        }
        className="w-full bg-slate-900 hover:bg-slate-400 text-white uppercase p-2 rounded font-bold cursor-pointer disabled:opacity-10" 
        disabled={!isValidActivity()}
      />


    </form>

  </>)
}