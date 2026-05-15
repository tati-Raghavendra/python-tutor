const modules = [
  {
    title: "Python Setup and First Program",
    goal: "Understand what Python is, how programs run, and how to write your first clean script.",
    lessons: 4,
    conceptTitle: "From idea to running code",
    concept: [
      "Python is a programming language that reads instructions from top to bottom. A program is simply a saved set of instructions that solves a small problem.",
      "Start with tiny scripts. Write one idea, run it, read the output, then improve it. This habit matters more than memorizing syntax.",
      "Use comments to explain why something exists, not to repeat the obvious. A good beginner program should be easy to run again later."
    ],
    bullets: [
      "A Python file normally ends with .py.",
      "print() shows information on the screen.",
      "Errors are feedback. Read the last line first, then fix one issue at a time."
    ],
    callout: "Practice rule: after every new concept, type the example yourself once before changing it.",
    code: `# first_program.py
name = "Learner"
topic = "Python"

print("Hello", name)
print("Today I am starting", topic)
print("Small steps become real skill.")`,
    output: "Hello Learner\nToday I am starting Python\nSmall steps become real skill.",
    practice: [
      "Print your name, city, and one reason you want to learn Python.",
      "Create three variables about a student and print them in separate lines.",
      "Intentionally misspell print as pritn, run it, and read the error message."
    ],
    project: {
      title: "Personal Introduction Card",
      description: "Create a script that prints a neat text card containing your name, goal, favorite subject, and current learning streak.",
      checks: ["Uses at least four variables", "Prints a clean heading", "Runs without errors"]
    }
  },
  {
    title: "Variables and Data Types",
    goal: "Store values, identify basic data types, and use them in simple calculations.",
    lessons: 5,
    conceptTitle: "Names for values",
    concept: [
      "A variable is a name attached to a value. It helps your program remember information and reuse it later.",
      "Core Python values include strings for text, integers for whole numbers, floats for decimals, and booleans for true or false decisions.",
      "Python decides the type from the value you assign. You can check it with type() while learning."
    ],
    bullets: [
      "Use clear names like total_marks instead of tm.",
      "Strings go inside quotes.",
      "Numbers can be calculated directly with arithmetic operators."
    ],
    callout: "Better understanding comes from changing values and predicting the new output before running the program.",
    code: `student = "Asha"
math_marks = 88
science_marks = 92
average = (math_marks + science_marks) / 2
passed = average >= 40

print(student)
print("Average:", average)
print("Passed:", passed)
print(type(average))`,
    output: "Asha\nAverage: 90.0\nPassed: True\n<class 'float'>",
    practice: [
      "Store item price and quantity, then print the total bill.",
      "Create variables for a movie name, rating, and watched status.",
      "Convert minutes into hours and remaining minutes."
    ],
    project: {
      title: "Simple Bill Calculator",
      description: "Build a script that stores three product prices, calculates subtotal, tax, and final amount.",
      checks: ["Uses int or float values", "Calculates with variables", "Prints labels with each amount"]
    }
  },
  {
    title: "Input and Operators",
    goal: "Take user input, convert it safely, and build small interactive programs.",
    lessons: 5,
    conceptTitle: "Programs that listen",
    concept: [
      "input() pauses the program and waits for the user to type something. The value returned by input() is always text.",
      "When you need math, convert input using int() or float(). This is called type conversion.",
      "Operators let you calculate, compare, and combine values. For beginners, arithmetic and comparison operators unlock many useful programs."
    ],
    bullets: [
      "Use int(input(...)) for whole number input.",
      "Use float(input(...)) for decimal input.",
      "Comparison operators return True or False."
    ],
    callout: "Most beginner bugs here happen because input is text. Convert before doing math.",
    code: `name = input("Enter your name: ")
age = int(input("Enter your age: "))
next_age = age + 1

print("Hi", name)
print("Next year you will be", next_age)
print("Adult:", age >= 18)`,
    output: "Enter your name: Ravi\nEnter your age: 17\nHi Ravi\nNext year you will be 18\nAdult: False",
    practice: [
      "Ask for two numbers and print their sum, difference, product, and division.",
      "Ask for temperature in Celsius and convert it to Fahrenheit.",
      "Ask for marks in three subjects and calculate percentage."
    ],
    project: {
      title: "Marks Percentage Tool",
      description: "Create a program that asks for student name and marks in five subjects, then prints total and percentage.",
      checks: ["Uses input for every mark", "Converts input before adding", "Shows percentage clearly"]
    }
  },
  {
    title: "Conditions",
    goal: "Make programs choose different paths using if, elif, and else.",
    lessons: 6,
    conceptTitle: "Decision making",
    concept: [
      "Conditions allow a program to react. If a condition is True, Python runs the indented block below it.",
      "Use elif when there are multiple possible cases. Use else for the fallback when no previous condition matched.",
      "Indentation is part of Python syntax. Blocks must line up cleanly."
    ],
    bullets: [
      "if checks the first condition.",
      "elif checks another condition only if previous checks failed.",
      "else runs when none of the conditions were True."
    ],
    callout: "Before running a conditional program, test it mentally with three values: low, exact boundary, and high.",
    code: `marks = int(input("Enter marks: "))

if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
elif marks >= 50:
    grade = "C"
else:
    grade = "Needs practice"

print("Grade:", grade)`,
    output: "Enter marks: 82\nGrade: B",
    practice: [
      "Check whether a number is positive, negative, or zero.",
      "Check whether a year is a leap year.",
      "Create a simple login check using username and password."
    ],
    project: {
      title: "Grade and Feedback System",
      description: "Ask for marks, calculate grade, and print a useful feedback message for each grade range.",
      checks: ["Uses if, elif, and else", "Handles marks below 40", "Includes boundary values like 40, 75, and 90"]
    }
  },
  {
    title: "Loops and Patterns",
    goal: "Repeat work using for and while loops, then strengthen logic with pattern programs.",
    lessons: 8,
    conceptTitle: "Repeating with control",
    concept: [
      "Loops repeat a block of code. A for loop is best when you know the range or collection. A while loop is best when repetition depends on a condition.",
      "range() helps create number sequences. It is commonly used for counting, tables, and pattern programs.",
      "Pattern problems improve loop thinking because you must control rows, columns, spaces, and symbols."
    ],
    bullets: [
      "for i in range(5) runs with i from 0 to 4.",
      "Nested loops place one loop inside another.",
      "A while loop must update something, or it may never stop."
    ],
    callout: "After learning loops, spend extra time on patterns and number series. This is where loop confidence becomes real.",
    code: `rows = 5

for row in range(1, rows + 1):
    pattern = ""
    for col in range(row):
        pattern += "* "
    print(pattern)`,
    output: "* \n* * \n* * * \n* * * * \n* * * * *",
    practice: [
      "Print multiplication table for a number entered by the user.",
      "Print numbers from 1 to 100 that are divisible by 3.",
      "Print square, triangle, reverse triangle, and number pyramid patterns.",
      "Find the sum of digits of a number using a while loop.",
      "Check whether a number is prime."
    ],
    project: {
      title: "Pattern Practice Lab",
      description: "Create a menu-driven program where the user chooses one of five patterns and enters the number of rows.",
      checks: ["Uses nested loops", "Has at least five pattern choices", "Repeats until the user chooses exit"]
    }
  },
  {
    title: "Strings",
    goal: "Work with text using indexing, slicing, methods, and small validation programs.",
    lessons: 6,
    conceptTitle: "Text as data",
    concept: [
      "A string is a sequence of characters. Each character has an index, starting from 0.",
      "Slicing lets you take part of a string. Methods like lower(), strip(), replace(), and split() help clean and transform text.",
      "String practice is useful for real programs because user input usually arrives as text."
    ],
    bullets: [
      "word[0] gives the first character.",
      "word[::-1] reverses a string.",
      "Use strip() to remove extra spaces around input."
    ],
    callout: "Try each string method with messy input. Real users rarely type perfect text.",
    code: `message = "  Python Practice  "
clean = message.strip()

print(clean.upper())
print("First:", clean[0])
print("Last:", clean[-1])
print("Reverse:", clean[::-1])`,
    output: "PYTHON PRACTICE\nFirst: P\nLast: e\nReverse: ecitcarP nohtyP",
    practice: [
      "Check whether a word is a palindrome.",
      "Count vowels and consonants in a sentence.",
      "Ask for full name and print initials.",
      "Replace spaces in a sentence with hyphens."
    ],
    project: {
      title: "Username Generator",
      description: "Ask for first name, last name, and birth year, then create three clean username suggestions.",
      checks: ["Uses lower() and strip()", "Uses slicing or indexing", "Handles names with extra spaces"]
    }
  },
  {
    title: "Lists and Tuples",
    goal: "Store multiple values, update lists, loop through them, and solve collection problems.",
    lessons: 7,
    conceptTitle: "Many values together",
    concept: [
      "A list stores multiple values in order and can be changed. A tuple also stores multiple values in order, but it is usually treated as fixed.",
      "Lists are perfect for marks, names, cart items, tasks, and search problems.",
      "You can loop through a list directly or use indexes when position matters."
    ],
    bullets: [
      "append() adds a value at the end.",
      "remove() deletes a matching value.",
      "len() gives the number of items."
    ],
    callout: "When solving list problems, first ask: do I need every item, only matching items, or the position of an item?",
    code: `marks = [78, 91, 66, 84, 90]
total = 0

for mark in marks:
    total += mark

average = total / len(marks)
print("Total:", total)
print("Average:", average)
print("Highest:", max(marks))`,
    output: "Total: 409\nAverage: 81.8\nHighest: 91",
    practice: [
      "Find largest and smallest number in a list without using max() or min().",
      "Store five names and print only names longer than five characters.",
      "Remove duplicate values from a list.",
      "Sort marks and print the top three."
    ],
    project: {
      title: "Student Marks Manager",
      description: "Create a program that stores marks, shows total, average, highest, lowest, and pass count.",
      checks: ["Uses list operations", "Loops through marks", "Prints a clean report"]
    }
  },
  {
    title: "Dictionaries and Sets",
    goal: "Represent real-world records with key-value pairs and unique collections.",
    lessons: 6,
    conceptTitle: "Data with meaning",
    concept: [
      "A dictionary stores data as key-value pairs. It is useful when every value needs a label, like name, age, course, or price.",
      "A set stores unique values. It is useful for removing duplicates and comparing groups.",
      "Dictionaries make beginner projects feel more realistic because they model actual records."
    ],
    bullets: [
      "student['name'] reads a value by key.",
      "student['city'] = 'Pune' adds or updates a key.",
      "set(list_name) removes duplicates."
    ],
    callout: "Think of a dictionary as one record. Think of a list of dictionaries as a small database.",
    code: `student = {
    "name": "Meera",
    "course": "Python",
    "score": 86
}

student["status"] = "Passed"

for key, value in student.items():
    print(key, ":", value)`,
    output: "name : Meera\ncourse : Python\nscore : 86\nstatus : Passed",
    practice: [
      "Create a dictionary for a book and print each detail.",
      "Count how many times each character appears in a word.",
      "Remove duplicate numbers using a set.",
      "Compare two sets of students and find common names."
    ],
    project: {
      title: "Contact Book",
      description: "Build a contact book using a list of dictionaries. Support adding contacts and searching by name.",
      checks: ["Uses dictionaries for contacts", "Uses a list to store many contacts", "Includes a search feature"]
    }
  },
  {
    title: "Functions",
    goal: "Break programs into reusable pieces and write cleaner solutions.",
    lessons: 7,
    conceptTitle: "Reusable logic",
    concept: [
      "A function is a named block of code that performs one job. Functions reduce repetition and make programs easier to test.",
      "Parameters are inputs to a function. return sends a result back to the part of the program that called it.",
      "Good functions usually do one clear thing."
    ],
    bullets: [
      "Use def to create a function.",
      "Use return when the caller needs the result.",
      "Avoid putting the whole program into one huge function."
    ],
    callout: "Convert older practice programs into functions. This shows whether you truly understand the logic.",
    code: `def calculate_percentage(marks):
    total = sum(marks)
    return total / len(marks)

def get_grade(percentage):
    if percentage >= 75:
        return "Distinction"
    if percentage >= 50:
        return "Pass"
    return "Practice more"

scores = [80, 76, 91, 69]
percentage = calculate_percentage(scores)
print(percentage)
print(get_grade(percentage))`,
    output: "79.0\nDistinction",
    practice: [
      "Write a function that checks if a number is even.",
      "Write a function that returns factorial of a number.",
      "Write a function that counts vowels in text.",
      "Rewrite your grade program using functions."
    ],
    project: {
      title: "Calculator Toolkit",
      description: "Create separate functions for add, subtract, multiply, divide, percentage, and simple interest.",
      checks: ["Every operation is a function", "Handles divide by zero", "Has a menu for the user"]
    }
  },
  {
    title: "Files and Exceptions",
    goal: "Save data, read data, and handle errors without crashing.",
    lessons: 6,
    conceptTitle: "Programs with memory",
    concept: [
      "Files let programs store information after the program ends. You can write text to a file and read it back later.",
      "Exceptions are errors that happen while a program is running. try and except help you respond gracefully.",
      "File handling plus exception handling is the foundation for useful command-line tools."
    ],
    bullets: [
      "with open(...) closes the file automatically.",
      "Use 'w' to write and 'a' to append.",
      "Catch specific errors when possible."
    ],
    callout: "Do not hide every error with a broad except. Handle the error you expect and learn from the rest.",
    code: `try:
    note = input("Write a note: ")
    with open("notes.txt", "a", encoding="utf-8") as file:
        file.write(note + "\\n")
    print("Saved")
except OSError:
    print("Could not save the note")`,
    output: "Write a note: Practice Python daily\nSaved",
    practice: [
      "Save five names into a file, one per line.",
      "Read a file and count the number of lines.",
      "Ask for a number and handle invalid input with try/except.",
      "Append daily study notes to a text file."
    ],
    project: {
      title: "Daily Notes App",
      description: "Build a menu-based notes app that can add notes, view all notes, and count total notes.",
      checks: ["Uses file append mode", "Reads saved notes", "Handles missing file gracefully"]
    }
  },
  {
    title: "Object-Oriented Programming",
    goal: "Learn classes, objects, methods, and inheritance without jumping ahead too fast.",
    lessons: 8,
    conceptTitle: "Blueprints and objects",
    concept: [
      "A class is a blueprint. An object is a real value created from that blueprint. This helps group data and behavior together.",
      "__init__ runs when an object is created. self means the current object.",
      "OOP becomes useful when your program has many related records that share behavior, like students, bank accounts, products, or tasks."
    ],
    bullets: [
      "Attributes store object data.",
      "Methods are functions inside a class.",
      "Inheritance lets one class reuse behavior from another class."
    ],
    callout: "Before moving past OOP, build at least two class-based projects. OOP needs practice, not just reading.",
    code: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def show_balance(self):
        print(self.owner, "has", self.balance)

account = BankAccount("Nisha", 1000)
account.deposit(500)
account.show_balance()`,
    output: "Nisha has 1500",
    practice: [
      "Create a Student class with name, marks, and a method to show grade.",
      "Create a Rectangle class with area and perimeter methods.",
      "Create a Product class and update stock after purchase.",
      "Use inheritance to create SavingsAccount from BankAccount."
    ],
    project: {
      title: "Library Management Mini App",
      description: "Create Book and Library classes. Add books, show available books, borrow a book, and return a book.",
      checks: ["Uses at least two classes", "Stores many books in a list", "Has borrow and return methods"]
    }
  },
  {
    title: "Final Practice Projects",
    goal: "Combine all core Python concepts into practical beginner projects.",
    lessons: 5,
    conceptTitle: "From lessons to building",
    concept: [
      "A project is where separate concepts become one skill. You will use variables, input, conditions, loops, functions, collections, files, and classes together.",
      "Start each project by writing the menu and data structure. Then add one feature at a time.",
      "A finished beginner project should run, handle common mistakes, and show clear output."
    ],
    bullets: [
      "Plan the data first.",
      "Build one feature, test it, then continue.",
      "Refactor repeated code into functions."
    ],
    callout: "Do not rush into advanced libraries yet. Strong core Python makes every later topic easier.",
    code: `tasks = []

def add_task(title):
    tasks.append({"title": title, "done": False})

def show_tasks():
    for index, task in enumerate(tasks, start=1):
        status = "Done" if task["done"] else "Open"
        print(index, task["title"], "-", status)

add_task("Revise loops")
add_task("Build OOP project")
show_tasks()`,
    output: "1 Revise loops - Open\n2 Build OOP project - Open",
    practice: [
      "Build a number guessing game.",
      "Build a quiz app with score tracking.",
      "Build an expense tracker using a list of dictionaries.",
      "Build a file-based to-do app.",
      "Build an OOP bank account system."
    ],
    project: {
      title: "Python Core Portfolio",
      description: "Complete three final projects: quiz app, expense tracker, and library management app. Keep each project in its own folder.",
      checks: ["Uses functions in every project", "Uses files in at least one project", "Uses classes in at least one project"]
    }
  }
];

const state = {
  activeModule: 0,
  completed: new Set(JSON.parse(localStorage.getItem("pythonTutorCompleted") || "[]")),
  checkedTasks: JSON.parse(localStorage.getItem("pythonTutorTasks") || "{}")
};

const moduleList = document.querySelector("#moduleList");
const moduleNumber = document.querySelector("#moduleNumber");
const moduleTitle = document.querySelector("#moduleTitle");
const moduleGoal = document.querySelector("#moduleGoal");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonBody = document.querySelector("#lessonBody");
const lessonCount = document.querySelector("#lessonCount");
const codeBlock = document.querySelector("#codeBlock");
const outputBlock = document.querySelector("#outputBlock");
const practiceList = document.querySelector("#practiceList");
const projectTitle = document.querySelector("#projectTitle");
const projectDescription = document.querySelector("#projectDescription");
const projectChecks = document.querySelector("#projectChecks");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const markDoneBtn = document.querySelector("#markDoneBtn");
const copyCodeBtn = document.querySelector("#copyCodeBtn");
const canvas = document.querySelector("#flowCanvas");
const ctx = canvas.getContext("2d");

function saveProgress() {
  localStorage.setItem("pythonTutorCompleted", JSON.stringify([...state.completed]));
  localStorage.setItem("pythonTutorTasks", JSON.stringify(state.checkedTasks));
}

function renderModules() {
  moduleList.innerHTML = "";

  modules.forEach((module, index) => {
    const button = document.createElement("button");
    button.className = "module-button";
    button.type = "button";
    button.classList.toggle("active", index === state.activeModule);
    button.classList.toggle("done", state.completed.has(index));
    button.innerHTML = `
      <span class="module-index">${state.completed.has(index) ? "✓" : index + 1}</span>
      <span>
        <span class="module-name">${module.title}</span>
        <span class="module-meta">${module.lessons} lessons</span>
      </span>
      <span class="done-dot" aria-hidden="true"></span>
    `;
    button.addEventListener("click", () => {
      state.activeModule = index;
      render();
    });
    moduleList.appendChild(button);
  });
}

function renderLesson(module, index) {
  moduleNumber.textContent = `Module ${String(index + 1).padStart(2, "0")}`;
  moduleTitle.textContent = module.title;
  moduleGoal.textContent = module.goal;
  lessonTitle.textContent = module.conceptTitle;
  lessonCount.textContent = module.lessons;
  codeBlock.textContent = module.code;
  outputBlock.textContent = module.output;

  const conceptParagraphs = module.concept.map((text) => `<p>${text}</p>`).join("");
  const bullets = module.bullets.map((item) => `<li>${item}</li>`).join("");
  lessonBody.innerHTML = `
    ${conceptParagraphs}
    <ul>${bullets}</ul>
    <div class="callout">${module.callout}</div>
  `;

  renderPractice(module, index);
  renderProject(module, index);
  drawFlow(index);
}

function renderPractice(module, moduleIndex) {
  practiceList.innerHTML = "";
  module.practice.forEach((item, index) => {
    const key = `${moduleIndex}-${index}`;
    const checked = Boolean(state.checkedTasks[key]);
    const row = document.createElement("li");
    row.innerHTML = `
      <input type="checkbox" ${checked ? "checked" : ""} aria-label="Mark practice complete">
      <span>${item}</span>
    `;
    row.querySelector("input").addEventListener("change", (event) => {
      state.checkedTasks[key] = event.target.checked;
      saveProgress();
    });
    practiceList.appendChild(row);
  });
}

function renderProject(module, moduleIndex) {
  projectTitle.textContent = module.project.title;
  projectDescription.textContent = module.project.description;
  projectChecks.innerHTML = "";

  module.project.checks.forEach((check, index) => {
    const key = `${moduleIndex}-project-${index}`;
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="checkbox" ${state.checkedTasks[key] ? "checked" : ""}>
      <span>${check}</span>
    `;
    label.querySelector("input").addEventListener("change", (event) => {
      state.checkedTasks[key] = event.target.checked;
      saveProgress();
    });
    projectChecks.appendChild(label);
  });
}

