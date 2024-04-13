let modal = document.getElementById('myModal');
  let modalImg = document.getElementById("modalImg");

  let images = document.querySelectorAll('#slider img');

  images.forEach(function(img) {
    img.addEventListener('click', function() {
      modal.classList.remove('hidden');
      modalImg.src = this.src;
    });
  });

  let closeBtn = document.querySelector(".modal-close");

  closeBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
  });

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.add('hidden');
    }
  };