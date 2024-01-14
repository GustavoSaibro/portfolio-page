import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import supermarket from "@/public/supermarket.png"
import deposit from "@/public/deposit.png"
import astar from "@/public/astar.png"
import full_page from "@/public/full_page_app.png"
import tcc from "@/public/TCC.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Start of my college",
    location: "Florianópolis, SC",
    description:
      "Started the undergraduate degree in Information Systems, where learned the fundamentals of computer science, bussiness, software engineering, project management.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2017 - Dec 2022",
  },
  {
    title: "Data Engineer intern",
    location: "Florianópolis, SC",
    description:
      "Internship to data engineering to learn the basics of maintaining databases, general concepts of database governance, managing users and tables, running required queries to get data for reports.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2019 - Dec 2019",
  },
  {
    title: "Data Scientist intern",
    location: "Florianópolis, SC",
    description:
      "Internship of data science to learn the basics concepts about data cleaning, data visualization, machine learning concepts, models,data dictionaries. The main goal was to organize the data in order to extract business insights, and to give an direction to decisions based in data.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2019 - Dec 2019",
  },
  {
    title: "Quality Assurance",
    location: "Florianópolis, SC",
    description:
      "Quality assurance of the software PEC, using techniques like black box testing, white box testing, regression testing, data validation, charge testing, security testing, graphQL testing. This software is used in almost every brazilians basic health facilities. Team lead of a new project, leading the QA team.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2021 - Mar 2022",
  },
  {
    title: "Data Engineer",
    location: "Florianópolis, SC",
    description:
      "Development and design a application to consumes external data from APIs to populate a database, merging multiple data sources, this application uses technologies like NodeJs, NestJs, GraphQL, Axios, RabbitMQ. Also worked in a legacy project, maintaining and improving the legacy software, to add new features and improve performance of the micro-services.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 - Feb 2023",
  },
  {
    title: "Data Engineer",
    location: "Florianópolis, SC",
    description:
      "Data engineer that works in multiple projects, using different stacks to deal with big data. Currently in an international project, using technologies like Apache Airflow, Embulk, Meltano, Airbyte, Kubernetes, AWS. Also using infrastructure as a code with Terraform, provisioning the needed inftrastructure to the project. Data engineer that works in multiple projects, using different stacks to deal with big data. Currently in an international project, using technologies like Apache Airflow, Embulk, Meltano, Airbyte, Kubernetes, AWS. Also using infrastructure as a code with Terraform, provisioning the needed inftrastructure to the project. ",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Supermarket",
    description:
      "This was my very first project in college written in Java using object oriented programming.",
    tags: ["Java", "OOP"],
    imageUrl: supermarket,
  },
  {
    title: "Deposit",
    description:
      "Created a deposit system for a grad in college with Java.",
    tags: ["Java", "OOP", "Tests"],
    imageUrl: deposit,
  },
  {
    title: "A*",
    description:
      "Implementing A* algorithm with python.",
    tags: ["Python","A*", "Data Structure"],
    imageUrl: astar,
  },
  {
    title: "Cryptography",
    description:
      "Implementing file encryption with AES and PBKDF2 using python, using Fernet Keys to store password in a security maner.",
    tags: ["Python","AES", "Fernet Key","PBKDF2","Cryptography"],
    imageUrl: astar,
  },
  {
    title: "Full Page App",
    description:
      "Implementing a VueJs Single Page to deal with political data to give transparency about how public finds are spent.",
    tags: ["VueJs","SCSS", "HTML","API","Rest"],
    imageUrl: full_page,
  },
  {
    title: "Undergraduate Thesis",
    description:
      "This project aimed to develop a predictive model for student text grades using NLP techniques.",
    tags: ["JupyterNotebook","Spacy", "PyTorch","BERT","Scikit-learn", "TF-IDF", "POS", "NER", "ML"],
    imageUrl: tcc,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Nest.js",
  "Node.js",
  "Git",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Django",
  "SQL",
  "NLP",
  "Machine learning",
  "BERT",
  "Linux",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "Airflow",
  "Meltano",
  "Embulk",
  "AWS",
  "Redshift",
  "MySQL",
  "OracleDB",
  "AWS-DMS"
] as const;
