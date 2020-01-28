import { clearSpinner } from '../views/spinner';
const petfinder = require('@petfinder/petfinder-js');
class PetController {
  constructor() {
    (this.apiKey = 'xqZBvUQQulDmMVGy2SauMdCl4RjzRuju1QPlAn2j03IWxj7iZR'),
      (this.secret = 'f77ygkz3LqW4Kc5p5ey5qJPHYcUAeVlckjRF7R2o');
  }
  async getPets(antype, zip) {
    const client = new petfinder.Client({
      apiKey: this.apiKey,
      secret: this.secret
    });
    const data = await client.animal.search({ type: antype, location: zip });
    this.results = data;
  }
}

export default PetController;

//const fetchAnimals = () => {
//   client.animal
//     .search({ type: animal, location: zipCode })
//     .then(response => console.log(response))
//     .catch(err => console.log(err));
// };
// fetchAnimals();

// const client = new petfinder.Client({
//   apiKey: 'xqZBvUQQulDmMVGy2SauMdCl4RjzRuju1QPlAn2j03IWxj7iZR',
//   secret: 'f77ygkz3LqW4Kc5p5ey5qJPHYcUAeVlckjRF7R2o'
// });
