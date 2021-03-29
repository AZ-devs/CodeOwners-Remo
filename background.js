// // chrome.tabs.onActivated.addListener(tab => {
// //     chrome.tabs.get(tab.tabId, info => {
// //         if (/^https:\/\/\github/.test(info.url)) {
// //             // alert(info.url)
// //             chrome.tabs.executeScript(null, { file: './foreground.js' })

// //         }
// //     })
// // })
// // chrome.browserAction.onClicked.addListener(tab => {
// // chrome.tabs.executeScript(null, { file: './foreground.js' })

// //     // alert('?')
// // })

// // chrome.webNavigation.onDOMContentLoaded.addListener(data => {
// //     alert('x')
// //     const acceptedType = ['js']
// //     // console.log(data)
// //     // alert('1')
// //     let url = data.url.split('.')
// //     if (url[url.length - 1].includes(acceptedType)) alert('cry')
// //         // if (/^\.js/.test(data.url)) {
// //         //     // chrome.tabs.executeScript(null, { file: './foreground.js' })
// //         //     alert('here')
// //         // }

// //     // console.log(document.getElementsByClassName('application-main'))
// // })
// let checking = false;

// function test() {
//     alert("In test!");
// }

// chrome.tabs.onUpdated.addListener(function (tabid, changeinfo, tab) {
//     var url = tab.url;
//     // console.log(url)
//     let type = url.split('.')

//     const acceptedType = ['js']
//     if (url !== undefined && changeinfo.status == "complete" && acceptedType.includes(type[type.length - 1])) {
//         console.log(tabid,tab,changeinfo)
//         chrome.runtime.onMessage.addListener(
//             function (request, sender, sendResponse) {
//                 if (request.ready){
//                     // alert(url)
//                 sendResponse({ type: type[type.length - 1], url });
//                 }
//             }
//         );
//         chrome.tabs.executeScript(null, { file: './setup.js' })

//     }
// });

// const acceptedType = ['js']
// chrome.webNavigation.onCompleted.addListener(test);

// function test(details) {
//     console.log(details)
//     let type = details.url.split('.')
//     if (acceptedType.includes(type[type.length - 1])) {
//         // console.log(tabid, tab, changeinfo)
//         chrome.runtime.onMessage.addListener(
//             function (request, sender, sendResponse) {
//                 if (request.ready) {
//                     // alert(url)
//                     console.log(details.url)
//                     sendResponse({ type: type[type.length - 1], url: details.url });
//                 }
//             }
//         );
//         // chrome.runtime.onMessage.removeListener()
//         chrome.tabs.executeScript(details.tabId, { file: './setup.js' })
//         // chrome.webNavigation.onCompleted.addListener(test);

//     }
// }

// chrome.tabs.onUpdated.addListener(tab => {
//     // if (checking) return;
//     // checking = true;
//     // alert(tab)
//     chrome.tabs.get(tab, info => {
//         const acceptedType = ['js']
//         let url = info.url.split('.')
//         // alert(url[url.length - 1])
//         if (url[url.length - 1].includes(acceptedType)) {
//             // alert('cry')
//             chrome.tabs.executeScript(null, { file: './test.js' })
//             // setTimeout(()=>{

//             // checking = false;
//             // },1000)

//         }
//         // alert(info.url)
//         // if (/^https:\/\/\github/.test(info.url)) {
//         //     // alert(info.url)
//         // }
//     })
// })



// chrome.runtime.onConnect.addListener(function (port) {
// chrome.webNavigation.onHistoryStateUpdated.addListener(details => {

//     if (details.frameId === 0) {
//         chrome.tabs.get(details.tabId, info => {
//             const acceptedType = ['js']
//             let url = info.url.split('.')
//             if (url[url.length - 1].includes(acceptedType)) {
//                 if (info.url === details.url) {
//                    alert('test')

//                 }
//             }
//         })
//     }
// })
//     //     console.assert(port.name == "knockknock");
//     //     port.onMessage.addListener(function (msg) {
//     //         alert('bg')
//     //         // if (msg.joke == "Knock knock")
//     //         // else if (msg.answer == "Madame")
//     //         //     port.postMessage({ question: "Madame who?" });
//     //         // else if (msg.answer == "Madame... Bovary")
//     //         //     port.postMessage({ question: "I don't get it." });
//     //     });
// });

// // chrome.runtime.onMessage.addListener(
// //     function (request, sender, sendResponse) {
// //         // console.log(sender.tab ?
// //         //     "from a content script:" + sender.tab.url :
// //         //     "from the extension");
// //         if (request.greeting == "hello") {
// //             sendResponse({ farewell: "goodbye" });
// //         }
// //     }
// // );


// function hashHandler() {
//     console.log('The hash has changed!');
// }

// window.addEventListener('hashchange', hashHandler, false);