import { useMemo } from "react"
import type { Activity } from "../types"
import CaloriesDisplay from "./CaloriesDisplay"

type CalorieTrackerProps = {
  activities : Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {

  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => {
      return activity.category == 1 ? total + activity.calories : total
  },0), [activities])

  const caloriesBurnt = useMemo(() => activities.reduce((total, activity) => {
      return activity.category == 2 ? total + activity.calories : total
  },0), [activities])

  return (<>

    <h2 className="text-center font-bold text-2xl">Calorias Consumidas</h2>

    <div className="flex justify-between p-8">

    <CaloriesDisplay
        calories={caloriesConsumed}
        text={"Consumidas"}
      />
      <CaloriesDisplay
        calories={caloriesBurnt}
        text={"Quemadas"}
      />
      <CaloriesDisplay
        calories={caloriesConsumed - caloriesBurnt}
        text={"Diferencia"}
      />

    </div>
  
  </>)

}