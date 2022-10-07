const numberOfComment = document.getElementsByClassName("comment-list").length;

let isInsideGroup =
  document.getElementsByClassName("filter-comment")[0].value !== "0"
    ? true
    : false;

// const isInsideGroup = voteOption !== "1" ? true : false;

const start_4_insideGroup = document.getElementsByClassName(
  `edn-vote type-${isInsideGroup ? 0 : 1} level-1`
);
const start_3_insideGroup = document.getElementsByClassName(
  `edn-vote type-${isInsideGroup ? 0 : 1} level-2`
);
const start_2_insideGroup = document.getElementsByClassName(
  `edn-vote type-${isInsideGroup ? 0 : 1} level-3`
);
const start_1_insideGroup = document.getElementsByClassName(
  `edn-vote type-${isInsideGroup ? 0 : 1} level-4`
);

const remainingStart4 =
  start_4_insideGroup[0].children[1].children[0].innerHTML;
const remainingStart3 =
  start_3_insideGroup[0].children[1].children[0].innerHTML;
const remainingStart2 =
  start_2_insideGroup[0].children[1].children[0].innerHTML;
const remainingStart1 =
  start_1_insideGroup[0].children[1].children[0].innerHTML;

let countStopVote =
  +remainingStart4 + +remainingStart3 + +remainingStart2 + +remainingStart1;

let votePos = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processVote() {
  for (let j = 0; j < remainingStart4; j++) {
    console.log("clicked 4 sao");
    start_4_insideGroup[votePos].click();
    votePos++;
    console.log("Vote Pos: " + votePos);
    await sleep(2 * 1000);
  }

  for (let k = 0; k < remainingStart3; k++) {
    console.log("clicked 3 sao");
    start_3_insideGroup[votePos].click();
    votePos++;

    console.log("Vote Pos: " + votePos);
    await sleep(2 * 1000);
  }
  for (let l = 0; l < remainingStart3; l++) {
    console.log("clicked 2 sao");
    start_2_insideGroup[votePos].click();
    votePos++;

    console.log("Vote Pos: " + votePos);
    await sleep(2 * 1000);
  }
  for (let m = 0; m < remainingStart3; m++) {
    console.log("clicked 1 sao");
    start_1_insideGroup[votePos].click();
    votePos++;

    console.log("Vote Pos: " + votePos);
    await sleep(2 * 1000);
  }
}

processVote();
