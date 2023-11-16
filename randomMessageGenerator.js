function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const genreQuotes = {
    philosophy: ['Dwell on the beauty of life. Watch the stars, and see yourself running with them. - Marcus Aurelius',
    'If you want to improve, be content to be thought foolish and stupid. ― Epictetus',
    'Knowing yourself is the beginning of all wisdom. - Aristotle',
    'Be kind, for everyone you meet is fighting a harder battle. - Plato',
    'To find yourself, think for yourself. - Socrates'],
    fantasy: ['All that is gold does not glitter, Not all those who wander are lost. - J.R.R. Tolkien',
    'One day, you will be old enough to start reading fairytales again. - C.S. Lewis',
    "Odd thing, ain't it... you meet people one at a time, they seem decent, they got brains that work, and then they get together and you hear the voice of the people. And it snarls. - Terry Pratchett",
    'Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. - George R.R. Martin',
    "It’s the ignorant who find a cause and cling to it, for within that is the illusion of significance. - Steven Erikson"],
    scifi: ["The mystery of life isn't a problem to solve, but a reality to experience. - Frank Herbert",
    'I would have lived in peace. But my enemies brought me war. - Pierce Brown',
    'To make a thief, make an owner; to create crime, create laws. - Ursula K. Le Guin',
    'In the information society, nobody thinks. We expected to banish paper, but we actually banished thought. - Michael Crichton',
    "It's the basic condition of life to be required to violate our own identity. - Philip K. Dick"]
  }
  
  let genreQuotePrompts = []
  
  for(let genre in genreQuotes) {
    let quoteIdx = generateRandomNumber(genreQuotes[genre].length)
  
    switch(genre) {
      case 'philosophy':
        genreQuotePrompts.push(`A quote to get you in the mood for Philosophy: "${genreQuotes[genre][quoteIdx]}".`)
        break
      case 'fantasy':
        genreQuotePrompts.push(`Perhaps you'd rather Fantasy: "${genreQuotes[genre][quoteIdx]}".`)
        break
      case 'scifi':
        genreQuotePrompts.push(`Or maybe even Sci-fi: "${genreQuotes[genre][quoteIdx]}".`)
        break
      default:
        genreQuotePrompts.push('We could not come up with a quote.')
    }
  }
  
  function formatQuoteList() {
    const formatted = genreQuotePrompts.join('\n')
    console.log(formatted)
  }
  
  formatQuoteList(genreQuotePrompts);