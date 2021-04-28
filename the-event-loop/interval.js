let i = 3;
const intervalId = setInterval(() => {
  if (i === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  } else {
    console.log(i);
  }
  i--;
}, 1000);
