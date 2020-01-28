import domEle from './domEle';
//function to calculate the number of pagination functions
const calcPages = number => Math.ceil(number / 3);
//this will container all the details to be displayed on the users interface
class ui {
  //this method is for data less than or equal to 3
  renderLessData(data) {}

  //this method is for data which is more than 3 and will create a new pagination
  renderPagination(data) {
    console.log(data);
    let markup = '';
    const pages = calcPages(data.data.animals.length);
    let curPage = 1;
    const arr = data.data.animals;
    let resArr = arr.map((ele, index) => {
      if (index % 3 === 0) {
        console.log(ele);
        return `
        <div class="row" id="${curPage}">
        <div class="col m4 s12">
       <div class="card main__card">
     <div class="card-image">
     <img src="${
       ele.photos.length > 0
         ? ele.photos[0].medium
         : 'https://images.unsplash.com/photo-1575425955246-0497627bef60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
     }" alt="image not available">
     </div>
       <div class="card-content">
       <span class="card-title .section__details-gradient">${ele.name} (${
          ele.age
        })</span>
         <ul class="collection">
         <li class="collection-item">Breed : ${ele.breeds.primary}</li>
         <li class="collection-item">Gender : ${ele.gender}</li>
         <li class="collection-item">Status : ${ele.status}</li>
         <li class="collection-item">Email : ${ele.contact.email}</li>
         <li class="collection-item">Phone : ${
           ele.contact.phone !== null ? ele.contact.phone[0] : 'N/A'
         },  ${ele.contact.phone !== null ? ele.contact.phone[1] : 'N/A'}</li>
         <li class="collection-item">Address : ${
           ele.contact.address.address1
         }</li>
         </ul>

       </div>
       </div>
       </div>
       
       `;
      } else if ((index + 1) % 3 === 0) {
        curPage++;
        return `   <div class="col m4 s12">
       <div class="card main__card">
       <div class="card-image">
       <img src="${
         ele.photos.length > 0
           ? ele.photos[0].medium
           : 'https://images.unsplash.com/photo-1575425955246-0497627bef60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
       }" alt="image not available">
       </div>
      
       <div class="card-content">
       <span class="card-title .section__details-gradient">${ele.name} (${
          ele.age
        })</span>
         <ul class="collection">
         <li class="collection-item">Breed : ${ele.breeds.primary}</li>
         <li class="collection-item">Gender : ${ele.gender}</li>
         <li class="collection-item">Status : ${ele.status}</li>
         <li class="collection-item">Email : ${ele.contact.email}</li>
         <li class="collection-item">Phone : ${
           ele.contact.phone !== null ? ele.contact.phone[0] : 'N/A'
         },  ${ele.contact.phone !== null ? ele.contact.phone[1] : 'N/A'}</li>
         <li class="collection-item">Address : ${
           ele.contact.address.address1
         }</li>
         </ul>

       </div>
       </div>
       </div>
       </div>`;
      } else {
        return `
        <div class="col m4 s12">
        <div class="card main__card">
        <div class="card-image">
        <img src="${
          ele.photos !== null
            ? ele.photos.length > 0
            : 'https://images.unsplash.com/photo-1575425955246-0497627bef60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
        }" alt="image not available">
     </div>
        <div class="card-content">
        <span class="card-title .section__details-gradient">${ele.name} (${
          ele.age
        })</span>
          <ul class="collection">
          <li class="collection-item">Breed : ${ele.breeds.primary}</li>
          <li class="collection-item">Gender : ${ele.gender}</li>
          <li class="collection-item">Status : ${ele.status}</li>
          <li class="collection-item">Email : ${ele.contact.email}</li>
          <li class="collection-item">Phone : ${
            ele.contact.phone !== null ? ele.contact.phone[0] : 'N/A'
          },  ${ele.contact.phone !== null ? ele.contact.phone[1] : 'N/A'}</li>
          <li class="collection-item">Address : ${
            ele.contact.address.address1
          }</li>
          </ul>
 
        </div>
        </div>
        </div>
        
        `;
      }
    });
    markup += resArr.join('');
    markup += '<ul class="pagination">';
    for (let i = 0; i < pages; i++) {
      markup += `
    <li class="waves-effect"><a href="#${i + 1}">${i + 1}</a></li>
    `;
    }
    markup += '</ul>';
    domEle.searchRes.innerHTML += markup;
  }
}

export default ui;
