//your JS code here. If required.
let currentElement = document.querySelector(".circle:first-child");
      const prevButton = document.getElementById("prev");
      const nextButton = document.getElementById("next");
      let position = 1;
      function next() {
        if (prevButton.disabled) prevButton.disabled = false;
        if (position < 5) {
          const nxtLine = currentElement.nextElementSibling;
          nxtLine.classList.add("active");
          const nxtCircle = nxtLine.nextElementSibling;
          nxtCircle.classList.add("active");

          currentElement = nxtCircle;
          position++;
          if (position === 5) {
            nextButton.disabled = true;
          }
        } 
      }
      function prev() {
        if (nextButton.disabled) nextButton.disabled = false;
        if (position !== 1) {
          currentElement.classList.remove("active");
          const line = currentElement.previousElementSibling;
          line.classList.remove("active");

          currentElement = line.previousElementSibling;
          position--;
          if (position === 1) {
            prevButton.disabled = true;
          }
        }
      }