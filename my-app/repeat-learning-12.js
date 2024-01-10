

/**
 * 변수 handle은 특별한 객체인 Poromise를 가져왔습니다. (참조했다고 합니다.)
 * console.log(handle)을 찍어보면 Promise { <pending> } 이라고 나옵니다.
 * Promise라는 이름에서 인스턴스로 객체가 출력된 것이고
 * <pending>은 Promise 만의 특수한 "상태"를 나타냅니다. 
 */


const handle = new Promise((resolve, reject) => {
  // 1. Promise가 생성되고, 첫 번째 setTimeout이 실행됩니다.
  // 이 시점에서 Promise는 pending 상태입니다.
  setTimeout(()=>{
    console.log('1번째'); // 4. 3초가 지나면서 1번째가 출력됩니다.
    resolve(); // 5. resolve가 실행되면서 Promise는 fulfilled 상태가 됩니다.
  }, 3000)
})
// 2. 이 시점에서, 모든 Promise는 pending 상태입니다.
// 3. 3초의 대기가 시작됩니다.
.then(()=>{
  // 6. 첫 번째 Promise가 fulfilled 상태가 되면, 두 번째 setTimeout이 실행됩니다.
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log('2번째'); // 8. 2초가 지나면서 2번째가 출력됩니다.
      resolve(2); // 9. resolve가 실행되면서 Promise는 fulfilled 상태가 됩니다.
    }, 2000)
  })
})
// 7. 첫 번째 Promise가 완료되었으며, 두번째 Promise의 2초의 대기가 시작됩니다.
.then(()=>{
  // 10. 두 번째 Promise가 fulfilled 상태가 되면, 세 번째 setTimeout이 실행됩니다.
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log('3번째'); // 12. 1초가 지나면서 3번째가 출력됩니다.
      resolve(3); // 13. resolve가 실행되면서 Promise는 fulfilled 상태가 됩니다.
    }, 1000)
  })
});
// console.log(handle);
// 11. 세 번째 Promise가 fulfilled 상태가 되면, then이 실행됩니다.
// 14. 모든 Promise가 순차적으로 완료되었습니다.


// ---------------------------------


const first = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('1번째');
    resolve();
  }, 3000);
});
const second = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2번째');
    resolve();
  }, 2000);
});

const third = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('3번째');
    resolve();
  }, 4000);
});

Promise.all([first, second, third])
.then(()=>{
  console.log('프로미스 올 끝');
} );

Promise.race([first, second, third])
.then(()=>{ 
  console.log('프로미스 레이스 끝');
});
