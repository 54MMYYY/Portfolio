import { OrbitingCircles } from "./OrbitingCircles"

export function FrameWorks() {
  const skills = [
    "python-5",
    "java",
    "cplusplus",
    "git",
    "html5",
    "css3",
    "javascript",
    "react",
    "threejs",
    "vitejs",
    "tailwindcss",
    "sql",
    "linux",
    "mimecast",
    "oracle",
    "microsoft",
    "ms-excel",
    "ms-word",
    "ms-powerpoint",
    "azure",
    "uipath",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
        <Icon key={index} src={`assets/logos/${skill}.svg`}/>))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={100} reverse speed={2}>
      {skills.reverse().map((skill, index) => (
        <Icon key={index} src={`assets/logos/${skill}.svg`}/>))}
      </OrbitingCircles>
    </div>
  )
}

const Icon=({src}) => (
  <img src={import.meta.env.BASE_URL + src} className="duration-200 rounded-sm hover:scale-110"/>
)