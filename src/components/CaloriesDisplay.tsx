
type CaloriesDisplayProps = {
  calories: number
  text: string
}

export default function CaloriesDisplay({calories, text} : CaloriesDisplayProps) {

  return (<>
  
      <div className="text-center select-none">
        <p className=" text-4xl font-bold">{calories}</p>
        <span className="font-bold">{text}</span>
      </div>
  
  </>)

}