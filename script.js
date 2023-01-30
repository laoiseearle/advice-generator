const number = document.getElementById('quoteNum');
const text = document.getElementById('quoteText');

const setText = obj => {
  number.innerText = `Advice #${String(obj.slip.id)}`;
  text.innerText = obj.slip.advice;
};

const getApi = () => {
  let advice;

  fetch('https://api.adviceslip.com/advice').then(response =>
    response
      .json()
      .then(data => {
        advice = data;
      })
      .then(() => {
        setText(advice);
      })
  );
};
