export default (name: string) => {
  let nameElement: string = name + "="
  let ca: string[] = document.cookie.split(";")
  for (var i = 0; i < ca.length; i++) {
    var c: string = ca[i]
    while (c.charAt(0) == " ") c = c.substring(1, c.length)
    if (c.indexOf(nameElement) == 0)
      return c.substring(nameElement.length, c.length)
  }
  return null
}
