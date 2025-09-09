function createLoginTracker(userInfo) {
  const userInfo = {
    username: userInfo.username,
    password: userInfo.password
  };
  let attemptCount = 0;
  const passwordAttempt = (passwordAttempt) => {
    attemptCount += 1;
  }
  if (passwordAttempt === userInfo.password && attemptCount <= 3) {
    return "Login successful";
  } else if (passwordAttempt !== userInfo.password && attemptCount <=3) {
    return "Login failed";
  }
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })

};

