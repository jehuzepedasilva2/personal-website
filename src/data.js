import battleship from './assets/battleship.png';
import tictactoe from './assets/tic-tac-toe.png';
import aztecKitchen from './assets/aztecan-kitchen.png';
import todo from './assets/todo.png';
// import etchASketch from './assets/etch-a-skecth.png';
// import algos from './assets/algos.png';
import resumeBuilder from './assets/resume-builder.png';
import clock from './assets/clock.png';
import miniMsgBoard from './assets/mini-msg-brd.png';

const personalInfo = {
  name: 'Jehu Zepeda-Silva', 
  title: 'Software Engineer', 
  statement: 'Creating innovative and scalable solutions through technology', 
  about: `Being a software engineer is like being an astronaut exploring the digital universe. 
          Just as astronauts navigate the vastness of space with a mix of skill and curiosity, software engineers navigate the ever-evolving landscape of technology, constantly discovering new possibilities and building innovative solutions to challenges. 
          I am a curious software engineer who is passionate about learning and skilled in JavaScript and React. 
          I thrive at the intersection of creativity, logic, and technology, and I am always eager to explore the ever-evolving landscape of web development. 
          I am fascinated by the universe and how computer science can deepen our understanding. 
          When not coding or stargazing, I enjoy reading, staying active, and making music on my guitar.`,
  email: 'jehuzepeda@yahoo.com',
  phone: '408-807-5334',
  location: 'Los Gatos, California 95033',
  linkedInLink: 'https://www.linkedin.com/in/jehuzepedasilva',
  githubSchoolLink: 'https://github.com/jehuzepedasilva',
  githubPersonalLink: 'https://github.com/jehuzepedasilva2',
  contactMessage: "I'd love the opportunity to connect and discuss how our work and expertise might align to create something valuable together. Please don't hesitate to reach out if you believe there's potential for a mutually beneficial collaboration, I'd be excited to explore the possibilities"
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
    projName: 'Task Manager', 
    screenShotLink: todo,
    gitLink: 'https://github.com/jehuzepedasilva2/todo-list', 
    liveLink: 'https://jehuzepedasilva2.github.io/todo-list/', 
    description: 'This responsive Todo List application provides an intuitive and visually appealing interface for managing tasks efficiently. Featuring a dark and light mode!'
  }, 
  {
    id: 3, 
    projName: 'Mini Messageboard', 
    screenShotLink: miniMsgBoard, 
    gitLink: 'https://github.com/jehuzepedasilva2/mini-message-board', 
    liveLink: 'https://mini-message-board-production-b8ae.up.railway.app/', 
    description: 'A lightweight full-stack application built with Node.js, Express, and EJS for server-side rendering. Feel free to leave me a message!'
  },
  {
    id: 4,
    projName: 'Retro Clock', 
    screenShotLink: clock,
    gitLink: 'https://github.com/jehuzepedasilva2/watch-me', 
    liveLink: 'https://watch-me.pages.dev/', 
    description: "It's just a retro style clock.. Made with love (and CSS grid). Enjoy the brightness, and pretend it's 1985."
  },
  {
    id: 5,
    projName: 'Battleship',
    screenShotLink: battleship,
    gitLink: 'https://github.com/jehuzepedasilva2/battleship', 
    liveLink: 'https://jehuzepedasilva2.github.io/battleship/',
    description: 'Test your strategy and precision with this interactive Battleship game! Built entirely with HTML, CSS, and JavaScript, this game offers a sleek and engaging experience where players can challenge themselves to sink all enemy ships on a classic grid-based battlefield.'
  }, 
  {
    id: 6,
    projName: 'Tic-Tac-Toe', 
    screenShotLink: tictactoe,
    gitLink: 'https://github.com/jehuzepedasilva2/tic-tac-toe', 
    liveLink: 'https://jehuzepedasilva2.github.io/tic-tac-toe/', 
    description: 'Challenge yourself or a friend to this timeless 2-player strategy game, now in a sleek and interactive web version. Built with a clean and responsive interface, this game delivers a smooth experience on desktop.'
  }, 
  {
    id: 7,
    projName: 'Restaurant Page', 
    screenShotLink: aztecKitchen,
    gitLink: 'https://github.com/jehuzepedasilva2/restaurant-page', 
    liveLink: 'https://jehuzepedasilva2.github.io/restaurant-page/', 
    description: 'Enter the delicious world of this fictitious restaurant. The Aztecan Kitchen!'
  }, 
  // {
  //   id: 8,
  //   projName: 'Etch-a-Sketch', 
  //   screenShotLink: etchASketch, 
  //   gitLink: 'https://github.com/jehuzepedasilva2/etch-a-sketch',
  //   liveLink: 'https://jehuzepedasilva2.github.io/etch-a-sketch/',
  //   description: 'A fun and interactive digital Etch-A-Sketch application built with HTML, CSS, and JavaScript. Users can draw on a customizable grid, adjust the grid size, and experiment with various drawing modes'
  // }, 
  // {
  //   id: 9,
  //   projName: "DSA in JavaScript", 
  //   screenShotLink: algos, 
  //   gitLink: 'https://github.com/jehuzepedasilva2/data-structures-js',
  //   liveLink: null, 
  //   description: 'Implementation of important algorithms and data structures. Done in JavaScript.'
  // }
]

export {
  projects,
  personalInfo,
}