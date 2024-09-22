// Array of image URLs
const imageUrl = [
    "https://i.pinimg.com/564x/54/70/36/5470365d539aaa2073157a329cbb9e8f.jpg",
    "https://i.pinimg.com/564x/1e/d2/eb/1ed2eb834c3e8da3bcfd4123f7d8575a.jpg",
    "https://i.pinimg.com/564x/84/f1/e6/84f1e6a776e328d098d25ef31c8f4996.jpg",
    "https://i.pinimg.com/564x/54/70/36/5470365d539aaa2073157a329cbb9e8f.jpg",
    "https://i.pinimg.com/564x/1e/d2/eb/1ed2eb834c3e8da3bcfd4123f7d8575a.jpg",
    "https://i.pinimg.com/564x/84/f1/e6/84f1e6a776e328d098d25ef31c8f4996.jpg",
    "https://i.pinimg.com/564x/54/70/36/5470365d539aaa2073157a329cbb9e8f.jpg",
    "https://i.pinimg.com/564x/1e/d2/eb/1ed2eb834c3e8da3bcfd4123f7d8575a.jpg",
    "https://i.pinimg.com/564x/84/f1/e6/84f1e6a776e328d098d25ef31c8f4996.jpg",
    "https://i.pinimg.com/564x/54/70/36/5470365d539aaa2073157a329cbb9e8f.jpg",
    "https://i.pinimg.com/564x/1e/d2/eb/1ed2eb834c3e8da3bcfd4123f7d8575a.jpg",
    "https://i.pinimg.com/564x/84/f1/e6/84f1e6a776e328d098d25ef31c8f4996.jpg",
    "https://i.pinimg.com/564x/84/f1/e6/84f1e6a776e328d098d25ef31c8f4996.jpg"
  ];
  
  
  function randomImageUrl() {
    return imageUrl[Math.floor(Math.random() * imageUrl.length)];
  }
  
   
  function kingImage() {
    const altText = "king photo";  
    const container = document.getElementById("king");  
    
 
    imageUrl.forEach((url, index) => {
      const holdDiv = document.createElement("div");
      holdDiv.classList.add("hold-img");
    
      if (index === 8) {
        holdDiv.classList.add("nine");
      }
     
      const imgElement = document.createElement("img");
      imgElement.src = url;  
      imgElement.alt = altText;
  
       
      holdDiv.appendChild(imgElement);
      container.appendChild(holdDiv);
  
       
      setInterval(() => {
        imgElement.src = randomImageUrl(); 
      }, 5000);
    });
  }
  
   
  kingImage();
  