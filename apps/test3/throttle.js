let throttle = (fn, delay = 50) => { // 节流 控制执行间隔时间 防止频繁触发 scroll resize mousemove
    let stattime = 0;
    return function (...args) {
        let curTime = new Date();
        if (curTime - stattime >= delay) {
            fn.apply(this, args);
            stattime = curTime;
        }
    }
}

function fn () {
    console.log('d')
}
throttle(fn)