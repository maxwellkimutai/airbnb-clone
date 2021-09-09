import React, { useState, useEffect } from 'react'
import Image from "next/image"
import LargeCardImageLg from "../assets/images/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg"
import LargeCardImageSm from "../assets/images/791aba62-2de8-4722-99b5-45838715eb34.webp"

function ExtraLargeCard() {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <section className="relative my-16 cursor-pointer">
            <div className="relative h-[30rem] min-w-[300px]">
                {!isMobile ? (
                    <Image className="rounded-2xl" src={LargeCardImageLg} layout="fill" objectFit="cover"/>
                ) : (
                    <Image className="rounded-2xl" src={LargeCardImageSm} layout="fill" objectFit="cover"/>
                )}
            </div>
            <div className="absolute lg:top-36 lg:text-left text-center lg:mt-0 mt-8 top-0 lg:left-20 left-0 lg:w-auto w-full">
                <h3 className="lg:text-5xl text-2xl mb-3 text-white font-semibold">Try hosting</h3>
                <p className="text-white lg:text-lg text-base lg:w-80 w-60 lg:mx-0 mx-auto">Earn extra income and unlock new opportunities by sharing your space</p>
                <button className="text-lg text-black bg-white rounded-lg px-5 lg:py-3 py-2 lg:mt-10 mt-5">Learn more</button>
            </div>
        </section>
    )
}

export default ExtraLargeCard
