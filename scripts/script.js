function showRandomImage() {
  const images = [
    "https://drive.google.com/drive/u/1/folders/1Jxl-AM2FHGyWRAUefkO1YDWK1SB8sngM",
    "https://drive.google.com/drive/u/1/folders/1Jxl-AM2FHGyWRAUefkO1YDWK1SB8sngM",
    "https://drive.google.com/drive/u/1/folders/1Jxl-AM2FHGyWRAUefkO1YDWK1SB8sngM",
    "https://drive.google.com/drive/u/1/folders/1Jxl-AM2FHGyWRAUefkO1YDWK1SB8sngM",
    "https://drive.google.com/drive/u/1/folders/1Jxl-AM2FHGyWRAUefkO1YDWK1SB8sngM",  
    // Add more image links from Google Drive here
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  document.getElementById("randomImage").src = images[randomIndex];
}
