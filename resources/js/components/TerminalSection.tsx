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
    { name: "Portfolio", url: "https://your-portfolio.com" },
    { name: "E-commerce App", url: "https://shop.example.com" },
    { name: "Admin Dashboard", url: "https://dashboard.example.com" },
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
      "cd skills - enter skills folder",
        "cat <languages | tools | frameworks> - show skill levels",
        "exit - close chart",
      "close chart / exit - close chart",
      "clear - clear terminal",
    ]
  }else if (cmd === "-h") {
    result = [
      "Available commands:",
      "ls - list files/folders",
      "cd <folder> - enter folder",
      "cd .. - return to root",
      "cat <file> - view file content",
      "chart - show skills chart",
      "close chart / exit - close chart",
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
    <main className="flex w-full h-full max-w-4xl font-mono justify-start">
      <div className="flex flex-col max-w-3xl gap-3 bg-black/50 p-8 rounded-2xl font-mono text-white">
        <h1 className="text-2xl font-bold">👋 I'm Marwane <span className="text-[#c0c0c0]">Elhosni</span></h1>
        <p className="text-lg text-[#c0c0c0]">
          I craft fast, scalable web apps. Explore my skills and projects using the terminal below. <br />
          -h to start or continue scrolling.
        </p>

        {/* Terminal */}
        <div className="mt-6 bg-black/70 p-4 rounded-xl min-h-55 flex flex-col overflow-y-auto">
          {output.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}

          <div className="flex gap-2 mt-2">
            <span className="text-[#c0c0c0]">
                marwane@/:~{currentFolder !== "root" && `/${currentFolder}`}$
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent outline-none text-[#c4a000] placeholder-[#c4a000]"
              placeholder="type a command..."
            />
          </div>

          {/* Chart */}
          {showChart && chartData && (
  <div className="mt-4 w-full">
    Type "close chart" to quit
    <Bar data={chartData} options={skillChartOptions} />
  </div>
)}
        </div>

        
      </div>
    </main>
  )
}
