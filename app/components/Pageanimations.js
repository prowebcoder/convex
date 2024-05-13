import React from 'react'

const Pageanimations = () => {
  return (
    <div
  className="grid md:grid-cols-main-page grid-cols-main-page-mobile col-span-full md:gap-x-2.5 pointer-events-none fixed left-0 top-0 z-20 h-screen w-screen md:translate-x-[0.3125rem]"
  style={{}}
>
  <div
    style={{
      animation: "gridLine 10s linear infinite",
      animationDelay: "0.5s",
      animationDuration: "12s"
    }}
    className="relative -left-[0.3125rem] md:left-0 md:col-span-2 border-r border-opacity-[0.15] border-black h-[150%] translate-y-[-100%]"
  />
  <div
    style={{
      animation: "gridLine 10s linear infinite",
      animationDelay: "1s",
      animationDuration: "8s"
    }}
    className="relative left-[0.3125rem] col-span-1 md:left-0 md:col-span-2 border-r border-opacity-[0.15] border-black h-[150%] translate-y-[-100%]"
  />
  <div
    style={{
      animation: "gridLine 10s linear infinite",
      animationDelay: "1.5s",
      animationDuration: "10s"
    }}
    className="hidden md:block border-r border-opacity-[0.15] border-black h-[150%] translate-y-[-100%]"
  />
  <div
    style={{
      animation: "gridLine 10s linear infinite",
      animationDelay: "2s",
      animationDuration: "7s"
    }}
    className="hidden md:block border-r border-opacity-[0.15] border-black h-[150%] translate-y-[-100%]"
  />
  <div
    style={{
      animation: "gridLine 10s linear infinite",
      animationDelay: "1.3s",
      animationDuration: "9s"
    }}
    className="hidden md:block border-r border-opacity-[0.15] border-black h-[150%] translate-y-[-100%]"
  />
</div>
  )
}

export default Pageanimations