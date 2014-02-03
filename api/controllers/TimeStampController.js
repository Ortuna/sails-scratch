module.exports = {
  index: function(request, response) {
    var timestamp = 0;

    request.listen("some", function(data) {
      console.log(data);
    });

    response.json({
      success: true,
      timestamp: timestamp
    });
  }
}
