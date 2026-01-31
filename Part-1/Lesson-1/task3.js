console.log("=== Loop Behavior Test Start ===");

// VAR LOOP
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("VAR loop value:", i);
  }, 100);
}

// LET LOOP
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log("LET loop value:", j);
  }, 200);
}

// CONST LOOP
for (const k of [0, 1, 2]) {
  setTimeout(() => {
    console.log("CONST loop value:", k);
  }, 300);
}

// Final log (after all delays)
setTimeout(() => {
  console.log("All delayed logs completed");
}, 400);