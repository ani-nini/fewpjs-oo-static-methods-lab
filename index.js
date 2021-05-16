class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);

  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '');

  }

  static titleize(string){
    const excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let split = string.split(" ")
    let words = []
    for (let i = 0; i < split.length; i++) {
      if (excludeWords.includes(split[i])) {
          words.push(split[i])
      } else {
          words.push(this.capitalize(split[i]))
      }
  }
  return this.capitalize(words.join(" "))
}
}    


  
