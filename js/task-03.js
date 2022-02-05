const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryList = document.querySelector(".gallery");

// const createImageList = imageList => {
//   return imageList.map(image => {
//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;

//   return img;
// })
// }

// const elements = createImageList(images);
// galleryList.insertAdjacentHTML("afterbegin", ...elements);

const galleryList = document.querySelector(".gallery");

const createImage = ({ url, alt }) => {

  return `<li><img src='${url}', alt='${alt}', width = 480px></li>`
}

const imageList = images.map(createImage).join('');

galleryList.insertAdjacentHTML("afterbegin", imageList);
