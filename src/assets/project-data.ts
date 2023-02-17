import { ProjectData } from '../types/ProjectData';

const projects: ProjectData[] = [
  {
    link: 'https://crystalbox.herokuapp.com',
    title: 'Crystal Box RFID System',
    text: 'A web application for managing RFID tags and their associated data. This is a group project developed using React, Node.js, Express, and MongoDB for the Website, and Python for the Hardware.',
    date: new Date('9 Sep 2022 00:00:00 GMT')
  },
  {
    link: 'https://omalk98.github.io/react-vite-weatherapp',
    title: 'React Weather App',
    text: 'A Weather App developed using React and the OpenWeatherMap API. This project was bootstrapped with Vite and BootstrapCSS. It utilizes Google Maps API to display the search location.',
    date: new Date('19 Oct 2021 00:00:00 GMT')
  }
];

export default projects;
