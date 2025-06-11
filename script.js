
const questions = [
  {
    text: "You wake up to a glowing message on your wristband: 'Choose your first mission.' What kind of adventure would you pick today?",
    options: [
      { text: "Break into a mad scientist’s secret lab", value: "science" },
      { text: "Hack into a mysterious virtual world", value: "it" },
      { text: "Gather your lost friends for a reunion", value: "social" },
      { text: "Color the world with magical paint", value: "arts" },
      { text: "Build a secret hideout in the woods", value: "practical" }
    ]
  },
  {
    text: "You put on your mission gear. Your digital buddy blinks to life and asks, 'What’s your undercover name?'",
    options: [
      { text: "Lorsatan the Logical", value: "science" },
      { text: "printf('helloworld')", value: "it" },
      { text: "Captain Kindheart", value: "social" },
      { text: "Dreamweaver Dali", value: "arts" },
      { text: "Wrenchmaster Willow", value: "practical" }
    ]
  },
  {
    text: "A magical companion joins you. What kind of creature do you bond with?",
    options: [
      { text: "A glowing jellyfish that whispers facts", value: "science" },
      { text: "A pixelated fox that speaks in code", value: "it" },
      { text: "A talking owl that gives advice", value: "social" },
      { text: "A rainbow cat that sings in rhymes", value: "arts" },
      { text: "A stone golem that builds bridges", value: "practical" }
    ]
  },
  {
    text: "You have to break into the target hideout. How would you try?",
    options: [
      { text: "Pick the impossible lock", value: "practical" },
      { text: "Pour acidic chemicals to melt the door", value: "science" },
      { text: "Hack the security system", value: "it" },
      { text: "Get your companion to climb into the vent", value: "social" },
      { text: "Disguise yourself", value: "arts" }
    ]
  },
  {
    text: "As you step outside, a shimmering portal appears. It can take you anywhere. Where do you go?",
    options: [
      { text: "A floating lab orbiting a distant planet", value: "science" },
      { text: "A neon-lit city inside a computer chip", value: "it" },
      { text: "A village where everyone speaks in riddles", value: "social" },
      { text: "A dreamscape painted by imagination", value: "arts" },
      { text: "A forest of gears and glowing machines", value: "practical" }
    ]
  },
  {
    text: "To pass through the portal, you must solve a challenge. What kind of puzzle do you choose?",
    options: [
      { text: "A logic grid about chemical reactions", value: "science" },
      { text: "A code-breaking sequence", value: "it" },
      { text: "A social mystery involving hidden motives", value: "social" },
      { text: "A visual riddle made of shifting colors", value: "arts" },
      { text: "A mechanical lock with moving parts", value: "practical" }
    ]
  },
  {
    text: "You find a backpack with one special item inside. What is it?",
    options: [
      { text: "A microscope that reveals hidden truths", value: "science" },
      { text: "A USB drive with mysterious files", value: "it" },
      { text: "A journal filled with stories from strangers", value: "social" },
      { text: "A sketchbook that draws itself", value: "arts" },
      { text: "A multi-tool that transforms into anything", value: "practical" }
    ]
  },
  {
    text: "Your companion gives you a map with a glowing trail. Where does it lead?",
    options: [
      { text: "A volcano where scientists study lava", value: "science" },
      { text: "A server room deep beneath the earth", value: "it" },
      { text: "A festival of voices and ideas", value: "social" },
      { text: "A gallery of living paintings", value: "arts" },
      { text: "A workshop powered by steam and dreams", value: "practical" }
    ]
  },
  {
    text: "You reach a checkpoint. To continue, you must complete a task. What do you choose?",
    options: [
      { text: "Mix potions to create a new element", value: "science" },
      { text: "Program a robot to dance", value: "it" },
      { text: "Help two kingdoms make peace", value: "social" },
      { text: "Compose a melody that opens a gate", value: "arts" },
      { text: "Build a bridge across a canyon", value: "practical" }
    ]
  },
  {
    text: "A wise mentor appears to guide you. Who are they?",
    options: [
      { text: "A scientist with a telescope for an eye", value: "science" },
      { text: "A hacker who speaks in riddles", value: "it" },
      { text: "A diplomat with a cloak of many languages", value: "social" },
      { text: "An artist who paints with light", value: "arts" },
      { text: "An inventor with a backpack full of tools", value: "practical" }
    ]
  },
  {
    text: "You travel through a magical land. What does it look like?",
    options: [
      { text: "Crystals that hum with energy", value: "science" },
      { text: "Floating data streams and glowing grids", value: "it" },
      { text: "Villages connected by bridges of trust", value: "social" },
      { text: "Hills that change color with emotion", value: "arts" },
      { text: "Mountains carved by ancient machines", value: "practical" }
    ]
  },
  {
    text: "You stumble upon a hidden treasure. What is it?",
    options: [
      { text: "A formula that changes gravity", value: "science" },
      { text: "A lost algorithm that predicts dreams", value: "it" },
      { text: "A scroll of forgotten wisdom", value: "social" },
      { text: "A paintbrush that creates real objects", value: "arts" },
      { text: "A blueprint for a flying machine", value: "practical" }
    ]
  },
  {
    text: "You arrive at a festival celebrating knowledge. What do you join?",
    options: [
      { text: "A science fair with floating experiments", value: "science" },
      { text: "A coding competition with glowing keyboards", value: "it" },
      { text: "A storytelling circle under the stars", value: "social" },
      { text: "A costume parade of living art", value: "arts" },
      { text: "A race to build the fastest cart", value: "practical" }
    ]
  },
  {
    text: "You’re offered a magical gift to help you on your journey. What do you choose?",
    options: [
      { text: "A crystal that reveals scientific truths", value: "science" },
      { text: "A glove that controls digital worlds", value: "it" },
      { text: "A pendant that lets you speak any language", value: "social" },
      { text: "A cloak that changes with your mood", value: "arts" },
      { text: "Boots that let you walk on any surface", value: "practical" }
    ]
  },
  {
    text: "You face your final trial. What kind of challenge do you embrace?",
    options: [
      { text: "Solve a mystery of disappearing stars", value: "science" },
      { text: "Decode a message from another dimension", value: "it" },
      { text: "Unite a divided council", value: "social" },
      { text: "Create a masterpiece that saves the day", value: "arts" },
      { text: "Construct a machine to restore balance", value: "practical" }
    ]
  },
  {
    text: "At the end of your journey, a gate opens to your future. What lies beyond?",
    options: [
      { text: "A university of endless experiments", value: "science" },
      { text: "A digital realm of infinite code", value: "it" },
      { text: "A center for global leadership", value: "social" },
      { text: "A sanctuary of creativity", value: "arts" },
      { text: "A forge of invention and action", value: "practical" }
    ]
  }
];

