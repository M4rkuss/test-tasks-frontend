let wrapAmount = document.getElementsByClassName('wrap')[0].childElementCount;
document.getElementById('imgAmount').innerText = `${wrapAmount}`;

let date = new Date();
document.getElementById('date').innerText = `${date.toLocaleDateString()}. ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;


let images = document.querySelectorAll('.wrap img')
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    document.getElementsByClassName('dark-block')[0].classList.add('active');
    this.classList.add('active');
    document.body.classList.add('overflow-hidden');
    document.getElementsByClassName('close-btn')[0].classList.add('active');
  })
  document.getElementsByClassName('close-btn')[0].addEventListener('click', function () {
    if (images[i].classList.contains('active')) {
      document.getElementsByClassName('dark-block')[0].classList.remove('active');
      images[i].classList.remove('active');
      document.body.classList.remove('overflow-hidden');
      document.getElementsByClassName('close-btn')[0].classList.remove('active');
    }
  })
}
