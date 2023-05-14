function callback(response) {
    let problems = response.response.problems;
    for (let i = 0; i < problems.length; i++) {
        let solution = problems[i]["solution_text"];
        console.log(solution);
    }
}


// insert fetch callback
.then((response) => response.json())
  .then((response) => {
    callback(response)
  });
