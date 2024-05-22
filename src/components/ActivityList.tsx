import { useMemo, Dispatch, useEffect } from "react"
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

import { Activity } from "../types"
import { categories } from "../data/categories"
import { ActivityActions, ActivityState } from "../reducers/activity-reducer"

type ActivityListProps = {
  activities: Activity[]
  dispatch: Dispatch<ActivityActions>
  state: ActivityState
}

export default function ActivityList({activities, dispatch, state} : ActivityListProps) {
  
  const isActivitiesEmpty = useMemo(() => state.activities.length === 0, [state.activities])

  const categoryName = useMemo(() => 
    (category : Activity['category']) => 
      categories.map(cat => cat.id === category ? cat.name : '')
  , [activities])

  useEffect(() =>
    localStorage.setItem('activities', JSON.stringify(state.activities))
  , [state.activities])


  return (<>
  
    <h2
      className="text-4xl font-bold text-slate-600 text-center"
    >Comida y Actividades</h2>

    {
    isActivitiesEmpty ? 
      <div className="mx-auto p-10 text-center">
        <h2 className=" font-extralight text-lg">No hay actividades registradas aun.</h2>
      </div>
    
    :
    activities.map(activity => {
      
      const categoryColor = activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'
      const categoryTextColor = activity.category === 1 ? 'text-lime-500' : 'text-orange-500'
      
      return (
      <div
        key={activity.id}
        className="flex justify-between px-5 py-10 mt-10 bg-white shadow hover:shadow-xl transition-all"
      >
        <div className="space-y-2 relative">
          <span className={`
            absolute -top-8 -left-8 px-10 py-2 text-white font-bold 
            uppercase ${categoryColor}`}
          >
            {categoryName(activity.category)}
          </span>

          <p className={`font-bold text-2xl p-5`}>{activity.name}</p>
          <p className={`font-black text-4xl p-5 ${categoryTextColor}`}>
            {activity.calories} {''}
            <span>Calorias</span>
          </p>
        </div>

        <div className="flex flex-col justify-center gap-5">
          <button
            onClick={() => dispatch({type: 'set-activeId', payload: {id: activity.id}})}
          >
            <PencilSquareIcon
              className={`size-8 text-gray-800}`}
            />
          </button>

          <button
            onClick={() => dispatch({type: 'delete-activity', payload: {id: activity.id}})}
          >
            <TrashIcon
              className="size-8 text-gray-800 hover:text-red-600"
            />
          </button>
        </div>
      </div>
    )})}
  
  </>)

}