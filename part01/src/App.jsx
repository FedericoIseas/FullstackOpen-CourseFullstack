import { useState } from "react"

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const StatisticsLine = (props) => {
  return (
    <>
      <p>{props.text} {props.value}</p>
    </>
  )
}

const Statistics = (props) => {
  const {g, n, b} = props
  const total = g + n + b
  const average = (g-b)/total
  const positive = (g*100)/total

  if (total === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedbacks given</p>
      </>
    )
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <StatisticsLine text='Good' value={g}/>
        <StatisticsLine text='Neutral' value={n}/>
        <StatisticsLine text='Bad' value={b}/>
        <StatisticsLine text='Total' value={total}/>
        <StatisticsLine text='Average' value={average}/>
        <StatisticsLine text='Positive' value={positive}/>
      </>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <Statistics g={good} n={neutral} b={bad} />
    </div >
  )
}

export default App