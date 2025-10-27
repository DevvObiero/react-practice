
const Student = ({name,age,image}) => {
  return (
    <div className="text-white rounded-2xl shadow-md texy-center p-4 overflow-hidden" >
      <img className="w-full h-64 object-cover mb-4 rounded-lg" src={image} alt={name} />
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-lg">Age: {age}</p>
    </div>
  )
}

export default Student
