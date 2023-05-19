const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }
  try {
    const id = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: id });
  } catch (error) {
    throw (error)
  }
};

module.exports = { getRecordForWorkout }