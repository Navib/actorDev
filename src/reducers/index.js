import { combineReducers } from 'redux';
import GridReducer from './reducer_grid';
import GridReducerLarge from './reducer_grid_large';
import MovieSlidesReducer from './reducer_movie_slides';
import VideoReducer from './reducer_videos';

const rootReducer = combineReducers({
  gridItem: GridReducer,
  gridItemLarge: GridReducerLarge,
  movieSlides: MovieSlidesReducer,
  videos: VideoReducer
});

export default rootReducer;
