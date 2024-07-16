console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let album = {
      title: title,
      artist: artist,
      yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}

console.log(addToCollection(myCollection, "Thriller", "Michael Jackson", 1982));
console.log(addToCollection(myCollection, "All Eyez On Me", "Tupac", 1996));
console.log(addToCollection(myCollection, "Get Rich Or Die Tryin", "50 Cent", 2005));
console.log(addToCollection(myCollection, "2016 Forrest Hills Drive", "J cole", 2016));
console.log(addToCollection(myCollection, "Ethiopia", "Teddy Afro", 2018));
console.log(addToCollection(myCollection, "WWTTBA", "Drake", 1976));

console.log(myCollection);


function findByArtist(collection, artist) {
  let results = [];
  for (let album of collection) {
      if (album.artist === artist) {
       // if (album.artist = artist) {
          results.push(album);
      }
  }
  return results;
}

console.log(findByArtist(myCollection, "Drake")); 
console.log(findByArtist(myCollection, "J cole")); 

function search(collection, searchCriteria) {
   
  if (!searchCriteria || (!searchCriteria.artist && !searchCriteria.yearPublished)) {
    //if (searchCriteria || (searchCriteria.artist && searchCriteria.yearPublished)) {
        return collection;
    }

    let results = [];
    for (let album of collection) {
        let artistMatches = true;
        let yearMatches = true;
 // for of loop
        if (searchCriteria.artist) {
            artistMatches = album.artist === searchCriteria.artist;
        }

        if (searchCriteria.yearPublished) {
            yearMatches = album.yearPublished === searchCriteria.yearPublished;
        }

        if (artistMatches && yearMatches) {
            results.push(album);
        }
    }

    return results;
}


console.log(search(myCollection, { artist: "Michael Jackson", yearPublished: 1982 })); 
console.log(search(myCollection, { artist: "AC/DC", yearPublished: 1980 })); //
console.log(search(myCollection, { artist: "The Beatles" })); 
console.log(search(myCollection, { yearPublished: 1977 })); 
console.log(search(myCollection, {})); 
console.log(search(myCollection)); 

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
