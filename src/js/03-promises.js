// import Notiflix from 'notiflix';

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// const form = document.querySelector('.form');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   Notiflix.Loading.remove();

//   const firstDelay = Number(form.querySelector('[name="delay"]').value);
//   const delayStep = Number(form.querySelector('[name="step"]').value);
//   const amount = Number(form.querySelector('[name="amount"]').value);

//   for (let i = 1; i <= amount; i++) {
//     const delay = firstDelay + (i - 1) * delayStep;
//     try {
//       const result = await createPromise(i, delay);
//       Notiflix.Notify.success(`✅ Виконано проміс ${result.position} через ${result.delay} мс`);
//     } catch (error) {
//       Notiflix.Notify.failure(`❌ Відхилено проміс ${error.position} через ${error.delay} мс`);
//     }
//   }
// });


import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  Notiflix.Loading.remove();

  const firstDelay = Number(form.querySelector('[name="delay"]').value);
  const delayStep = Number(form.querySelector('[name="step"]').value);
  const amount = Number(form.querySelector('[name="amount"]').value);

  Notiflix.Loading.standard('Loading...');

  for (let i = 1; i <= amount; i++) {
    const delay = firstDelay + (i - 1) * delayStep;
    try {
      const result = await createPromise(i, delay);
      Notiflix.Notify.success(`✅ Виконано проміс ${result.position} через ${result.delay} мс`);
    } catch (error) {
      Notiflix.Notify.failure(`❌ Відхилено проміс ${error.position} через ${error.delay} мс`);
    }
  }

  Notiflix.Loading.remove();
});