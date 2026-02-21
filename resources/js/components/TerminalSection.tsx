import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js"

import { FolderGit2Icon } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Bar } from "react-chartjs-2"
import { Chart, Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

type FolderContent = {
  [key: string]: string[] | Record<string, string[]>
}

type Skill = {
  name: string
  level: number
}

type Project = {
  name: string
  url: string
}

const terminalData = {
  projects: [
    { name: "OSCULT BTP", url: "https://oscult-ingenierie.ma/" },
    { name: "BLS Services", url: "https://locationbenne-alsace.fr/" },
    { name: "Airless Decoration", url: "https://airlessdecoration.fr/" },
    { name: "Age d'Or Services", url: "https://agedorservicesguyane.fr/" },
    { name: "AHC Plumber", url: "https://ahcplomberie.fr/" },
  ],
  skills: ["languages", "tools", "frameworks"],
}



export default function TerminalPortfolio() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState<string[]>([
    " ",
  ])
  const [currentFolder, setCurrentFolder] = useState<string>("root")
  const [showChart, setShowChart] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  

const skills = {
  languages: [
    { name: "PHP", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Java", level: 70 },
    { name: "Oracle DB", level: 80 },
    { name: "SQL", level: 90 },
    { name: "PL/SQL", level: 75 },
  ] as Skill[],

  tools: [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "Postman", level: 90 },
    { name: "API / REST APIs", level: 90 },
    { name: "Docker", level: 70 },
    { name: "XAMPP", level: 80 },
    { name: "UML", level: 75 },
    { name: "Enterprise Architect", level: 70 },
  ] as Skill[],

  frameworks: [
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Laravel", level: 90 },
    { name: "Django", level: 75 },
    { name: "Flutter", level: 70 },
  ] as Skill[],
}


const skillsOptions = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => `${ctx.raw}%`,
      },
    },
  },
  scales: {
    x: {
      min: 0,
      max: 100,
      ticks: {
        callback: (value: number) => `${value}%`,
      },
    },
  },
}

const [chartData, setChartData] = useState<any>(null)


  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key !== "Enter") return

  const cmd = input.trim().toLowerCase()
  let result: string[] = []

  // CLEAR
  if (cmd === "clear") {
    setOutput([])
    setInput("")
    return
  }

  // HELP
  if (cmd === "help") {
    result = [
      "Available commands:",
      "ls - list files/folders",
      "cd <folder> - enter folder",
      "cd .. - return to root",
      "cat <file> - view file content",
      "to exit - close chart",
      "clear - clear terminal",
    ]
  }else if (cmd === "-h") {
    result = [
      "Available commands:",
      "ls - list files/folders",
      "cd <folder> - enter folder",
      "cd .. - return to root",
      "cat <file> - view file content",
      "to exit - close chart",
      "clear - clear terminal",
    ]
  }

  // LS
  else if (cmd === "ls") {
    if (currentFolder === "root") {
      result = Object.keys(terminalData)
    } 
    else if (currentFolder === "projects") {
      result = terminalData.projects.map(
        (p) => `${p.name} → ${p.url}`
      )
    } 
    else if (currentFolder === "skills") {
    result = terminalData.skills
  }
  }

  // CD ..
  else if (cmd === "cd ..") {
    if (currentFolder === "root") {
      result = ["Already at root directory."]
    } else {
      setCurrentFolder("root")
      result = ["Returned to root directory."]
    }
  }

  // CD <FOLDER>
  else if (cmd.startsWith("cd ")) {
    const folder = cmd.split(" ")[1]

    if (folder === "projects") {
      setCurrentFolder("projects")
      result = [
        "Entered folder: projects",
        "",
        "Available projects:",
        ...terminalData.projects.map(
          (p) => `- ${p.name} → ${p.url}`
        ),
      ]
    } 
    else if (folder === "skills") {
    setCurrentFolder("skills")
    result = [
      "Entered folder: skills",
      "",
      "Available skill categories:",
      "- skills languages",
      "- skills tools",
      "- skills frameworks",
    ]
  }
    else {
      result = [`Folder '${folder}' not found.`]
    }
  }

  // CAT
  else if (cmd.startsWith("cat ")) {
  const target = cmd.split(" ")[1]

  if (currentFolder !== "skills") {
    result = ["You must be inside the skills folder."]
  }

  else if (target === "languages") {
    setChartData(buildChartData(skills.languages))
    setShowChart(true)
    result = ["Displaying Programming Languages skills..."]
  }

  else if (target === "tools") {
    setChartData(buildChartData(skills.tools))
    setShowChart(true)
    result = ["Displaying Developer Tools skills..."]
  }

  else if (target === "frameworks") {
    setChartData(buildChartData(skills.frameworks))
    setShowChart(true)
    result = ["Displaying Frameworks skills..."]
  }

  else {
    result = [`Skill category '${target}' not found.`]
  }
}

  else if (cmd === "skills languages") {
  setChartData(buildChartData(skills.languages))
  setShowChart(true)
  result = ["Displaying Programming Languages skills..."]
}

