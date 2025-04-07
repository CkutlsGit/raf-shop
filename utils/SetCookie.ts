export default (name: string, value: string, years: number = 10) => {
  let expires: string = ""
  if (value) {
    let date: Date = new Date()
    date.setTime(date.getTime() + years * 365 * 24 * 60 * 60 * 1000)
    expires = "; expires=" + date.toUTCString()
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/"
}
