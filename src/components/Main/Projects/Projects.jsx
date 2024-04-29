import { CardContainer } from "./CardContainer";
import { IMG } from "../../IMG/IMG";
import { Card } from "./Card/Card";
import { useState, useEffect } from "react";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:5173/src/components/main/projects/projects.json';
    const headers = {
      method: "GET",
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    }
    fetch(url, headers)
    .then(res => res.json())
    .then(data => setData(data))
  },[]);

  return (
    <section className="w-3/4 mx-auto">
      <div className="grid grid-cols-6 grid-rows-[repeat(2,_300px)] gap-8">
        <CardContainer style='col-span-3 p-10 flex flex-col justify-between'>
          <h2 className="text-7xl font-bold text-color-purple">Alguno De Mis Proyectos</h2>
          <p className="text-lg">Estos son algunos de mis mejores proyectos que he realizado.</p>
        </CardContainer>
        <CardContainer style='col-span-3'>
          <IMG src="https://cdna.artstation.com/p/assets/images/images/039/339/494/original/gustavo-pinto-vilas-boas-animmanelean-02.gif" alt="Lofi Gif" />
        </CardContainer>
        {data.map((item, index) => {
          const {content, footer} = item;
          return (
            <Card key={index} content={content} footer={footer} />
          );
        })}
      </div>
    </section>
  )
}

export { Projects };