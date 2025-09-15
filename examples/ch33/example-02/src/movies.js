export const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    synopsis: 'Two imprisoned men bond over many years, finding solace...',
  },
  {
    id: 2,
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    synopsis: 'The aging patriarch of a crime dynasty transfers control...',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    synopsis: 'Batman sets out to dismantle the remaining criminal organizations...',
  },
  {
    id: 4,
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    synopsis: 'The early life and career of Vito Corleone in 1920s New York...',
  },
  {
    id: 5,
    title: '12 Angry Men',
    year: 1957,
    director: 'Sidney Lumet',
    synopsis:
      'A dissenting juror in a murder trial forces his colleagues to reconsider...',
  },
  {
    id: 6,
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    director: 'Peter Jackson',
    synopsis: "Gandalf and Aragorn lead men against Sauron's army...",
  },
  {
    id: 7,
    title: 'Schindler’s List',
    year: 1993,
    director: 'Steven Spielberg',
    synopsis: 'In German-occupied Poland, Oskar Schindler saves hundreds...',
  },
  {
    id: 8,
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    synopsis: 'The lives of two mob hitmen, a boxer, a gangster’s wife...',
  },
  {
    id: 9,
    title: 'The Fellowship of the Ring',
    year: 2001,
    director: 'Peter Jackson',
    synopsis: 'A meek Hobbit and eight companions set out to destroy the One Ring...',
  },
  {
    id: 10,
    title: 'The Good, the Bad and the Ugly',
    year: 1966,
    director: 'Sergio Leone',
    synopsis: 'A bounty hunting scam joins two men in an uneasy alliance...',
  },
  {
    id: 11,
    title: 'Forrest Gump',
    year: 1994,
    director: 'Robert Zemeckis',
    synopsis:
      'The decades-long journey of Forrest Gump through pivotal moments in U.S. history...',
  },
  {
    id: 12,
    title: 'The Two Towers',
    year: 2002,
    director: 'Peter Jackson',
    synopsis:
      'Frodo and Sam journey toward Mordor while others fight the War of the Ring...',
  },
  {
    id: 13,
    title: 'Fight Club',
    year: 1999,
    director: 'David Fincher',
    synopsis:
      'An insomniac office worker and a soap maker form an underground fight club...',
  },
  {
    id: 14,
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    synopsis: 'A thief enters dreams to plant an idea into a CEO’s mind...',
  },
  {
    id: 15,
    title: 'The Empire Strikes Back',
    year: 1980,
    director: 'Irvin Kershner',
    synopsis: 'The Rebels suffer setbacks against the Galactic Empire...',
  },
  {
    id: 16,
    title: 'The Matrix',
    year: 1999,
    director: 'The Wachowskis',
    synopsis: 'A hacker learns reality is a simulated reality controlled by machines...',
  },
  {
    id: 17,
    title: 'GoodFellas',
    year: 1990,
    director: 'Martin Scorsese',
    synopsis: 'The rise and fall of mob associate Henry Hill and his friends...',
  },
  {
    id: 18,
    title: 'Interstellar',
    year: 2014,
    director: 'Christopher Nolan',
    synopsis:
      'Explorers travel through a wormhole in space in an attempt to ensure humanity’s survival...',
  },
  {
    id: 19,
    title: 'One Flew Over the Cuckoo’s Nest',
    year: 1975,
    director: 'Miloš Forman',
    synopsis: 'A criminal pleads insanity and is admitted to a mental institution...',
  },
  {
    id: 20,
    title: 'Seven (Se7en)',
    year: 1995,
    director: 'David Fincher',
    synopsis:
      'A detective hunts a serial killer who uses the seven deadly sins as his motives...',
  },
];

export async function getMovie(id) {
  const movie = movies.find((item) => item.id === Number(id));
  if (!movie) throw Error('Invalid movie id.');
  return movie;
}

export async function getMovies() {
  return movies;
}