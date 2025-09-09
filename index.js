function createLoginTracker(userInfo) {
  const userInfo = {
    username: userInfo.username,
    password: userInfo.password
  };
  let attemptCount = 0;
  const passwordAttempt = (passwordAttempt) => {
    attemptCount += 1;
  };
  if (passwordAttempt === userInfo.password && attemptCount <= 3) {
    return "Login successful";
  }; else if (passwordAttempt !== userInfo.password && attemptCount <=3) {
    return "Login failed";
  };
  else if (attemptCount > 3) {
    return "Account locked due to too many failed login attempts";
};
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })

};


