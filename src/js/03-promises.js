import Notiflix from 'notiflix';

const ref = {
  form: document.querySelector('.form'),
  btnCreate: document.querySelector('.form button'),
  firstDelay: document.querySelector('[name="delay"]'), // змінили ім'я поля
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

ref.form.addEventListener('submit', submitForm);

function submitForm(evt) {
  evt.preventDefault();
  disableElement(ref.btnCreate);

  const arrayPromises = [];
  const firstDelayValue = Number(ref.firstDelay.value);
  const stepDelay = Number(ref.step.value);
  const amountPromise = Number(ref.amount.value);
  let delayPromise = firstDelayValue;

  for (let i = 1; i <= amountPromise; i += 1) {
    const promise = createPromise(i, delayPromise)
      .then(({ position, delay }) => {
        showNotification(
          `✅ Виконано проміс ${position} in ${delay}ms`,
          'success'
        );
      })
      .catch(({ position, delay }) => {
        showNotification(
          `❌ Відхилено проміс ${position} in ${delay}ms`,
          'failure'
        );
      });

    arrayPromises.push(promise);
    delayPromise += stepDelay;
  }

  // Make the button active when all promises are done
  Promise.allSettled(arrayPromises).then(() => activateElement(ref.btnCreate));
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function showNotification(str, type) {
  if (type === 'success') {
    Notiflix.Notify.success(str);
  } else if (type === 'failure') {
    Notiflix.Notify.failure(str);
  } else {
    Notiflix.Notify.info(str);
  }
}

function disableElement(element) {
  element.disabled = true;
}

function activateElement(element) {
  element.disabled = false;
}