

const handle = new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log('1번째');
    resolve(1);
  }, 3000)
})
.then(()=>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log('2번째');
      resolve(2);
    }, 2000)
  })
})
.then(()=>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log('3번째');
      resolve(3);
    }, 1000)
  })
});