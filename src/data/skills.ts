import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";


// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import SolidjsSvg from "@/public/icons/solidjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming Languages",
    skills: [
      {
        name: "PHP",
        icon: PythonSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
    ],
  },
  {
    sectionName: "Frameworks",
    skills: [
      {
        name: "Laravel",
        icon: SiExpress,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
      {
        name: "React.js",
        icon: ReactjsSvg,
      },
      {
        name: "LangGraph",
        icon: ReactjsSvg,
      },
    ],
  },
  {
    sectionName: "Database",
    skills: [
      {
        name: "MySQL",
        icon: PostgressSvg,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "MSSQL",
        icon: PostgressSvg,
      },
    ],
  },
  {
    sectionName: "Technologies & Tools",
    skills: [
      {
        name: "3rd Party API Integration",
        icon: PostmanSvg,
      },
      {
        name: "MCP",
        icon: GitSvg,
      },
      {
        name: "Langchain",
        icon: PythonSvg,
      },
      {
        name: "RESTful API",
        icon: PostmanSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Custom HomeLab",
        icon: AwsSvg,
      },
      {
        name: "Google OR Tools",
        icon: GitSvg,
      },
    ],
  },

];
