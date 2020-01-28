//global controller
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import PetController from './modals/getPet';
import domEle from './views/domEle';
import ui from './views/display';
import { renderSpinner, clearSpinner } from './views/spinner';

const getPetDetails = async () => {
  //get the dom data
  const animal = domEle.animalEle.value;
  const zipCode = domEle.zipCode.value;
  //create a new pet object
  //and get the data from the server
  renderSpinner();
  const pets = new PetController();
  try {
    await pets.getPets(animal, zipCode);
    clearSpinner();
    const UI = new ui();
    if (pets.results.data.animals.length <= 3) {
      UI.renderLessData(pets.results);
    } else {
      UI.renderPagination(pets.results);
    }
  } catch (err) {
    console.log(err);
    clearSpinner();
  }
};
//event listener for the click button event
domEle.submBtn.addEventListener('click', e => {
  e.preventDefault();
  getPetDetails();
});
