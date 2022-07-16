import './styles/main.scss'
import './ornek.ts'
import laughing from './img/laughing.svg'
import sakaOlusturucu from './sakaOlusturucu';

console.log('index.js ile - Hello World');

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', sakaOlusturucu)

sakaOlusturucu()