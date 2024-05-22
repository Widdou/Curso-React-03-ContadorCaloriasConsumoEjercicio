import { useMemo, useReducer } from "react"
import Form from "./components/Form"
import { ActivityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"

function App() {

  const [state, dispatch] = useReducer(ActivityReducer, initialState)
  const canResetApp = () => useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>

      <header className="w-full p-4 bg-slate-700">
        <div className="mx-auto max-w-7xl flex justify-between">
          <h1 className="font-bold text-xl text-white ">Contador de Calorias</h1>
          <button
            className="text-white bg-slate-800 rounded-lg px-3 hover:bg-slate-500"
            onClick={() => dispatch({type: 'reset-app'})}
            disabled={!canResetApp()}
          >Reiniciar App</button>
        </div>
      </header>

      <section className="bg-slate-500 py-10 px-4">
        <div className="max-w-4xl mx-auto ">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>

      <section className="bg-slate-400 p-10">
        <div className="max-w-4xl mx-auto">

          <CalorieTracker
            activities={state.activities}
          />

        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList 
          activities={state.activities}
          dispatch={dispatch}
          state={state}
        />
      </section>

    </>
  )
}

export default App
