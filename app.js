var btnTranslate = document.querySelector('#btn-transalate');
var txtInput = document.querySelector('#txt-input');
var txtOutput = document.querySelector('#txt-output');

btnTranslate.addEventListener('click', transalate);

console.log(txtInput);
console.log(txtOutput);

function transalate() {
  let inputText = txtInput.value;
  fetch(
    'https://api.funtranslations.com/translate/groot.json?text=' +
      inputText
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => {
      console.log(data);
      console.log(data.contents.translated);
      txtOutput.innerText = data.contents.translated;
    })
    .catch((response) => {
      console.log(response.status, response.statusText);
      response.json().then((json) => {
        txtOutput.innerText = 'Error Message: ' + json.error.message;
      });
    });
}
