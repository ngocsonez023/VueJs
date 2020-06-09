export function authHeader () {
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    const options = {
      // eslint-disable-next-line standard/object-curly-even-spacing
      headers: { 'Ccontent-type': 'application/json', 'Authorization': 'Bearer ' + user}
    }
    return options
  } else {
    return {}
  }
}
