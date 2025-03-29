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
  about: "I am a recent graduate from UC Berkeley with a Bachelor's in Computer Science, where I cultivated a passion for problem-solving, innovation, and lifelong learning. Outside the world of coding and technology, fitness is an essential part of my routine, helping me stay focused and energized. I also love playing guitar. When I'm not working on personal projects or pursuing my professional goals, I spend quality time with my two dogs, Yarpi and Yukka. Yarpi is a charming Pug-Shih Tzu mix, while Yukka is a Pomeranian. I am driven by curiosity and the desire to learn, grow, and make a meaningful impact. Whether it's taking on challenging projects, exploring new technologies, or finding creative solutions, I embrace every opportunity to push boundaries and expand my horizons."
}

const projects = [
  {
    id: 1,
    projName: 'Resume Builder', 
    screenShotLink: resumeBuilder,
    gitLink: 'https://github.com/jehuzepedasilva2/cv-app',
    liveLink: 'https://cv-app-dd8.pages.dev/', 
    description: 'This interface allows you to customize your resume quickly and easily, with all changes appearing in real-time. Once you’re satisfied with your resume, you can proceed to download it! Created with React'
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