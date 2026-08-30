import Card from "./components/Card"

const App = () => {
  return (
    <div className='parent'>
      <Card name="imran" age={20} img="https://images.unsplash.com/photo-1787163519918-ce37e9c240e9?q=80&w=1104&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card name="Ryan" age={21}/>
      <Card name="james" age={20} />
      <Card name="jacob" age={20} /> 


    </div>
  )
}

export default App