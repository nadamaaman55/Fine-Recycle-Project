var Parant=document.getElementById("box-containerID");

function createBox(imageSrc, title, description, leather,price,location,phone) {

    iconClasses=['fa-location', 'fa-phone', 'fa-layer-group', 'fa-dollar'];
    const boxDiv = document.createElement('div');
    boxDiv.classList.add('box');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = '';
    imageDiv.appendChild(image);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    const favBtnDiv = document.createElement('div');
    favBtnDiv.classList.add('fav-btn');
    const favIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    favIconSvg.classList.add('fav-icon');
    favIconSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    favIconSvg.setAttribute('viewBox', '0 0 24 24');
    favIconSvg.setAttribute('fill', 'none');
    favIconSvg.setAttribute('stroke', 'currentColor');
    favIconSvg.setAttribute('stroke-width', '2');
    favIconSvg.setAttribute('stroke-linecap', 'round');
    favIconSvg.setAttribute('stroke-linejoin', 'round');
    favIconSvg.setAttribute('width', '24');
    favIconSvg.setAttribute('height', '24');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z');
    favIconSvg.appendChild(path);
    favBtnDiv.appendChild(favIconSvg);
    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');
    iconClasses.forEach(className => {
        const span = document.createElement('h2');
        const icon = document.createElement('i');
        const pragraph = document.createElement('p');
        pragraph.style.display="inline";
        span.style.textAlign="center";
        span.style.color="#85D5BC"
        icon.classList.add('fas', className);
        span.appendChild(icon);
        iconsDiv.appendChild(span);

        if(className=="fa-layer-group"){
            pragraph.innerText=leather;
            span.appendChild(pragraph);

        }else if(className=="fa-location"){
            span.addEventListener("click",function(){alert(location);});
            span.style.cursor="pointer";
        }
        else if(className=="fa-dollar"){
            pragraph.innerText=price;
            span.appendChild(pragraph);
        }else {
            span.addEventListener("click",function(){alert(phone);});
            span.style.cursor="pointer";
        }
    });

    contentDiv.appendChild(descriptionElement);
    contentDiv.appendChild(favBtnDiv);
    contentDiv.appendChild(iconsDiv);

    // Append image and content containers to the main box container
    boxDiv.appendChild(imageDiv);
    boxDiv.appendChild(contentDiv);

    // Append the main box container to the document body or any other parent element

    Parant.appendChild(boxDiv);
}

var array=[
  {
      image:"../images/wood1.jpg",
      title:"Top-Grain Wood",
      description:"30 pounds of Top-grain wood is slightly corrected and sanded to remove imperfections, offering a smooth surface with natural markings and excellent durability.",
      prise:'1200',
      categeory:'Wood',
      location:"https://maps.app.goo.gl/JJxTqEAiPvixr8nz9",
      phone:"01176534902"
  }, {
      image:"../images/wood3.jpg",
      title:"Top-Grain Wood",
      description:"30 pounds of Top-grain wood is slightly corrected and sanded to remove imperfections, offering a smooth surface with natural markings and excellent durability.",
      prise:'3000',
      categeory:'Wood',
      location:"https://maps.app.goo.gl/JJxTqEAiPvixr8nz9",
      phone:"01276534210"
  }, {
      image:"../images/wood5.jpg",
      title:"Top-Grain Wood",
      description:"30 pounds of Top-grain wood is slightly corrected and sanded to remove imperfections, offering a smooth surface with natural markings and excellent durability.",
      prise:'9005',
      categeory:'Wood',
      location:"https://maps.app.goo.gl/JJxTqEAiPvixr8nz9",
      phone:"010848734634"
  }, {
      image:"../images/wood6.jpg",
      title:"Top-Grain Wood",
      description:"30 pounds of Top-grain wood is slightly corrected and sanded to remove imperfections, offering a smooth surface with natural markings and excellent durability.",
      prise:'10000',
      categeory:'Wood',
      location:"https://maps.app.goo.gl/JJxTqEAiPvixr8nz9",
      phone:"012376734634"
  }, {
      image:"../images/wood9.jpg",
      title:"Top-Grain Wood",
      description:"30 pounds of Top-grain Wood is slightly corrected and sanded to remove imperfections, offering a smooth surface with natural markings and excellent durability.",
      prise:'1100',
      categeory:'Wood',
      location:"https://maps.app.goo.gl/JJxTqEAiPvixr8nz9",
      phone:"010848734634"
  },
  {
    image:"../images/wood10.jpg",
    title:"Top-Grain Wood",
    description:"30 pounds of Top-grain Wood is slightly corrected and sanded to remove imperfections, offering a smooth surface with natural markings and excellent durability.",
    prise:'2000',
    categeory:'Wood',
  location:"https://maps.app.goo.gl/JJxTqEAiPvixr8nz9",
      phone:"010848734634"
},
]

array.forEach(element => {
    createBox(element.image,element.title,element.description,element.categeory,element.prise,element.location,element.phone);
});


// scroll ----------------



console.log("dsds")

var rr=document.getElementById("Test");
function Do()
{
  alert("dssdd");

}
document.addEventListener("DOMContentLoaded", function () {
  let favIcons = document.querySelectorAll(".fav-icon");

  favIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      // Toggle the 'active' class
      icon.classList.toggle("active");
    });
  });
});

let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(".container .box-container .box"),
  ];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};