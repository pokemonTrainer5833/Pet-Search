//global controller
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
const petfinder = require('@petfinder/petfinder-js');
const client = new petfinder.Client({
  apiKey: 'xqZBvUQQulDmMVGy2SauMdCl4RjzRuju1QPlAn2j03IWxj7iZR',
  secret: 'f77ygkz3LqW4Kc5p5ey5qJPHYcUAeVlckjRF7R2o'
});
const fetchAnimals = () => {
  client.animal
    .search({ type: 'Barnyard', location: '90210' })
    .then(response => console.log(response))
    .catch(err => console.log(err));
};

//event listener for the click button event
document.querySelector('.submit__btn').addEventListener('click', e => {
  e.preventDefault();
});
