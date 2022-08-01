function dateFormat(dataStr) {
    const dt = new Date(dataStr)

    const y = dt.getFullYear();
    const m = zero(dt.getMonth() + 1);
    const d = zero(dt.getDate());

    const hh = zero(dt.getHours());
    const mm = zero(dt.getMinutes());
    const ss = zero(dt.getSeconds());

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function zero(x) {
    return x > 9 ? x : "0" + x
}

module.exports = {
    dateFormat
}