
// if (!document.querySelector('.CodeOwner')) {
//   var scanned = false;
//   var active = '0'
//   chrome.runtime.sendMessage({ ready: true }, function ( ) {
//     console.log(response.url)
//     const button = document.querySelector('#repo-content-pjax-container div div').childNodes[5].cloneNode(true)
//     button.classList.add('CodeOwner')
//     button.setAttribute('href', '')
//     button.innerHTML = 'Detect'
//     button.addEventListener('click', async (event) => {
//       event.preventDefault()
//       if (scanned) {
//         alert('Already scanned')
//         return;
//       };
//       button.innerHTML = 'Scanning'
//       let results = await fetch('https://www.adeeb.app/api/v1/files/compare', {
//         method: 'POST',
//         mode: 'cors',
//         credentials: 'same-origin',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ url: response.url, extension: true, type: [response.type] }),
//       })
//       results = await results.json()
//       button.innerHTML = 'Detect'
//       console.log(results.data)
//       if (results.data.newResult.length == 0) {
//         alert('No results')
//         return;
//       } else {
//         scanned = true;
//         results.data.url.forEach((owner, index) => {
//           const avatar = document.createElement('img')
//           avatar.setAttribute('alt', 'avatar')
//           avatar.setAttribute('src', owner.avatar)
//           avatar.classList.add('avatar')
//           avatar.setAttribute('id', index)
//           avatar.addEventListener('click', async (event) => {
//             event.preventDefault()
//             document.getElementById(active).classList.remove('activeAvatar')
//             document.querySelector('tbody').childNodes.forEach((line, i) => {
//               if (results.data.newResult[active].cheaterLines.includes(i / 2)) {
//                 document.querySelector('tbody').childNodes[i].classList.remove('markedLine')
//               }
//             })
//             active = index;
//             document.getElementById(active).classList.add('activeAvatar')
//             group.childNodes[1].setAttribute('href', results.data.url[index].url)
//             group.childNodes[1].innerHTML = results.data.url[index].filename
//             group.childNodes[3].innerHTML = results.data.newResult[index].percentage + '%'
//             group.childNodes[1].addEventListener('click', async (event) => {
//               event.preventDefault()
//               window.location.href = results.data.url[index].url;
//             })
//             const lines = []
//             document.querySelector('tbody').childNodes.forEach((line, i) => {
//               if (results.data.newResult[index].cheaterLines.includes(i / 2)) {
//                 document.querySelector('tbody').childNodes[i].classList.add('markedLine')
//               }
//             })
//           })
//           button.before(avatar)
//         })

//         const group = document.querySelector('.BtnGroup').cloneNode(true)
//         group.childNodes[1].setAttribute('target', "_blank")
//         group.childNodes[1].setAttribute('href', results.data.url[0].url)
//         group.childNodes[3].setAttribute('href', '')
//         group.childNodes[1].innerHTML = results.data.url[0].filename
//         group.childNodes[3].innerHTML = results.data.newResult[0].percentage + '%'

//         group.childNodes[1].addEventListener('click', async (event) => {
//           event.preventDefault()
//           window.location.href = results.data.url[0].url;
//         })
//         group.childNodes[3].addEventListener('click', async (event) => {
//           event.preventDefault()
//         })

//         group.classList.add('group')
//         document.getElementById('0').classList.add('activeAvatar')
//         document.querySelector('.BtnGroup').before(group)
//         document.querySelector('tbody').childNodes.forEach((line, i) => {
//           if (results.data.newResult[0].cheaterLines.includes(i / 2)) {
//             document.querySelector('tbody').childNodes[i].classList.add('markedLine')
//           }
//         })
//       }
//     })
//     document.querySelector('#repo-content-pjax-container div div').childNodes[5].before(button)
//   });
// }