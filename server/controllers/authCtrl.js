const Auth0Strategy = require("passport-auth0");

const { DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;

const strat = new Auth0Strategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    scope: "openid profile",
    callbackURL: "/auth"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

const getUser = (req, res) => {

  console.log("req.user is below V")
  console.log(req.user);

  if (!req.user) {
    res.status(200).json("Unauthorized");
  } else {
    const dbInstance = req.app.set("db")

    dbInstance.auth
      .getUserByAuthid(req.user.authid).then((person) => {
        res.status(200).json(person[0]);
      }).catch(err => res.status(500).json(err))  
  }
};

const logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/");
    // res.redirect("/");
  });
};

module.exports = {
  strat,
  getUser,
  logoutUser
};
