
        function changeColor() {
            // Get the element with the id "text"
            var textElement = document.getElementById("text");
        
            // Toggle the "blue" class on the element
            textElement.classList.toggle("blue");
          }
        
          setInterval(changeColor, 1000);
        
          var texts = [
            "Earn",
            "Rewards",
            "While",
            "Using",
            "Our",
            "Coin",
          ];
        
          var index = 0;
        
          function changeText() {
            // Get the element with the id "text"
            var textElement = document.getElementById("text");
        
            // Change the text content of the element
            textElement.textContent = texts[index];
        
            // Increment the index
            index = (index + 1) % texts.length;
          }
        
          setInterval(changeText, 1000);