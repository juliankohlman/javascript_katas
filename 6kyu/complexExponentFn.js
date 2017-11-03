// Compute the exponential function at any given complex number, accurate to
// at least 1 in 10^-12.

function exp([a, b]) {
  return [Math.exp(a) * Math.cos(b), Math.exp(a) * Math.sin(b)];
}

exp([3, 0]);
exp([3, Math.PI]);
exp([0, 9.42477796076938]);
