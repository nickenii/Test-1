document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      text: "🌟 What kind of adventure excites you the most?",
      options: [
        { text: "Exploring a lab full of bubbling experiments", value: "science" },
        { text: "Hacking into a virtual world", value: "it" },
        { text: "Leading a team on a mission", value: "social" },
        { text: "Painting a mural on a castle wall", value: "arts" },
        { text: "Building a treehouse in the forest", value: "practical" }
      ]
    },
    {
      text: "🧙 You put on your mission gear. Your digital buddy asks, “What’s your undercover name?”",
      options: [
        { text: "Lorsatan the Logical", value: "science" },
        { text: "printf('buddy')", value: "it" },
        { text: "Captain Kindheart", value: "social" },
        { text: "Dreamweaver Dali", value: "arts" },
        { text: "Wrenchmaster Willow", value: "practical" }
      ]
    },
    {
      text: "🧚 A magical companion joins you. What kind of creature do you bond with?",
      options: [
        { text: "A glowing jellyfish that whispers facts", value: "science" },
        { text: "A pixelated fox that speaks in code", value: "it" },
        { text: "A talking owl that gives advice", value: "social" },
        { text: "A rainbow cat that sings in rhymes", value: "arts" },
        { text: "A stone golem that builds bridges", value: "practical" }
      ]
    },
    {
      text: "🕵️ You have to break into the target hideout. How would you try?",
      options: [
        { text: "Pour acidic chemicals to melt the door", value: "science" },
        { text: "Hack the security system", value: "it" },
        { text: "Disguise yourself and sneak in", value: "social" },
        { text: "Get your companion to climb into the vent", value: "arts" },
        { text: "Pick the impossible lock", value: "practical" }
      ]
    },
    {
      text: "🎒 You find a backpack with one special item inside. What is it?",
      options: [
        { text: "A glasses that reveals hidden truths", value: "science" },
        { text: "A USB drive with mysterious files", value: "it" },
        { text: "A bagpack of endless money ", value: "social" },
        { text: "A sketchbook that makes anything that is drawn", value: "arts" },
        { text: "A multi-tool that opens any lock", value: "practical" }
      ]
    },
    {
      text: "🗺️ Your companion gives you a map with a glowing trail. Where does it lead?",
      options: [
        { text: "A volcano where scientists study lava", value: "science" },
        { text: "A server room deep beneath the earth", value: "it" },
        { text: "A festival of voices and ideas", value: "social" },
        { text: "A gallery of living paintings", value: "arts" },
        { text: "A workshop powered by steam and dreams", value: "practical" }
      ]
    },
    {
      text: "🧩 You reach a checkpoint. To continue, you must complete a task. What do you choose?",
      options: [
        { text: "Mix potions to create a new element", value: "science" },
        { text: "Program a robot to dance", value: "it" },
        { text: "Help two kingdoms make peace", value: "social" },
        { text: "Compose a melody that opens a gate", value: "arts" },
        { text: "Build a bridge across a canyon", value: "practical" }
      ]
    },
    {
      text: "🧙‍♂️ A wise mentor appears to guide you. Who are they?",
      options: [
        { text: "A scientist with a telescope for an eye", value: "science" },
        { text: "A hacker who speaks in riddles", value: "it" },
        { text: "A diplomat with a cloak of many languages", value: "social" },
        { text: "An artist who paints with light", value: "arts" },
        { text: "An inventor with a backpack full of tools", value: "practical" }
      ]
    },
    {
      text: "🌄 You travel through a magical land. What does it look like?",
      options: [
        { text: "Crystals that never goes dark", value: "science" },
        { text: "Endless electricity to charge your phone", value: "it" },
        { text: "Friendly villagers offering free food", value: "social" },
        { text: "Grass that change color with emotion", value: "arts" },
        { text: "Flying busses", value: "practical" }
      ]
    },
    {
      text: "💎 You stumble upon a hidden treasure. What is it?",
      options: [
        { text: "A formula that changes gravity", value: "science" },
        { text: "A lost algorithm that predicts dreams", value: "it" },
        { text: "A scroll of forgotten wisdom", value: "social" },
        { text: "A paintbrush that creates real objects", value: "arts" },
        { text: "A blueprint for a flying machine", value: "practical" }
      ]
    },
    {
      text: "🎉 You arrive at a festival celebrating knowledge. What do you join?",
      options: [
        { text: "A science fair with floating experiments", value: "science" },
        { text: "A coding competition with glowing keyboards", value: "it" },
        { text: "A storytelling circle under the stars", value: "social" },
        { text: "A costume parade of living art", value: "arts" },
        { text: "A race to build the fastest cart", value: "practical" }
      ]
    },
    {
      text: "🎁 You’re offered a magical gift to help you on your journey. What do you choose?",
      options: [
        { text: "A crystal that reveals scientific truths", value: "science" },
        { text: "A glove that controls digital worlds", value: "it" },
        { text: "A pendant that lets you speak any language", value: "social" },
        { text: "A cloak that changes with your mood", value: "arts" },
        { text: "Boots that let you walk on any surface", value: "practical" }
      ]
    },
    {
      text: "⚔️ You face your final trial. What kind of challenge do you embrace?",
      options: [
        { text: "Solve a mystery of disappearing stars", value: "science" },
        { text: "Decode a message from another dimension", value: "it" },
        { text: "Unite a divided council", value: "social" },
        { text: "Create a masterpiece that saves the day", value: "arts" },
        { text: "Construct a machine to restore balance", value: "practical" }
      ]
    },
    {
      text: "🚪 At the end of your journey, a gate opens to your future. What lies beyond?",
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

  const coverPage = document.getElementById("cover-page");
  const quizContent = document.getElementById("quiz-content");
  const questionContainer = document.getElementById("question-container");
  const endingPage = document.getElementById("ending-page");
  const finalResultDiv = document.getElementById("final-result");
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", () => {
    coverPage.style.display = "none";
    quizContent.style.display = "block";
    showQuestion(currentQuestion);
  });

  function showQuestion(index) {
    const q = questions[index];
    questionContainer.innerHTML = `
      <div class="question">
        <p>${q.text}</p>
        <div class="options">
          ${q.options.map((opt, i) => `
            <div class="option" tabindex="0" data-value="${opt.value}">
              <button type="button" class="option-btn">${opt.text}</button>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.addEventListener("click", () => {
        // Remove selection from all
        document.querySelectorAll(".option").forEach(label => label.classList.remove("selected"));
        // Add selection to the clicked
        btn.parentElement.classList.add("selected");
        // Store answer
        answers.push(btn.parentElement.getAttribute("data-value"));
        currentQuestion++;
        setTimeout(() => {
          if (currentQuestion < questions.length) {
            showQuestion(currentQuestion);
          } else {
            showResult();
          }
        }, 300);
      });
    });
  }

  function showResult() {
    const counts = { science: 0, it: 0, social: 0, arts: 0, practical: 0 };
    answers.forEach(ans => counts[ans]++);
    let result;
    if (counts.it > counts.science && counts.it > counts.social && counts.it > counts.arts && counts.it > counts.practical) {
      result = "💻 Computing Creator!\n\nYour brain is always buzzing with cool ideas to build! For you, studying isn't just about textbooks; it's about getting the skills to bring your digital dreams to life. You love figuring out tricky problems, enjoy the challenge of writing code, and see the world as a giant puzzle waiting for your solutions. Whether you're dreaming of creating the next big app, designing amazing games, or making AI do incredible things, you're ready to shape the future, one line of code at a time.";
    } else if (counts.science > counts.it && counts.science > counts.social && counts.science > counts.arts && counts.science > counts.practical) {
      result = "🔬 Science & Data Seeker!\n\nYour curiosity is off the charts! You're driven by a deep need to understand how everything works, from tiny cells to massive galaxies. Your ideal study journey involves exciting experiments, crunching numbers, and the thrill of new discoveries. You're great with complex information, enjoy solving complicated puzzles, and are excited to contribute to scientific breakthroughs, whether you're in a lab, out in the field, or working with powerful computers.";
    } else if (counts.social > counts.it && counts.social > counts.science && counts.social > counts.arts && counts.social > counts.practical) {
      result = "🌍 Cultural Voyager!\n\nSomeone who always wants to explore the amazing variety of human cultures, histories, and how the world connects. For you, studying is like an adventure – a chance to discover different societies, languages, and ways of living. You love learning about the past to understand today, analyzing global trends, and helping people from different backgrounds understand each other. Your ideal path involves broadening your horizons, embracing diversity, and becoming a bridge between different worlds, whether through international studies, history, or preserving cultural heritage.";
    } else if (counts.arts > counts.it && counts.arts > counts.science && counts.arts > counts.social && counts.arts > counts.practical) {
      result = "🎭 Social Artist!\n\nYou really gets people and how they express themselves! You're at your best when you're exploring how people behave, how societies work, and different cultures, then using that understanding to make a difference. Your studies will likely involve connecting with all sorts of viewpoints, understanding social dynamics, and developing skills to communicate, connect, and inspire. Whether you're passionate about telling stories, fighting for what's right, creating engaging experiences, or understanding the human mind, you're ready to make your mark on the world with empathy and creativity.";
    } else if (counts.practical > counts.it && counts.practical > counts.science && counts.practical > counts.social && counts.practical > counts.arts) {
      result = "🛠️ Practical Pathfinder!\n\nYou love getting your hands dirty and solving real-world problems! You thrive on taking ideas and making them happen, creating actual solutions, and seeing the direct results of your hard work. For you, studying is about gaining useful, hands-on skills and knowledge that you can immediately put to good use. You're drawn to fields where you can invent, build, improve things, and directly help make practical improvements, whether it's in engineering, technical trades, or applied sciences.";
    } else {
      result = "🌟 You have a unique blend of talents!\n\nYou have strengths across many fields, making you adaptable and ready for any challenge. Explore different paths and combine your interests for a truly magical future!";
    }

    quizContent.style.display = "none";
    endingPage.style.display = "block";
    finalResultDiv.textContent = ""; // Clear previous
    // Use pre-line to preserve paragraphs
    finalResultDiv.innerText = result;
  }
});

