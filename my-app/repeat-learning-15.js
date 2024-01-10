function counter() {
    var count = 0;
    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getCount: function () {
            return count;
        }
    };
}
var clouserCounter = counter();
console.log(clouserCounter.getCount()); // 0
clouserCounter.increment();
clouserCounter.increment();
clouserCounter.increment();
clouserCounter.increment();
console.log(clouserCounter.getCount()); // 4
clouserCounter.increment();
console.log(clouserCounter.getCount()); // 5
