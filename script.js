let bookProgress = {
  oceanendingob: false,
  failedthemissionob: false
};

function unlockEnding(endingName) {
  let progress = JSON.parse(localStorage.getItem("myGameEndings")) || {
    oceanendingob: false,
    failedthemissionob: false
  };

  if (progress.hasOwnProperty(endingName)) {
    progress[endingName] = true;
  }

  localStorage.setItem("myGameEndings", JSON.stringify(progress));
  
  console.log(`Unlocked: ${endingName}`);
}

function displayEndings() {
  let progress = JSON.parse(localStorage.getItem("myGameEndings")) || {
    oceanendingob: false,
    failedthemissionob: false
  };

  const listContainer = document.getElementById("endings-list");
  listContainer.innerHTML = ""; // Clear it out first

  for (let ending in progress) {
    const endingItem = document.createElement("p");
    
    if (progress[ending] === true) {
      endingItem.textContent = `Unlocked: ${getEndingTitle(ending)}`;
      endingItem.classList.add("unlocked");
    } else {
      endingItem.textContent = "🔒 Locked Ending";
      endingItem.classList.add("locked");
    }
    
    listContainer.appendChild(endingItem);
  }
}

function getEndingTitle(endingKey) {
  const titles = {
    ending1: "Ocean Ending",
    ending2: "Failed The Mission"
  };
  return titles[endingKey] || "Unknown Ending";
}

document.getElementById("view-endings").addEventListener("click", () => {
  displayEndings();
});