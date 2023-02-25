import { Container, Technologies, Wrap, ImageComponent } from './style'

interface Technologie {
  id: number;
  name: string;
  url: string;
}


const technologies: Technologie[] = [
  {
    id: 1,
    name: "TypeScript",
    url: "/technology-icons/typescript.svg"
  },
  {
    id: 2,
    name: "JavaScript",
    url: "/technology-icons/javascript.svg"
  },
  {
    id: 4,
    name: "React",
    url: "/technology-icons/react.svg"
  },
  {
    id: 6,
    name: "Node.JS",
    url: "/technology-icons/node.svg"
  },
  {
    id: 10,
    name: "HTML",
    url: "/technology-icons/html.svg"
  },
  {
    id: 12,
    name: "CSS",
    url: "/technology-icons/css.svg"
  },
  {
    id: 13,
    name: "Express",
    url: "/technology-icons/express.svg"
  },
  {
    id: 9,
    name: "Material UI",
    url: "/technology-icons/material-ui.svg"
  },
  
  {
    id: 7,
    name: "Next",
    url: "/technology-icons/next.svg"
  },
  {
    id: 8,
    name: "MongoDB",
    url: "/technology-icons/mongodb.svg"
  },
  
  {
    id: 11,
    name: "SQL",
    url: "/technology-icons/database.svg"
  },
  {
    id: 5,
    name: "Prisma",
    url: "/technology-icons/prisma.svg"
  },
  

]

export default function TechnologiesSection() {
  return (
    <Container id='s-skills'>
      <Wrap  >
        <h1>Conhecimentos<span>( )</span></h1>
        <Technologies>
          {technologies.map(item => (
            <div key={item.id} >
              <ImageComponent
              width={100}
              height={100}
              layout="responsive"
              src={item.url}
              alt="" />
              <span>{item.name}</span>
            </div>
          ))}
        </Technologies>

      </Wrap>
    </Container>
  )
}
