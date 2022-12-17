       function changeColor() {
            // Get the element with the id "text"
            var textElement = document.getElementById("text");
        
            // Toggle the "blue" class on the element
            textElement.classList.toggle("blue");
          }
        
          setInterval(changeColor, 500);