const typing = () => {window.addEventListener('DOMContentLoaded', () => {
    const developerText = 'DEVELOPER';
    const element = document.getElementById('developer');
    let index = 0;
    let typing = true;
  
    function typeDelete() {
      if (typing) {
        if (index < developerText.length) {
          element.innerHTML += developerText.charAt(index);
          index++;
        } else {
          typing = false;
        }
      } else {
        if (index > 0) {
          element.innerHTML = developerText.substring(0, index - 1);
          index--;
        } else {
          typing = true;
        }
      }
  
      setTimeout(typeDelete, typing ? 250 : 300);
    }
  
    typeDelete();
  });
}

export default typing