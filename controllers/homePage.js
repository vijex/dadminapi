

exports.getHomepage = function (req, res, next) {
    res.sendfile('../html/index.html');
}