else if (cmd === "skills tools") {
  setChartData(buildChartData(skills.tools))
  setShowChart(true)
  result = ["Displaying Developer Tools skills..."]
}

else if (cmd === "skills frameworks") {
  setChartData(buildChartData(skills.frameworks))
  setShowChart(true)
  result = ["Displaying Frameworks skills..."]
}

  // CHART
  else if (cmd === "chart") {
    setShowChart(true)
    result = ["Displaying skills chart..."]
  }

  // CLOSE CHART
  else if (cmd === "close chart" || cmd === "exit") {
    setShowChart(false)
    result = ["Chart closed."]
  }

  // UNKNOWN COMMAND
  else {
    result = [`Command not found: ${cmd}`]
  }

  setOutput((prev) => [...prev, `$ ${cmd}`, ...result])
  setInput("")
}


  const buildChartData = (skillList: Skill[]) => ({
  labels: skillList.map((s) => s.name),
  datasets: [
    {
      label: "Skill level (%)",
      data: skillList.map((s) => s.level),
      backgroundColor: "#3b82f6",
      borderRadius: 8,
      barThickness: 20,
    },
  ],
})


  const skillChartOptions = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => `${ctx.raw}%`,
      },
    },
  },
  scales: {
    x: {
      min: 0,
      max: 100,
      ticks: {
        callback: (value: number) => `${value}%`,
      },
    },
  },
}
  return (
    <main className="w-full px-6 flex justify-center">
  <div className="w-full max-w-5xl">
    <div className="flex flex-col gap-6 bg-black/60 backdrop-blur-md p-6 md:p-10 rounded-2xl text-white shadow-2xl">

      {/* HEADER */}
      <div className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-bold">
          👋 I'm Marwane{" "}
          <span className="text-[#7AF298]">Elhosni</span>
        </h1>

        <p className="text-sm lg:text-lg md:text-lg text-[#c0c0c0] leading-relaxed">
          I craft fast, scalable web apps. Explore my skills and projects
          using the terminal below.
          <br className="hidden sm:block" />
          Type <span className="text-[#c4a000] font-semibold">-h</span> to start
          or continue scrolling.
        </p>
      </div>

      {/* TERMINAL */}
      <div className="mt-4 bg-black/80 border border-white/10 p-4 md:p-6 rounded-xl 
                      h-[200px] md:h-[300px] lg:h-[300px] 
                      flex flex-col overflow-hidden">

        {/* OUTPUT SCROLL AREA */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-1">
          {output.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap text-sm md:text-base">
              {line}
            </div>
          ))}

          {showChart && chartData && (
            <div className="mt-4 w-full">
              <p className="text-xs text-gray-400 mb-2">
                Type "close chart" to quit
              </p>
              <Bar data={chartData} options={skillChartOptions} />
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="flex gap-2 mt-4 items-center">
          <span className="text-[#c0c0c0] text-sm md:text-base">
            marwane@/:~
            {currentFolder !== "root" && `/${currentFolder}`}$
          </span>

          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none text-[#c4a000] placeholder-[#c4a000] text-sm md:text-base"
            placeholder="type a command..."
          />
        </div>
      </div>
    </div>
  </div>
</main>
  )
}
