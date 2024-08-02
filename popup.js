document.getElementById('pickQuestion').addEventListener('click', function() {
  chrome.runtime.sendMessage({ type: "fetchRandomQuestion" }, function(response) {
    const questionLinkElement = document.getElementById('questionLink');
    if (response.error) {
      questionLinkElement.textContent = "Error fetching question.";
    } else {
      questionLinkElement.innerHTML = `<a href="${response.url}" target="_blank">${response.title}</a>`;
    }
  });
});
