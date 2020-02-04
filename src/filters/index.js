const urlParser = document.createElement('a')
const moment = require('moment')

export function domain(url) {
  urlParser.href = url
  return urlParser.hostname
}

export function count(arr) {
  return arr.length
}

export function toString(number) {
  return number.toString()
}

export function prettyDateTime(date) {
  return moment(date).format('DD.MM.YYYY HH:mm')
}

export function prettyDate(date) {
  return moment(date).format('DD.MM.YYYY')
}

export function prettyTime(date) {
  return moment(date).format('HH:mm')
}

export function formatMilliseconds(milliseconds) {
  let sec = Math.floor(milliseconds / 1000)
  let hrs = Math.floor(sec / 3600)
  sec -= hrs * 3600
  let min = Math.floor(sec / 60)
  sec -= min * 60

  sec = '' + sec
  sec = ('00' + sec).substring(sec.length)

  if (hrs > 0) {
    min = '' + min
    min = ('00' + min).substring(min.length)
    return hrs + ':' + min + ':' + sec
  } else {
    return min + ':' + sec
  }
}

export function truncate(str, length) {
  let ending = '...'
  if (length == null) {
    length = 70
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  } else {
    return str
  }
}

export function formatNumber(number) {
  if (typeof number === 'number') {
    return number.toLocaleString('sk-SK', {maximumFractionDigits: 2})
  } else {
    return number.replace('.', ',')
  }
}
