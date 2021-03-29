const courses = ['Code 102', 'Code 201', 'Code 301', 'Code 401: JavaScript', 'Code 401: Python', 'Code 401: Java']
const sounds = ['sound1', 'sound2', 'sound3', 'salmon cookies', 'after5']
chrome.storage.local.get('settings', value => {
  if (value.settings) {
    courses.forEach((course, index) => {
      if (value.settings.courses.includes(course)) {
        document.getElementById(`c${index}`).classList.add('active')
      }
    })
    document.getElementById('sounds').selectedIndex = value.settings.sound;

  } else {
    chrome.storage.local.set({ 'settings': { courses, sound: 0 } })
    courses.forEach((course, index) => {
      document.getElementById(`c${index}`).classList.add('active')
    })
  }
})

for (let i = 0; i < courses.length; i++) {
  const element = document.getElementById(`c${i}`)
  element.addEventListener('click', (event) => { clickHandler(event, i) })
}

function clickHandler(event, i) {
  chrome.storage.local.get('settings', value => {
    if (value.settings.courses.includes(courses[i])) {
      document.getElementById(`c${i}`).classList.remove('active')

      value.settings.courses = value.settings.courses.filter((course) => {
        return course != courses[i]
      })

      chrome.storage.local.set({ 'settings': value.settings })


    } else {
      document.getElementById(`c${i}`).classList.add('active')
      value.settings.courses.push(courses[i])
      chrome.storage.local.set({ 'settings': value.settings })

    }
  })
}

function playSound() {
  const index = document.getElementById('sounds').value - 1;
  const audio = new Audio(`https://daoudkurd.codeowners.net/${sounds[index]}.mp3`);
  audio.addEventListener("canplaythrough", event => {
    audio.play();
  });
}

function changeSound(e) {
  const index = e.target.value - 1;
  chrome.storage.local.get('settings', value => {
    value.settings.sound = parseInt(index);
    chrome.storage.local.set({ 'settings': value.settings })
  })
}

document.getElementById('play').addEventListener('click', playSound)
document.getElementById('sounds').addEventListener('change', changeSound)



