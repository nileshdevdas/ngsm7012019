import { Movie } from './movie';

describe('Movie', () => {
    let movie: Movie;
    beforeEach(() => {
        movie = new Movie();
    });
    it('should create', () => {
        expect(movie).toBeTruthy();
    });
    it('should be Undefined', () => {
        expect(movie.movieName).toBeUndefined();
    });
});


describe('Sometest', () => {
    beforeEach(() => {
            console.log('Before..........................');
    });

    it('sample1', () => {
        //
    });
    afterEach(() => {
            console.log('After ..................................');
    });

})