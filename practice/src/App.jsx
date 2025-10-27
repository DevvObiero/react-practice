import Student  from "./Student"


const App = () => {
  return (
    <div>
      <Student name="Squidward" age="41" isStudent={true} />
       <Student name="Spongebob"      age="12" isStudent={false}         />
       <Student name="Sandy"  age="20"  isStudent={true} />
    </div>
  )
}

export default App
