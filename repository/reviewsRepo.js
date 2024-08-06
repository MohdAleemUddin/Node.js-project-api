const ReviewModel = require("../model/reviewModel");

const AddReview = (data) => {
  const review = new ReviewModel(data);
  return review.save();
};
const getReviewsByProductId = (productId) => {
  return ReviewModel.find({ productId: productId });
};

module.exports = {
  AddReview,
  getReviewsByProductId,
};
