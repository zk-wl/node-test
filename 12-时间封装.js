function settime (str) {
    const timer = new Date(str)

    const y = timer.getFullYear();
    const m = zero(timer.getMonth() + 1)
    const d = zero(timer.getDate())

    const h = zero(timer.getHours())
    const mm = zero(timer.getMinutes())
    const s = zero(timer.getSeconds())

    return `${y}-${m}-${d} ${h}:${mm}:${s}`
}
function zero (x){
    return x>9 ? x : '0' + x
}

module.exports={
    settime
}
