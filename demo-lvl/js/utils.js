const loadImage = (src) => {
  return new Promise((resolve, reject) => { // Promise = async/await = placeholder for future value
    const img = new Image()
    img.onload = () => resolve(img) // resolve = success
    img.onerror = reject // reject = error
    img.src = src
  })
}
