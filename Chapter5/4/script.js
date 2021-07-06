console.log ('Dominant writing direction');

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
}
  
function countBy(items, groupDir) {
    let counts = [];
    for (let item of items) {
      let direction = groupDir(item);
      let known = counts.findIndex(c => c.direction == direction);
      if (known == -1) {
        counts.push({direction, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
}

  function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({direction}) => direction != "none");
  
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    let biggest = scripts.reduce(({count}) => Math.max(count));
    return biggest.direction;
}

console.log(dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));