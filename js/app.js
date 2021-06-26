const navbarList = document.getElementById('navbar_list');

const sections = document.querySelectorAll('section');



let sectionNameArray = []
let sectionIdArray = []

for (let section of sections){
    
    sectionNameArray.push(section.getElementsByTagName('h2')[0].textContent)

    sectionIdArray.push(`#${section.id}`)
    
}

// build the navbar

function buildNav(){
    
    for (let i = 0; i < sectionNameArray.length; i++) {
    const liElement = document.createElement('li');
    liElement.classList = 'navbar_item';
    const aElement = document.createElement('a');
    liElement.appendChild(aElement);
    navbarList.appendChild(liElement);
    

    // adds corresponding id 
        
    liElement.innerHTML = `<a href='${sectionIdArray[i]}' > ${sectionNameArray[i]} </a>`;
    }
}

buildNav()


