const char = createKnight("Rafael");
const monster = createLittleMonster();

stage.start(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster")
);
