function GetAllMovies(){
    return [ {title: "A new Hope",director: "George Lucas",year: 1977,streaming: true},
    {title: "The Empire Strikes Back",director: "Irvin Kershner",year: 1980,streaming: false},
    {title: "Return of the Jedi",director: "Richard Marquand",year: 1983,streaming: true},
    {title: "The Phantom Menace",director: "George Lucas",year: 1999,streaming: true},
    {title: "Attack of the Clones",director: "George Lucas",year: 2002,streaming: false},
    {title: "Revenge of the Sith",director: "George Lucas",year: 2005,streaming: true},
    {title: "The Force Awakens",director: "J.J. Abrams",year: 2015,streaming: false},
    {title: "The Last Jedi",director: "Rian Johnson",year: 2017,streaming: true},
    {title: "The Rise of Skywalker",director: "J.J. Abrams",year: 2019,streaming: true} ]; 
}





function GetReview(title: string): string | number {
    if (title === "A new Hope") {
        return "Great movie";
    }

    else {
        return Math.floor(Math.random() * 10);

    }
 
}


const movieTitle: string = "A new Ho";

let movieReview:  string | number = GetReview(movieTitle);


console.log(`Movie: ${movieTitle}`);

if (typeof movieReview === "string") {
    console.log(`Review: ${movieReview}`);
}
else {
    console.log(`Rating: ${movieReview}/10`);
}


function GetTitles(director:string):string[];
function GetTitles(director:string,streaming:boolean):string[];
function GetTitles(director:string,streaming?:boolean ):string[]{

    const allMovies = GetAllMovies();
    const searchResults: string[] = [];

    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    }
    else{
        for (let movie of allMovies) {
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }    
      
    }
    return searchResults; 
}

let movies: string[] = GetTitles("George Lucas",false);
movies.forEach(title =>  console.log(title));


function CreateMovieId(name:string,id:number):string{
    return name+id;

}

let x :number;
x=5;

let IdGenerator: (chars:string,nums:number) => string;
// IdGenerator = CreateMovieId;
IdGenerator = (name:string,id:number) => name+id;



let newId: string = IdGenerator("jedi",20);
console.log(newId);