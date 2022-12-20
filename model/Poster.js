let mongoose = require("mongoose");

// let posterSchema = new mongoose.Schema({
//   poster: String,
//   imdbId: String,
// });

const Schema = mongoose.Schema;

const posterSchema = new Schema(
  {
    posterUrl: {
      type: String,
      required: true,
    },
    imdbId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ActivitySchema.index({
  id: 1,
});
module.exports = mongoose.model("Poster", posterSchema);
