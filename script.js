document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = ["q1", "q2", "q3"].map(q => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    return selected ? selected.value : null;
  });

  if (answers.includes(null)) {
    alert("Please answer all questions!");
    return;
  }

  const counts = { frontend: 0, backend: 0, fullstack: 0 };
  answers.forEach(answer => counts[answer]++);

  let result;
  if (counts.frontend >= 2) result = "🎨 You are the Frontend Fan!";
  else if (counts.backend >= 2) result = "🔧 You are the Backend Boss!";
  else result = "🧙 You are the Fullstack Wizard!";

  document.getElementById("result").textContent = result;
});
