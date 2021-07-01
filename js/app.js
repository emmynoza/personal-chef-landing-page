const navbarList = document.getElementById('navbar_list');
const sections = document.querySelectorAll('section');

const sectionNameArray = []
const sectionIdArray = []

// extract id and names of sections
for (let section of sections){
    
    sectionNameArray.push(section.getElementsByTagName('h2')[0].textContent)

    sectionIdArray.push(`${section.id}`)
    
}
// build the navbar

function buildNav(){
    
    for (let i = 0; i < sectionIdArray.length; i++) {
    const liElement = document.createElement('li');
    liElement.classList = 'navbar_item';
    liElement.id = `${sectionIdArray[i]}_nav`.toLowerCase();
    const aElement = document.createElement('a');
    liElement.appendChild(aElement);
    navbarList.appendChild(liElement);
    
    // adds corresponding id 
        
    liElement.innerHTML = `<a href='#${sectionIdArray[i]}' >${sectionNameArray[i]}</a>`;
    }



}

buildNav()

// checks if section container is in viewport

function isInViewport (elem) {

    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 && 
        bounding.right <= (window.innerWidth || document.documentElement.innerWidth)&&
        bounding.bottom <= (window.innerHeight || document.documentElement.innerHeight)
    );
}

    
//  change landing_container collection into an array
let landingContainers = document.getElementsByClassName('landing_container');

const containerArray = [...landingContainers];

// add an active style when section is in view
containerArray.forEach(container => {
    
    let elemId = container.parentElement.id;
    let navItem = document.getElementById(`${elemId}_nav`)

    window.addEventListener('scroll', (e)=>{

        if (isInViewport(container)){
            container.classList.add('landing_active');
            navItem.classList.add('nav_active')

        } else {
            container.classList.remove('landing_active');
            navItem.classList.remove('nav_active');
        };

    })
    
    navItem.addEventListener('click', (e)=>{
        console.log(navItem);
    })

})

// add scroll behavior

