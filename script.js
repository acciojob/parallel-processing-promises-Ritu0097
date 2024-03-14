const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", () => {
  const promises = images.map((image) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        output.appendChild(img);
        resolve();
      };
      img.onerror = () => {
        reject(new Error(`Failed to load image's URL: ${image.url}`));
      };
      img.src = image.url;
    });
  });

  Promise.all(promises)
    .then(() => {
      console.log('All images loaded successfully.');
    })
    .catch((error) => {
      console.error(error);
    });
});
