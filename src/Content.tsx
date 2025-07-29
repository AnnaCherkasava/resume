import React from "react";
import { education, experiences, languages, skills } from "./data";



const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold border-b pb-1 mb-4 dark:border-neutral-700">{title}</h2>
    {children}
  </section>
);

const Content: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto p-6 lg:p-10 font-sans text-neutral-800 dark:text-neutral-200">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Hanna Cherkasava</h1>
        <p className="text-lg">Senior Software Developer</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 space-x-5">
          <span>Poznan, Poland</span>                 
          <span>khomich10@gmail.com</span>
          <span>+48 572 292 913</span>
          <a href="https://www.linkedin.com/in/hanna-cherkasava-5608981a8/">Linkedin link</a>
        </p>
      </header>

      {/* Skills */}
      <Section title="Skills">
        <ul className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <li
              key={skill}
              className="bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-sm shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section title="Work Experience">
        {experiences.map(exp => (
          <div key={`${exp.title}-${exp.company}`} className="mb-6">
            <h3 className="text-xl font-medium">
              {exp.title}
            </h3>
            <h2 className="text-xl font-medium">
              <span className="font-normal text-neutral-600 dark:text-neutral-400">{exp.company}</span>
            </h2>
            <p className="text-sm italic mb-2 text-neutral-600 dark:text-neutral-400">{exp.period}</p>
            <ul className="list-disc list-inside space-y-1">
              {exp.bullets.map(b => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      {/* Education */}
      <Section title="Education">
        {education.map(edu => (
          <div key={edu.institution} className="mb-4">
            <h2 className="text-lg font-medium">{edu.institution}</h2>
            <h3>{edu.program}</h3>
            <p className="text-sm italic text-neutral-600 dark:text-neutral-400">{edu.period}</p>
          </div>
        ))}
      </Section>

      {/* Languages */}
      <Section title={languages.heading}>
        <ul className="list-disc list-inside space-y-1">
          {languages.items.map(l => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </Section>
    </main>
  );
};

export default Content;
