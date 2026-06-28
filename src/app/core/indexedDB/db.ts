import Dexie, { Table } from 'dexie';

export interface Movie {
  id?: number;
  name: string;
  year: string;
  genre: string;
  director: string;
  imagePoster: string;
  imageBackground: string;
  score: number;
}

export class AppDB extends Dexie {
  movies!: Table<Movie, number>;

  constructor() {
    super('movieCatalogDB');
    this.version(1).stores({
      movies: '++id'
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    await db.movies.bulkAdd([
      {
        name: 'SAW V',
        year: '2008',
        genre: 'Horror',
        score: 4.5,
        director: 'David Hackl',
        imagePoster: 'https://i.ebayimg.com/images/g/1p8AAOSw-F9kLJm-/s-l1200.jpg',
        imageBackground: 'https://areajugones.sport.es/wp-content/uploads/2021/05/saw-5.jpg'
      },
      {
        name: 'Captain America: Civil War',
        year: '2016',
        genre: 'Sci-Fi',
        score: 5,
        director: 'Anthony Russo, Joe Russo',
        imagePoster: 'https://m.media-amazon.com/images/I/71wOol9HilL._AC_UF1000,1000_QL80_.jpg',
        imageBackground: 'https://m.media-amazon.com/images/M/MV5BODg3OTc4MTEyMl5BMl5BanBnXkFtZTgwODI0MDkyODE@._V1_.jpg'
      },
      {
        name: 'The Curious Case of Benjamin Button',
        year: '2008',
        genre: 'Drama',
        score: 4.5,
        director: 'David Fincher',
        imagePoster: 'https://image.tmdb.org/t/p/original/5MuMQ2VMODrsd2NcPm5FPEOsPzW.jpg',
        imageBackground: 'https://www.racinggreenmagazine.com/uploads/articles/16796741544.webp'
      },
      {
        name: 'Star Wars Episode III: Revenge of the Sith',
        year: '2005',
        genre: 'Sci-Fi',
        score: 5,
        director: 'George Lucas',
        imagePoster: 'https://i.pinimg.com/736x/65/fc/06/65fc06b746b173104264d3bd58569c5d.jpg',
        imageBackground: 'https://static01.nyt.com/images/2017/12/16/arts/16tvcol-starwarsrevengeofthesith/16tvcol-starwarsrevengeofthesith-superJumbo.jpg'
      },
      {
        name: 'The Ring',
        year: '2002',
        genre: 'Horror',
        score: 3,
        director: 'Gore Verbinski',
        imagePoster: 'https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_FMjpg_UX1000_.jpg',
        imageBackground: 'https://m.media-amazon.com/images/M/MV5BMTU4MzYzMzc4N15BMl5BanBnXkFtZTgwMTg3ODA3MzI@._V1_.jpg'
      },
      {
        name: 'World War Z',
        year: '2013',
        genre: 'Sci-Fi',
        score: 5,
        director: 'Marc Forster',
        imagePoster: 'https://pics.filmaffinity.com/Guerra_Mundial_Z-473564207-large.jpg',
        imageBackground: 'https://m.media-amazon.com/images/S/pv-target-images/daea2b4eb4359d83d69550bd0931abdf5d198f29f1a198eb3f249440d31721b6.jpg'
      },
      {
        name: 'Inception',
        year: '2010',
        genre: 'Sci-Fi, Action',
        score: 5,
        director: 'Christopher Nolan',
        imagePoster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
        imageBackground: 'https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg'
      },
      {
        name: '	The Social Network',
        year: '2010',
        genre: 'Drama, Biography',
        score: 5,
        director: 'David Fincher',
        imagePoster: 'https://i.pinimg.com/originals/7e/37/b9/7e37b994b613e94cba64f307b1983e39.jpg',
        imageBackground: 'https://www.hollywoodreporter.com/wp-content/uploads/2017/04/social_network_2010_df-_r003-h_2017.jpg'
      },
      {
        name: 'Toy Story 3',
        year: '2010',
        genre: 'Animation, Comedy',
        score: 5,
        director: 'Lee Unkrich',
        imagePoster: 'https://pics.filmaffinity.com/Toy_Story_3-691147043-large.jpg',
        imageBackground: 'https://nextbestpicture-com.b-cdn.net/wp-content/uploads/2019/12/toystory3_2_orig.jpg'
      },
      {
        name: "The Shawshank Redemption",
        year: '1994',
        genre: "Drama",
        score: 9.3,
        director: "Frank Darabont",
        imagePoster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
        imageBackground: 'https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg'
      },
      {
        name: "The Godfather",
        year: '1972',
        genre: "Crime Drama",
        score: 9.2,
        director: "Francis Ford Coppola",
        imagePoster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        imageBackground: 'https://i.ytimg.com/vi/yALoRFbCHzU/maxresdefault.jpg'
      },
      {
        name: "The Dark Knight",
        year: '2008',
        genre: "Superhero Thriller",
        score: 9.0,
        director: "Christopher Nolan",
        imagePoster: 'https://m.media-amazon.com/images/I/818hyvdVfvL._AC_UF894,1000_QL80_.jpg',
        imageBackground: 'https://s.studiobinder.com/wp-content/uploads/2021/12/The-Dark-Knight-Interrogation-Scene-Explained-Free-Dark-Knight-Script-PDF.jpg'
      },
      {
        name: "The Lord of the Rings: The Return of the King",
        year: '2003',
        genre: "Fantasy, Adventure",
        score: 8.9,
        director: "Peter Jackson",
        imagePoster: 'https://cdn.europosters.eu/image/1300/posters/the-lord-of-the-rings-the-return-of-the-king-i104633.jpg',
        imageBackground: 'https://www.brightwalldarkroom.com/wp-content/uploads/2019/04/arwen-aragon-return-of-the-king-e1555528580343.jpg'
      },
      {
        name: "Pulp Fiction",
        year: '1994',
        genre: "Crime Comedy",
        score: 8.9,
        director: "Quentin Tarantino",
        imagePoster: 'https://m.media-amazon.com/images/I/718LfFW+tIL._AC_UF894,1000_QL80_.jpg',
        imageBackground: 'https://nofilmschool.com/media-library/he-pulp-fiction-dance-scene.jpg?id=34054856'
      },
      {
        name: "Schindler's List",
        year: '1993',
        genre: "Historical Drama",
        score: 8.9,
        director: "Steven Spielberg",
        imagePoster: 'https://image.tmdb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
        imageBackground: 'https://i.ytimg.com/vi/x4mcmymd-5s/maxresdefault.jpg'
      },
      {
        name: "12 Angry Men",
        year: '1957',
        genre: "Drama",
        score: 8.9,
        director: "Sidney Lumet",
        imagePoster: 'https://image.tmdb.org/t/p/original/ppd84D2i9W8jXmsyInGyihiSyqz.jpg',
        imageBackground: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/12_Angry_Men_scene.jpg'
      },
      {
        name: "Inception",
        year: '2010',
        genre: "Sci-Fi, Action",
        score: 8.8,
        director: "Christopher Nolan",
        imagePoster: 'https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg',
        imageBackground: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/Inception.jpg'
      },
      {
        name: "Forrest Gump",
        year: '1994',
        genre: "Drama, Romance",
        score: 8.8,
        director: "Robert Zemeckis",
        imagePoster: 'https://i.ebayimg.com/images/g/y9gAAOSwUQhi-9Nq/s-l1200.webp',
        imageBackground: 'https://www.aarp.org/content/dam/aarp/entertainment/movies-for-grownups/2020/05/1140-forrest-gump.jpg'
      },
      {
        name: "Whiplash",
        year: '2014',
        genre: "Drama, Music",
        score: 8.8,
        director: "Damien Chazelle",
        imagePoster: 'https://image.tmdb.org/t/p/original/6EDMyMyHamsXOYDs5ZkL94qUnFP.jpg',
        imageBackground: 'https://cdn.theatlantic.com/thumbor/4KBFG18Aaiq59OitWkm_H5aHY7I=/0x1:1296x730/960x540/media/img/mt/2014/10/Whiplash/original.jpg'
      },
      {
        name: "Fight Club",
        year: '1999',
        genre: "Psychological Thriller",
        score: 8.8,
        director: "David Fincher",
        imagePoster: 'https://m.media-amazon.com/images/I/617iPqFrQYL._AC_UF894,1000_QL80_.jpg',
        imageBackground: 'https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/master/pass/Baker-FightClub.jpg'
      },
      {
        name: "Good Will Hunting",
        year: '1997',
        genre: "Drama",
        score: 8.8,
        director: "Gus Van Sant",
        imagePoster: 'https://image.tmdb.org/t/p/original/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg',
        imageBackground: 'https://p-news-upload.storage.googleapis.com/2024/02/good-will-hunting-painting-scaled-e1708207741225.jpg'
      },
      {
        name: "The Matrix",
        year: '1999',
        genre: "Sci-Fi, Action",
        score: 8.7,
        director: "The Wachowski Brothers",
        imagePoster: 'https://ae01.alicdn.com/kf/S9e87199b1b3a4955a31575d8c3f79df1h.jpg_640x640Q90.jpg_.webp',
        imageBackground: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/03/Trinity-and-Neo-from-The-Matrix.jpeg'
      },
      {
        name: "Parasite",
        year: '2019',
        genre: "Black Comedy, Thriller",
        score: 8.6,
        director: "Bong Joon-ho",
        imagePoster: 'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        imageBackground: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/12/19/12/2a1t0he.jpg'
      },
      {
        name: "The Departed",
        year: '2006',
        genre: "Crime Thriller",
        score: 8.5,
        director: "Martin Scorsese",
        imagePoster: 'https://image.tmdb.org/t/p/original/aqfeqtqnuCk2zCG7QxVkvm7kf1O.jpg',
        imageBackground: 'https://nofilmschool.com/media-library/the-departed-h-2006.jpg'
      },
      {
        name: "The Big Lebowski",
        year: '1998',
        genre: "Crime Comedy",
        score: 8.5,
        director: "Joel Coen",
        imagePoster: 'https://i.ebayimg.com/images/g/2h4AAOSwZIljDgUQ/s-l1200.jpg',
        imageBackground: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/The-Big-Lebowski-1.jpg'
      },
      {
        name: "Interstellar",
        year: '2014',
        genre: "Sci-Fi, Drama",
        score: 8.6,
        director: "Christopher Nolan",
        imagePoster: 'https://static.posters.cz/image/750/posters/interstellar-one-sheet-i23157.jpg',
        imageBackground: 'https://articles-img.sftcdn.net/t_article_cover_xl/auto-mapping-folder/sites/2/2023/03/interestellar-final-explicado.jpg'
      }
    ]);
  }
}

export const db = new AppDB();