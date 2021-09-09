import Image from 'next/image'

function LargeCard({img, title, description}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-[20rem] w-[19.5rem] md:h-[30rem] md:w-[28rem]">
            <Image className="rounded-xl" src={img} layout="fill"/>
        </div>
        <h3 className="text-2xl font-semibold mt-3">{title}</h3>
        <p className="font-light text-base">{description}</p>
    </div>
  )
}

export default LargeCard
