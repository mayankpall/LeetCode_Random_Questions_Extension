chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "fetchRandomQuestion") {
    fetch('https://leetcode.com/api/problems/all/')
      .then(response => response.json())
      .then(data => {
        const questions = data.stat_status_pairs;
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex].stat;

        sendResponse({
          title: randomQuestion.question__title,
          url: `https://leetcode.com/problems/${randomQuestion.question__title_slug}/`
        });
      })
      .catch(error => {
        sendResponse({ error: true });
      });

   
    return true;
  }
});
