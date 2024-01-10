function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        document.getElementById('advice').innerHTML = data.slip.advice;
      })
      .catch(error => console.log(error));
  }
  