function renderProgress() {
  const done = state.completed.size;
  const total = modules.length;
  progressText.textContent = `${done} of ${total} done`;
  progressBar.style.width = `${(done / total) * 100}%`;
}

function drawFlow(activeIndex) {
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const nodes = [
    { x: 54, y: 92, color: "#f0b429", label: "idea" },
    { x: 150, y: 48, color: "#1f9d72", label: "code" },
    { x: 252, y: 116, color: "#2563eb", label: "run" },
    { x: 356, y: 72, color: "#dc4c3e", label: "fix" }
  ];

  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgba(203, 213, 225, 0.42)";
  ctx.beginPath();
  ctx.moveTo(nodes[0].x, nodes[0].y);
  nodes.slice(1).forEach((node) => ctx.lineTo(node.x, node.y));
  ctx.stroke();

  nodes.forEach((node, index) => {
    const pulse = 2 + Math.sin(Date.now() / 500 + index + activeIndex) * 2;
    ctx.beginPath();
    ctx.arc(node.x, node.y, 24 + pulse, 0, Math.PI * 2);
    ctx.fillStyle = `${node.color}33`;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
    ctx.fillStyle = node.color;
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.font = "700 12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(node.label, node.x, node.y + 42);
  });

  ctx.fillStyle = "rgba(255, 255, 255, 0.86)";
  ctx.font = "800 34px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`0${(activeIndex % 9) + 1}`, 24, 42);
}

function render() {
  const module = modules[state.activeModule];
  renderModules();
  renderLesson(module, state.activeModule);
  renderProgress();
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".tab-view").forEach((view) => view.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.tab}View`).classList.add("active");
  });
});

markDoneBtn.addEventListener("click", () => {
  const index = state.activeModule;
  if (state.completed.has(index)) {
    state.completed.delete(index);
  } else {
    state.completed.add(index);
  }
  saveProgress();
  render();
});

copyCodeBtn.addEventListener("click", async () => {
  const text = codeBlock.textContent;
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      throw new Error("Clipboard API unavailable");
    }
    copyCodeBtn.textContent = "Copied";
  } catch {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    copyCodeBtn.textContent = "Copied";
  }
  setTimeout(() => {
    copyCodeBtn.textContent = "Copy";
  }, 1200);
});

setInterval(() => drawFlow(state.activeModule), 800);
render();
