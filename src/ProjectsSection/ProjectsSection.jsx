import ProjectCard from "../Components/Project-Card/ProjectCard";
import styling from './ProjectSection.module.css';
const projectLogoLocation  = process.env.PUBLIC_URL + '/assets/projects.png';
const projects = [
    {
        title: "ImageSage",
        source: process.env.PUBLIC_URL + '/assets/imagesage.png',
        description: "ImageSage is a dynamic project that combines React, Node.js, and MongoDB, fortified by Auth0 authentication. It facilitates image discovery, downloading, and organization, empowering users with features such as favorites and download history. It's a versatile platform for image-related exploration and management, shaped by modern web technologies.",
        deployed: "https://imagesage.netlify.app",
        github: "https://github.com/techlism/imagesage-frontend",
        tags: ["React", "Nodejs", "MongoDB","Auth0"]
    },
    {
        title: "ICISS 2024",
        source: process.env.PUBLIC_URL + '/assets/iciss.png',
        description: "ICISS, a React-based conference website, simplifies the conference experience for both attendees and organizers. It offers a clean, user-friendly interface for registration and accessing vital event information. ICISS showcases the power of React in creating efficient, intuitive web solutions for conferences.",
        deployed: "https://iciss2024.in",
        github: "https://github.com/techlism/ICISS-2024-Website",
        tags: ["React","HTML","CSS","Bootstrap"]
    },
    {
        title: "A Wordle Game",
        source: process.env.PUBLIC_URL + '/assets/wordle.png',
        description: "This is a web-based word puzzle game that challenges players to guess a secret 5-letter word. The game harnesses the power of AJAX to fetch the word from an external API, ensuring a fresh and unique challenge every time. With a sleek HTML, CSS, and JavaScript interface, it provides an engaging and interactive gaming experience that puts players' word skills to the test.",
        deployed: "https://wordle.techlism.in",
        github: "https://github.com/techlism/wordle-javascript",
        tags: ["AJAX","HTML","CSS","JavaScript"]
    },
    {
        title: "LearnJs",
        source: process.env.PUBLIC_URL + '/assets/learnjs.png',
        description: `"LearnJS" is a user-friendly JavaScript learning website that hosts code snippets on Pastebin. Each snippet is accompanied by comments and reference links, creating an effective learning experience.`,
        deployed: "https://learnjs.techlism.in",
        github: "https://github.com/techlism/Js-Project",
        tags: ["HTML","CSS","Pastebin"]
    },
    {
        title: "Advice Generator",
        source: process.env.PUBLIC_URL + '/assets/advicegenerator.png',
        description: `"Advice Generator" is a minimalistic project that retrieves random advice from a backend API upon each page load, offering users instant pearls of wisdom.`,
        deployed: "https://advicegenerator-frontend.netlify.app",
        github: "https://github.com/techlism/advice-generator",
        tags: ["HTML","CSS","AJAX"]
    },
    {
        title: "Random Password Generator",
        source: process.env.PUBLIC_URL + '/assets/randompass.png',
        description: `The "Random Password Generator" is a user-friendly project that employs JavaScript, HTML, and CSS to create strong and unique passwords effortlessly.`,
        deployed: "https://techlism-randompassword.netlify.app/",
        github: "https://github.com/techlism/Random-Password-Generator",
        tags: ["HTML","CSS","JavaScript"]
    }
];


const ProjectSection = () => {
    return (
        <div className={styling.ProjectSectionMain}>
            <div className={styling.heading}>
                <img src={projectLogoLocation} alt="projects logo"/>
                <h1>Some of my Projects</h1>
            </div>
            <div className={styling.ProjectSection}>
                {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                source={project.source}
                                description={project.description}
                                deployed={project.deployed}
                                github={project.github}
                                tags={project.tags}
                            />
                ))}
            </div>
 
        </div>
    );
}

export default ProjectSection;