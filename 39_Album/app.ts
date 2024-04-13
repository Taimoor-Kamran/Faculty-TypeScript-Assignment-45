function make_album(artist: string, title: string ):{artist: string, title: string}{
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    }
    return dictionaries; 
}

let album = make_album("bial Saeed", "bewafa")
console.log(album)
album = make_album("imran Khan", "bohemia")
console.log(album)
album = make_album("alan Walker", "who Am I")
console.log(album)