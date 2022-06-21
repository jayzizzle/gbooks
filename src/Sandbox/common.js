const myFetchHero = new Promise(res => {
  const myData = [
    {
      name: 'Spidey',
      todos: [
        'Save the world.',
        'Dinner with MJ.',
        'Complete science project.',
      ],
    },
    {
      name: 'Miles',
      todos: ['Save Brooklyn.', 'Hide from my parents.', 'Finish Homework.'],
    },
    {
      name: 'Venom',
      todos: ['Find Spider-Man.', 'Defeat Carnage.'],
    },
  ]
  setTimeout(() => {
    res(myData)
  }, 100)
})

const myFetchVillain = new Promise(res => {
  const myData = [
    {
      name: 'Green Goblin',
      todos: ['Destroy Spider-Man.', 'Business meeting.', 'Create more serum.'],
    },
    {
      name: 'Venom',
      todos: ['Defeat Spider-Man.', 'Find Spider-Man.', 'Exercise.'],
    },
  ]
  setTimeout(() => {
    res(myData)
  }, 100)
})

export const myFetchHeroFn = () => {
  return myFetchHero
}

export const myFetchVillainFn = () => {
  return myFetchVillain
}
