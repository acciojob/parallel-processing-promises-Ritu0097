const output = document.getElementById("output");
    const btn = document.getElementById("download-images-button");

    const images = [
      { url: "https://picsum.photos/id/237/200/300" },
      { url: "https://picsum.photos/id/238/200/300" },
      { url: "https://picsum.photos/id/239/200/300" },
    ];

    const downloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Failed to load image's URL: ${url}`);
        img.src = url;
      });
    };

    btn.addEventListener("click", async () => {
      try {
        const downloadedImages = await Promise.all(images.map((img) => downloadImage(img.url)));
        downloadedImages.forEach((img) => {
          output.appendChild(img);
        });
      } catch (error) {
        console.error(error);
      }
    });
