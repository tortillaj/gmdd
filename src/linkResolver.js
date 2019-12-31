export default doc => {
  if (doc.type === "project") {
    return `/projects/${doc.uid}`
  }

  // Homepage route fallback
  return "/"
}
