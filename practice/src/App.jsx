import Student  from "./Student"


const App = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Student Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <Student 
          name="Alice Johnson" 
          age={20} 
          image="https://randomuser.me/api/portraits/women/44.jpg" 
        />
        <Student 
          name="Bob Smith" 
          age={22} 
          image="https://randomuser.me/api/portraits/men/34.jpg" />
      </div>
    </div>
  )
}

export default App
