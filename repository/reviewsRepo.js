const ReviewModel = require("../model/reviewModel");

const AddReview = (data) => {
  const review = new ReviewModel(data);
  return review.save();
};

module.exports = {
    AddReview,
}