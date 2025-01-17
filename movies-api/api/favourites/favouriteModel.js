import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const FavouriteSchema = new Schema({
  username: { type: String, required: true, unique: true },
  movies : [
    {
      adult: { type: Boolean },
      id: { type: Number, required: true},
      poster_path: { type: String },
      overview: { type: String },
      release_date: { type: String },
      original_title: { type: String },
      genre_ids: [{ type: Number }],
      genres: [{type: String}],
      original_language: { type: String },
      title: { type: String },
      backdrop_path: { type: String },
      popularity: { type: Number },
      vote_count: { type: Number },
      video: { type: Boolean },
      vote_average: { type: Number },
      production_countries: [{
        iso_3166_1: { type: String },
        name: { type: String }
      }],
      runtime: { type: Number },
      spoken_languages: [{
        iso_639_1: { type: String },
        name: { type: String }
      }],
      status: { type: String },
      tagline: { type: String }
    }
  ]
});

FavouriteSchema.statics.findByUserId = function (name) {
  return this.findOne({ username: name });
};

export default mongoose.model('Favourites', FavouriteSchema);


