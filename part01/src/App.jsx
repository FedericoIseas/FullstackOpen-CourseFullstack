import { useState } from "react"

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
        <p>good {g}</p>
        <p>neutral {n}</p>
        <p>bad {b}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive}</p>
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
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics g={good} n={neutral} b={bad} />
    </div >
  )
}

export default App