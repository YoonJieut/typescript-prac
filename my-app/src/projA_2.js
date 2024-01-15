let globalCountNumber = 0;

function createCounter() {
  let localCountNumber = 0;
  return function () {
    localCountNumber++;
    console.log('localCountNumber :', localCountNumber);

    if(localCountNumber % 10 ===0 ){
      globalCountNumber++;
      console.log('globalCountNumber :', globalCountNumber);
    }
  };
}

const count = createCounter();

for (let i = 0; i < 100; i++) {
  count();
}
console.log(globalCountNumber); // 10