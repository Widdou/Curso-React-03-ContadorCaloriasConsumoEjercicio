import Form from "./components/Form"

function App() {

  return (
    <>

      <header className="w-full p-4 bg-slate-700">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-bold text-xl text-white ">Contador de Calorias</h1>
        </div>
      </header>

      <section className="bg-slate-500 py-10 px-4">
        <Form/>
      </section>

      <main className="
        mx-auto max-w-2xl bg-slate-100 min-h-screen 
        rounded-lg mt-10 p-4"
      >


      </main>
    </>
  )
}

export default App
