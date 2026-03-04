import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { LinuxIcon } from "@/components/ui/svgs/linuxIcon";
import { FastApiIcon } from "@/components/ui/svgs/fastApiIcon";
import { ExpressIcon } from "@/components/ui/svgs/expressIcon";
import { OpenAIIcon } from "@/components/ui/svgs/openAIIcon";
import { HuggingFaceIcon } from "@/components/ui/svgs/huggingFaceIcon";
import { FinetuneIcon } from "@/components/ui/svgs/finetuneIcon";
import { EmbeddingIcon } from "@/components/ui/svgs/embeddingIcon";
import { RAGIcon } from "@/components/ui/svgs/ragIcon";
import { LangChainIcon } from "@/components/ui/svgs/langChainIcon";
import { LangGraphIcon } from "@/components/ui/svgs/langGraphIcon";
import { AgentIcon } from "@/components/ui/svgs/agentIcon";
import { OllamaIcon } from "@/components/ui/svgs/ollamaIcon";
import { RedisIcon } from "@/components/ui/svgs/redisIcon";
import { MongoIcon } from "@/components/ui/svgs/mongoIcon";
import { Neo4jIcon } from "@/components/ui/svgs/neo4jIcon";
import { VectorDBIcon } from "@/components/ui/svgs/vectorDBIcon";
import { CICDIcon } from "@/components/ui/svgs/cicdIcon";

export const DATA = {
  name: "Rakshith",
  initials: "DV",
  url: "https://rakshithml.vercel.app/",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "I turn ideas into working AI and full-stack products.",
  summary:
    "I’m a Computer Science Engineering student who builds end-to-end AI and full-stack products. I’m passionate about making machines learn and turning concepts into real, usable systems. I work independently, move fast, and focus on shipping complete solutions that actually work.",
  avatarUrl: "/me.jpeg",
  skills: [
    // --- AI / LLM Engineering ---
    { name: "AI Agents", icon: AgentIcon },
    { name: "RAG Systems", icon: RAGIcon },
    { name: "LangChain", icon: LangChainIcon },
    { name: "LangGraph", icon: LangGraphIcon },
    { name: "Model Finetuning", icon: FinetuneIcon },
    { name: "Vector Embeddings", icon: EmbeddingIcon },
    { name: "Hugging Face", icon: HuggingFaceIcon },
    { name: "Ollama", icon: OllamaIcon },

    // --- Languages & Backend ---
    { name: "Python", icon: Python },
    { name: "Typescript", icon: Typescript },
    { name: "FastAPI", icon: FastApiIcon },
    { name: "Node.js", icon: Nodejs },
    { name: "Express", icon: ExpressIcon },

    // --- Frontend ---
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },

    // --- Databases & Storage ---
    { name: "Postgres", icon: Postgresql },
    { name: "Vector Databases", icon: VectorDBIcon },
    { name: "Redis", icon: RedisIcon },
    { name: "MongoDB", icon: MongoIcon },
    { name: "Neo4j (Graph DB)", icon: Neo4jIcon },

    // --- Infrastructure & DevOps ---
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Linux", icon: LinuxIcon },
    { name: "CI/CD", icon: CICDIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  // here is the all details and personal information to be added
  contact: {
    email: "rakshithml078@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rakshi001",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rakshith-m-l-785447244/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rakshith_twt",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    }
  ],
  education: [
    {
      school: "Visvesvaraya Technological University",
      href: "https://vtu.ac.in/",
      degree: "B.E in Computer Science and Engineering",
      logoUrl: "/vtu.png",
      start: "2022",
      end: "2026",
    }
  ],
  projects: [
    {
      title: "BriefBot – AI PDF Chatbot",
      href: "https://github.com/rakshi001/BriefBot",
      dates: "2025",
      active: true,
      description:
        "Document-aware chatbot that allows users to upload PDFs and ask questions about the content using Gemini AI.",
      technologies: [
        "Python",
        "Streamlit",
        "Gemini API",
        "PyPDF2",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rakshi001/BriefBot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/briefbot.png",
      video: "",
    },

    {
      title: "Mika Code – AI Coding CLI",
      href: "https://github.com/rakshi001/mika",
      dates: "2025",
      active: true,
      description:
        "Command-line AI coding assistant that generates and edits code using the Groq API with an interactive terminal interface.",
      technologies: [
        "Python",
        "Groq API",
        "CLI",
        "LLM",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rakshi001/mika",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mikacode.png",
      video: "",
    },

    {
      title: "Marine Ecosystem Guardian",
      href: "https://github.com/rakshi001/Marine-Ecosystem-Guardian",
      dates: "2025",
      active: true,
      description:
        "Interactive dashboard that analyzes marine ecosystem health, coral reef conditions, and pollution patterns.",
      technologies: [
        "Python",
        "Streamlit",
        "OpenCV",
        "Matplotlib",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rakshi001/Marine-Ecosystem-Guardian",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/marine.png",
      video: "",
    },

    {
      title: "Deep Learning Churn Prediction",
      href: "https://github.com/rakshi001/Churn_prediction",
      dates: "2025",
      active: true,
      description:
        "Neural network model that predicts customer churn using behavioral data with preprocessing, feature scaling, and evaluation.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rakshi001/Churn_prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/churn.png",
      video: "",
    },
  ]
} as const;