let currentQuestion = 0;
let answers = [];

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const resultDiv = document.getElementById("result");

function showQuestion(index) {
  const q = questions[index];
  questionContainer.innerHTML = `
    <div class="question">
      <p>${q.text}</p>
      ${q.options.map((opt, i) => `
        <label>
          <input type="radio" name="answer" value="${opt.value}" />
          ${opt.text}
        </label><br/>
      `).join("")}
    </div>
  `;
}

function showResult() {
  const counts = { science: 0, it: 0, social: 0, arts: 0, practical: 0 };
  answers.forEach(ans => counts[ans]++);
  let result;
  if (counts.it > counts.science && counts.it > counts.social && counts.it > counts.arts && counts.it > counts.practical) {
    result = "💻 You are the Computing Creator!";
  } else if (counts.science > counts.it && counts.science > counts.social && counts.science > counts.arts && counts.science > counts.practical) {
    result = "🔬 You are the Science & Data Seeker!";
  } else if (counts.social > counts.it && counts.social > counts.science && counts.social > counts.arts && counts.social > counts.practical) {
    result = "🌍 You are the Cultural Voyager!";
  } else if (counts.arts > counts.it && counts.arts > counts.science && counts.arts > counts.social && counts.arts > counts.practical) {
    result = "🎭 You are the Social Artist!";
  } else if (counts.practical > counts.it && counts.practical > counts.science && counts.practical > counts.social && counts.practical > counts.arts) {
    result = "🛠️ You are the Practical Pathfinder!";
  } else if (counts.it >= 2 && counts.social >= 2) {
    result = "💼 You are the Strategic Visionary!";
  } else if (counts.science >= 2 && counts.it >= 2) {
    result = "🧠 You are the Theorist & Philosopher!";
  } else {
    result = "🌟 You have a unique blend of talents!";
  }
  questionContainer.innerHTML = "";
  nextBtn.style.display = "none";
  resultDiv.textContent = result;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Please select an answer!");
    return;
  }
  answers.push(selected.value);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
});

showQuestion(currentQuestion);
