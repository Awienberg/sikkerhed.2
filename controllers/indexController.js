exports.frontpage = function (req, res) {
    res.render('index', {
        title: 'Security III. Authentication Middleware',
        subtitle: 'Assignments security.2'
    });
};

exports.dashboard = function (req,res) {
    res.render('dashboard', {
        title: 'Security III. Authentication Middleware',
        subtitle: 'Here\'s What We Do:',
        user: req.user
    });
};