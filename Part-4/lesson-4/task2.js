function log(step, level, message) {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] Level ${level} - ${step}: ${message}`);
}

log("START", 0, "Program started");

setTimeout(() => {
  const userId = 101;
  log("Step 1", 1, `Fetched User ID = ${userId}`);

  setTimeout(() => {
    const posts = ["Post A", "Post B"];
    log("Step 2", 2, `Fetched Posts for User ${userId}`);

    setTimeout(() => {
      const comments = ["Nice", "Great"];
      log("Step 3", 3, `Fetched Comments for Posts`);

      setTimeout(() => {
        const analytics = { views: 250 };
        log("Step 4", 4, `Calculated Analytics: ${analytics.views} views`);

        log("END", 0, "All nested callbacks completed");

      }, 800);

    }, 700);

  }, 600);

}, 500);