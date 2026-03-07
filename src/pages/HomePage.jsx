import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { SEO } from "@/components/SEO";
import { SpaceRunner } from "@/components/SpaceRunner";

export const HomePage = () => {
    return (
        <>
            <SEO
                title="Sahrul Rafi ✌ | Software Engineer"
                description="A software engineer with over 3 years of professional experience specializing in React, Nest.js, and TypeScript. I build scalable, performant web applications."
            />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <SpaceRunner />
        </>
    );
};
