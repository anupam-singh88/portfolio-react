const yourName = 'Anupam Singh';

export const heroData = {
    name: yourName,
    type: 'MERN Stack Developer',
    // Same substring at the start will only be typed out once, initially
    // wait 1s before replacing "next value" 
    autoText: ['I am a MERN stack developer', 1000, 'I develop website using ReactJS,Nodejs', 1000, 'I am a ReactJS Developer', 1000, 'I am a NodeJS Developer', 1000],
    profileImgPath: "/images/profile.jpg",
    msg: 'Passionate JavaScript Developer with a year of experience specializing in ReactJS and NodeJS. Proficient in HTML, CSS, JS, MongoDB, PHP, SQL, and Git. Currently seeking opportunities in ReactJS or MERN stack development where I can leverage my skills to build innovative solutions. Let’s connect and create something amazing together!.'
}

// --------------------------------------- Project List
export const ProjectList = [
    {
        img: "images/meri_dukan_pic.png",
        title: "Meri Dukan React Ecommerce",
        description: "Meri Dukan is an e-commerce application built with React.js.",
        tech_stack: "React.js, BrowserAuth",
        github_url: "https://github.com/anupam-singh88/meri-dukan-react-ecommerce",
        demo_url: "https://meri-dukan-react-ecommerce.netlify.app/",
    },
    {
        img: "images/blog-master.png",
        title: "Blog-Master NodeJs",
        description: "Blog-Master is a comprehensive blogging application built with Node.js, EJS, and MongoDB.",
        tech_stack: "Nodejs, EJS, MongoDB",
        github_url: "https://github.com/anupam-singh88/blog_master",
        demo_url: "https://blog-master.onrender.com/",
    },
    {
        img: "images/mern-todo.png",
        title: "MERN Todo App",
        description: "This is a comprehensive application designed to manage your todos effectively and efficiently.",
        tech_stack: "MongoDB,ExpressJs, ReactJs, NodeJS",
        github_url: "https://github.com/anupam-singh88/mern-todo-app",
        demo_url: "https://mern-todo-app-4e58b.web.app/",
    },
    {
        img: "images/registration-form-node.png",
        title: "Form in Node.js & MongoDB",
        description: "This is a registration form application built with Node.js, Express, and MongoDB with all validations.",
        tech_stack: "MongoDB, ExpressJs, NodeJS",
        github_url: "https://github.com/anupam-singh88/node-registration-form",
        demo_url: "https://anupam-singh88.github.io/node-registration-form/",
    },
    {
        img: "images/netflix.png",
        title: "Netflix Movie App ",
        description: "This project is a simple movie app created using React.js. It dynamically displays movie posters fetched from a movie database.",
        tech_stack: "ReactJS, Movies API",
        github_url: "https://github.com/anupam-singh88/netflix-movie-app",
        demo_url: "https://netflix-clone-bb923.web.app/",
    },
    {
        img: "images/git-proj.png",
        title: "GitHub Profile Viewer",
        description: " The application uses the GitHub API to dynamically fetch user details  and shows all the followers and repositories of the user.",
        tech_stack: "HTML, CSS, JAVASCRIPT",
        github_url: "https://github.com/anupam-singh88/github_profiles",
        demo_url: "https://anupam-singh88.github.io/github_profiles/",
    },
    {
        img: "images/movie-proj.png",
        title: "Movie App JavaScript",
        description: "The application uses the MovieDB API to dynamically fetch all the movies as entered in the input box and shows all the movies as searched.",
        tech_stack: "HTML, CSS, JAVASCRIPT",
        github_url: "https://github.com/anupam-singh88/movie_app",
        demo_url: "https://anupam-singh88.github.io/movie_app/",
    },

];

// --------------------------------------- Skills

export const stackList = [
    {
        img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/html5.svg",
        name: "HTML",
    },
    {
        img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/css3.svg",
        name: "CSS",
    },
    {
        img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/javascript.svg",
        name: "JavaScript",
    },
    {
        img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/react.svg",
        name: "ReactJS",
    },
    // {
    //   img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/bootstrap.svg",
    //   name: "Bootstrap",
    // },
    {
        img: "images/nodejs.png",
        name: "NodeJS",
    },
    {
        img: "images/mongodb.png",
        name: "MongoDB",
    },
    {
        img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/git.svg",
        name: "Git",
    },
    {
        img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/responsive.svg",
        name: "Responsive",
    },
    {
        img: "images/php.png",
        name: "PHP",
    },
];


export const socialLinks = {
    linkedIn: "https://www.linkedin.com/in/anupam-singh-a88787238/",
    github: "https://github.com/anupam-singh88",
    twitter: "https://twitter.com/AnupamS71969817",
    emailId: 'anupamsingh2389@gmail.com',
    whatsapp: '7065169819'
}

export const resumePath = {
    rPath: "/uploads/anupam_resume_mern.pdf"
}