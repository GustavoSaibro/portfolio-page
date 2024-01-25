"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My first contact with programming was still in highschool<i>(2011)</i>,
        when I decided to create a program to calculate quadratic formula to confirm my answer, using{" "}
        <strong>
          <em>Pascal</em>{" "}
        </strong>
        . Also in this same year I was curious to know how the internet works,
        then I started to read about internet infrastructure. After those
        events,started my passion about computer science.
      </p>

      <p className="mb-3">
        While studying <span className="font-medium">Physics</span>, I decided
        to pursue my passion for programming. So then I changed my course to{" "}
        <span className="font-medium">Information Systems</span> I started
        looking for internal jobs halfway through the course. I got my first
        intern in <span className="font-medium">data engineering</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
      </p>

      <p className="mb-3">
        My core stack is{" "}
        <span className="font-medium">
          Python, SQL<em> (PostgreSQL,Oracle,MySQL,Redshift)</em>, Apache
          Airflow, AWS, Terraform, Docker, Kubernetes and Linux.
        </span>{" "}
        But I also know web development, such{" "}
        <span className="font-medium">
          JavaScript, NestJs, Django&DjangoRest,React
        </span>
        . I am also familiar with TypeScript, Prisma, NextJs. I am always
         looking to learn new technologies. {/* I am currently looking for a{" "} 
        <span className="font-medium">full-time position</span> as a{" "}
        <span className="underline">data engineer</span>. */}
      </p>
      <p className="mb-3">
        I'm{" "}
        <span className="font-medium">
          <strong>
            <em>A.I</em>
          </strong>
        </span>{" "}
        enthusiast, I love study about, since the beggining of my graduation. I
        started to learn about <span className="font-medium">Machine Learning</span>, algorithms like 
        {" "}<span><em>Linear Regression, Logistic Regression, Support Vector Machine</em></span> and also 
        {" "}<span className="font-medium">Deep Learning</span>, tools such 
        {" "}<span className="font-medium"><em>TensorFlow,PyTorch,Keras,Anaconda</em></span>.
        My undergraduate thesis was about create an <em>ML</em> model to predict the grades from students of literature classes. For this I used Natural Language Processing techniques, to transform those texts into <strong><em>vectors</em></strong> to use them as input for <em>ML</em> model and predict grades 
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy 
        reading a book,{" "} watch a science video or a movie and listen music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and sociology</span>.
      </p>
    </motion.section>
  );
}
