function log(step, level, message) {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] Level ${level} - ${step}: ${message}`);
}

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userId = 101;
      log("Step 1", 1, `Fetched User ID = ${userId}`);
      resolve(userId);
    }, 500);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = ["Post A", "Post B"];
      log("Step 2", 2, `Fetched Posts for User ${userId}`);
      resolve(posts);
    }, 600);
  });
}

function fetchComments(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const comments = ["Nice", "Great"];
      log("Step 3", 3, `Fetched Comments for Posts`);
      resolve(comments);
    }, 700);
  });
}

function calculateAnalytics(comments) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const analytics = { views: 250 };
      log("Step 4", 4, `Calculated Analytics: ${analytics.views} views`);
      resolve(analytics);
    }, 800);
  });
}

log("START", 0, "Program started");

fetchUser()
  .then((userId) => fetchPosts(userId))
  .then((posts) => fetchComments(posts))
  .then((comments) => calculateAnalytics(comments))
  .then(() => {
    log("END", 0, "All promise chain completed");
  });