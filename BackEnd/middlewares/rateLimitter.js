const rate = {};

export function rateLimit(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const WINDOW_SIZE = 5 * 60 * 1000; // 5 minutes
  const MAX_REQUESTS = 50;

  if (!rate[ip]) {
    rate[ip] = {
      count: 1,
      startTime: now
    };
    return next();
  }

  const timePassed = now - rate[ip].startTime;

  if (timePassed > WINDOW_SIZE) {
    // Reset after window expires
    rate[ip] = {
      count: 1,
      startTime: now
    };
    return next();
  }

  rate[ip].count++;

  if (rate[ip].count > MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      message: "Too many requests. Try again later."
    });
  }

  next();
}
