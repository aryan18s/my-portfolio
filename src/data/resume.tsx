import { Icons } from "@/components/icons";
import { HomeIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Aryan Sojitra",
  initials: "AS",
  url: "",
  location: "Surat, India",
  locationLink: "https://www.google.com/maps/place/surat",
  description:
    "Computer Engineer fine tuning things and helping people.",
  summary:
  "Curious about how data turns into decisions, I’m currently pursuing Computer Engineering at SCET, Surat. I work primarily in Data Science, Machine Learning, and AI, building models on real world datasets with a strong focus on data preprocessing, statistical analysis, and meaningful evaluation. My area of Interest includes developing ML pipelines, experimenting with predictive models, and applying AI to practical problems rather than demos. I believe consistency and learning matter more than buzzwords. Outside academics, I enjoy tea, sports, and meeting people who are equally curious about technology and its impact.",
  avatarUrl: "/pfp.jpeg",
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C/C++",
    "React.js",
    "Next.js",
    "React Query",
    "Node.js",
    "Express.js",
    "FastAPI",
    "LangChain",
    "LangGraph",
    "RAG",
    "OpenAI",
    "Prompt Engineering",
    "Agents",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Git",
    "Docker",
    "Kubernetes (basic)",
    "GitHub Actions",
    "CI/CD",
    "AWS (EC2, S3)",
    "Shell Scripting",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "PyTorch",
    "Exploratory Data Analysis (EDA)",
    "Feature Engineering",
    "Model Evaluation & Metrics",
    "Statistics & Probability",
    "Transformers (Hugging Face)",
    "Vector Databases (FAISS) (Basic)"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", isExternal: false },
    // { href: "https://drive.google.com/file/d/1GnrFI7o-9FXI2scUF5sjHrYnhzPAEgzB/view?usp=drive_link", icon: FileText, label: "Resume", isExternal: true },
  ],
  contact: {
    email: "aryansoa113@gmail.com",
    tel: "+91 9265840696",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aryan18s",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aryan-sojitra/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/thearyansojitra",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aryansoa113@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  
  education: [
    {
      school: "P.P.Savani Vidhyabhavan",
      href: "",
      degree: "Higher Secondary",
      logoUrl: "",
      start: "2020",
      end: "2022",
    },
    {
      school: "Sarvajanik College of Engineering and Technology (SCET), Surat",
      href: "https://scet.ac.in/",
      degree: "Bachelor of Technology in Computer Engineering",
      logoUrl: "https://scet.ac.in/theme/default//assets/images/logo-footer.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "InterVue AI",
      href: "https://intervuee.vercel.app",
      dates: "August 2025",
      active: true,
      description:
        "An AI-powered interview platform with a real-time conversational agent that analyzes candidate responses, generates structured feedback, performs multi-skill performance scoring, and stores searchable interview insights using scalable ML pipelines.",
      technologies: [
        "Next.js",
        "Typescript",
        "Python",
        "Email Js",
        "Random Forest Model",
        "React",
      ],
      links: [
        {
          type: "Website",
          href: "https://intervuee.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kishan-Solanki/InterVue-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://utfs.io/f/zPjnl6p73EdYGdi6Rsc9vA5a29fiNJWckwsLzEoPHQgVjUBS",
      video:
        "",
    }
  ],
} as const;
