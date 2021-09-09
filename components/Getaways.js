const Getaways = ({locations}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-4">
      {locations.map((location, index) => (
        <div key={index} className="cursor-pointer">
          <p>{location.destination}</p>
          <p className="text-gray-500">{location.location}</p>
        </div>
      ))}
    </div>
  )
}

export default Getaways
