setTimeout(() => {
  const sounds = ['sound1', 'sound2', 'sound3', 'salmon cookies', 'after5']

  const observer = new MutationObserver(list => {
    const evt = new CustomEvent('dom-changed', { detail: list });
    document.body.dispatchEvent(evt)
  });
  let flag = false;
  observer.observe(document.querySelector('#queue .col'), { childList: true });
  document.body.addEventListener('dom-changed', e => {
    document.querySelector('#queue .col').childNodes.forEach((card) => {
      let check = card.getAttribute('codeOwners')
      if (!check) {
        chrome.storage.local.get('settings', value => {
          const course = card.childNodes[1].childNodes[1].textContent;

          card.setAttribute('codeOwners', 'heard')
          if (!value.settings.courses.includes(course)) return;


          if (!flag) {
            flag = true;
            const audio = new Audio(`https://daoudkurd.codeowners.net/${sounds[value.settings.sound]}.mp3`);
            audio.addEventListener("canplaythrough", event => {
              audio.play();
            });
            setTimeout(() => {
              flag = false;
            }, 2000);
          }
        })
      }

    })

  });

  document.querySelector('#queue .col').childNodes.forEach((card) => {
    card.setAttribute('codeOwners', 'heard')
  })

}, 2000);