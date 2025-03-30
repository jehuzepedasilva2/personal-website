import battleship from './assets/battleship.png';
import tictactoe from './assets/tic-tac-toe.png';
import aztecKitchen from './assets/aztecan-kitchen.png';
import todo from './assets/todo.png';
import etchASketch from './assets/etch-a-skecth.png';
import algos from './assets/algos.png';
import resumeBuilder from './assets/resume-builder.png';

const personalInfo = {
  name: 'Jehu Zepeda-Silva', 
  title: 'Software Engineer', 
  statement: 'Creating innovative and scalable solutions through technology', 
  about: `Endlessly curious and driven by a passion for learning, I’m a software engineer who thrives at the intersection of creativity, logic, and technology. 
          I have a deep love for JavaScript, React, and the ever-evolving world of web development. There’s always something new to explore, and that’s exactly what fuels me. 
          Outside of coding, I am fascinated by the vastness of the universe and the potential for computer science to help us understand it. 
          Whether it’s building on Earth or dreaming beyond it, I’m excited by how software can push boundaries. When I’m not coding or stargazing, you’ll find me reading, staying active, or making music on my guitar.`,
  email: 'jehuzepeda@yahoo.com',
  phone: '408-807-5334',
  location: 'Los Gatos, California 95033',
  linkedInLink: 'https://www.linkedin.com/in/jehuzepedasilva',
  githubSchoolLink: 'https://github.com/jehuzepedasilva',
  githubPersonalLink: 'https://github.com/jehuzepedasilva2',
  contactMessage: "I'd love the opportunity to connect and discuss how our work and expertise might align to create something valuable together. Please don't hesitate to reach out if you believe there's potential for a mutually beneficial collaboration—I'd be excited to explore the possibilities"
}

const projects = [
  {
    id: 1,
    projName: 'Resume Builder', 
    screenShotLink: resumeBuilder,
    gitLink: 'https://github.com/jehuzepedasilva2/cv-app',
    liveLink: 'https://cv-app-dd8.pages.dev/', 
    description: 'This app allows users to customize their resume directly on a preformatted layout. Fields are editable inline, making the resume creation process intuitive and efficient. Once complete, users can export their resume as a high-quality PDF with a single click.'
  },
  {
    id: 2,
    projName: 'Todo List', 
    screenShotLink: todo,
    gitLink: 'https://github.com/jehuzepedasilva2/todo-list', 
    liveLink: 'https://jehuzepedasilva2.github.io/todo-list/', 
    description: 'This responsive Todo List application provides an intuitive and visually appealing interface for managing tasks efficiently. Featuring a dark and light mode!'
  }, 
  {
    id: 3,
    projName: 'Battleship',
    screenShotLink: battleship,
    gitLink: 'https://github.com/jehuzepedasilva2/battleship', 
    liveLink: 'https://jehuzepedasilva2.github.io/battleship/',
    description: 'Test your strategy and precision with this interactive Battleship game! Built entirely with HTML, CSS, and JavaScript, this game offers a sleek and engaging experience where players can challenge themselves to sink all enemy ships on a classic grid-based battlefield.'
  }, 
  {
    id: 4,
    projName: 'Tic-Tac-Toe', 
    screenShotLink: tictactoe,
    gitLink: 'https://github.com/jehuzepedasilva2/tic-tac-toe', 
    liveLink: 'https://jehuzepedasilva2.github.io/tic-tac-toe/', 
    description: 'Challenge yourself or a friend to this timeless 2-player strategy game, now in a sleek and interactive web version. Built with a clean and responsive interface, this game delivers a smooth experience on desktop.'
  }, 
  {
    id: 5,
    projName: 'Restaurant Page', 
    screenShotLink: aztecKitchen,
    gitLink: 'https://github.com/jehuzepedasilva2/restaurant-page', 
    liveLink: 'https://jehuzepedasilva2.github.io/restaurant-page/', 
    description: 'Enter the delicious world of this fictitious restaurant. The Aztecan Kitchen!'
  }, 
  {
    id: 6,
    projName: 'Etch-a-Sketch', 
    screenShotLink: etchASketch, 
    gitLink: 'https://github.com/jehuzepedasilva2/etch-a-sketch',
    liveLink: 'https://jehuzepedasilva2.github.io/etch-a-sketch/',
    description: 'A fun and interactive digital Etch-A-Sketch application built with HTML, CSS, and JavaScript. Users can draw on a customizable grid, adjust the grid size, and experiment with various drawing modes'
  }, 
  {
    id: 7,
    projName: "DSA in JavaScript", 
    screenShotLink: algos, 
    gitLink: 'https://github.com/jehuzepedasilva2/data-structures-js',
    liveLink: null, 
    description: 'Implementation of important algorithms and data structures. Done in JavaScript.'
  }
]

export {
  projects,
  personalInfo,
}