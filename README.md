# Random LeetCode Question Picker

Random LeetCode Question Picker is a simple Chrome extension that fetches and displays a random LeetCode question for you to solve. This extension helps you practice coding problems randomly picked from LeetCode's extensive library.

## Features

- Fetches a random LeetCode question
- Displays the question title and link to the problem on LeetCode
- Simple and easy-to-use interface

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/random-leetcode-question-picker.git
    ```

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" using the toggle in the top-right corner.

4. Click on "Load unpacked" and select the directory where you cloned the repository.

5. The extension should now appear in your Chrome extensions list.

## Usage

1. Open the [LeetCode website](https://leetcode.com/).

2. Click on the extension icon in the Chrome toolbar to open the popup.

3. Click the "Pick a Random Question" button to fetch a random LeetCode question.

4. A link to the random question will be displayed. Click on the link to open the problem on LeetCode.

## Files

- `manifest.json`: Defines the extension's details and permissions.
- `popup.html`: The HTML file for the extension's popup interface.
- `popup.js`: JavaScript file containing the logic for the popup.
- `background.js`: JavaScript file for handling background tasks and fetching data from the LeetCode API.
- `styles.css`: (Optional) CSS file for styling the popup.
- `icons/`: Directory containing the icon files for the extension.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

## Acknowledgements

- [LeetCode](https://leetcode.com/) for providing an extensive library of coding problems.
