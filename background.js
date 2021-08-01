console.log("I am background.js");

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    preferred_fc: "c10001Tab",
    email: "",
    name: "",
    uid: "",
    vaccination: null,
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
    declaration: true,
  });

  const formUrl = chrome.runtime.getURL("./form.html");
  chrome.tabs.create({ url: formUrl });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url.includes("fcbooking.cse.hku.hk")
  ) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["./foreground.js"],
      })
      .then(() => {
        console.log("foreground.js injected");
      });
  }
});
