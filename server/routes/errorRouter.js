const errorRouter = (req, res) => res.redirect(`/#${req.url.substr(1, req.url.length)}`);

module.exports = errorRouter;