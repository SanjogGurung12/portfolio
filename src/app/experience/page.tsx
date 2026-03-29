
import Image from "next/image"
          
export default function Experience(){
    
    const skills =[
        {id:1, name:"HTML", 
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", className:"shadow-lg shadow-orange-500"
          },
        {id:2, name:"CSS", 
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", className:"shadow-lg shadow-blue-500 "
          },
        {id:3, name:"JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", className:"shadow-lg shadow-yellow-500"
          },
        {id:4, name:"TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", className:"shadow-lg shadow-green-500"
          },
        {id:5, name:"React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", className:"shadow-lg shadow-sky-500"
          },
        {id:6, name:"NextJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", className:"shadow-lg shadow-purple-500 "
          },
        {id:7, name:"Github", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", className:"shadow-lg shadow-gray-500 "
          }
    ]
    return(
        <div className="p-16">
            <h1 className="text-4xl font-bold pb-6 underline underline-offset-8 decoration-5 decoration-gray-500">Experience</h1>
      
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12">
        {skills.map((skill) => (
          <div key={skill.id} className={`relative rounded-lg ${skill.className}`}>
            <Image
              src={skill.src}
              alt={skill.name}
              width={150}
              height={100}
              className="mx-auto p-2"
            />
            <p className="text-center text-xl font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
        </div>
    )
}