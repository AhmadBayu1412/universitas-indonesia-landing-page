import { useState } from "react"

const button = [
  {id: 1, href:"#", text: "Apply Now"},
  {id: 2, href:"#", text: "Explore Programs"},
]

const Introduction = () => {
const [currentIndex, setCurrentIndex] = useState(0)


  return (
    <div className="rounded-3xl bg-yellow-100 flex-column p-15 w-100% h-100vh m-20 shadow-(--shadow-3xl)">
      <div className="container-introduction flex  justify-center gap-15">
        <div className="description flex-column items-center justify-center flex-1 ">
            <h1>Academic Excellence </h1>
            <p className="text-2xl">Preparing Future Leaders Through. Education, Research & Innovation</p>
            <div className="btn-headline">
              {button.map((item, index) => (
                <a
                  key={index} 
                  href={item.href}
                  className={`btn-overview ${index === currentIndex ? "active" : ""}`}
                  onMouseEnter={() => setCurrentIndex(index)}>
                  {item.text}
                </a>
              ))}
            </div>
        </div>
        <div className="image justify-center items-center flex-1 ">
            <img src="/assets/images/image-overview.png" alt="overview" className=" w-full rounded 2xl"/>
        </div>
      </div>
      <div className="container-ranking flex justify-between px-15 mt-15">
        <div className="ranking">
            <h3>42K+</h3>
            <p>Students</p>
        </div>
        <div className="ranking">
            <h3>56+</h3>
            <p>Programs</p>
        </div>
        <div className="ranking">
            <h3>580+</h3>
            <p>Global Partners</p>
        </div>
        <div className="ranking">
            <h3>#29</h3>
            <p>Ranking</p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
