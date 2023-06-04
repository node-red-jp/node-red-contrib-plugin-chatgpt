# node-red-contrib-plugin-chatgpt
Ask ChatGPT plugin for Node-RED flow editor

This plugin supports generating Markdown document by ChatGPT for Node-RED flows in tab.
You can use the generated document as a draft of what the flow is and how the flow is executed.

![](https://raw.githubusercontent.com/node-red-jp/node-red-contrib-plugin-chatgpt/main/askchatgpt.png)

How to install
--------------

Run the following command in your Node-RED user directory - typically `~/.node-red`

        npm install node-red-contrib-plugin-chagpt

Set the OpenAI key to `OPENAI_API_KEY` as the environment variable. In macOS or Linux environment, you can use the `export` command to set the environment variable.

        export OPENAI_API_KEY=<API key>

The API key can be obtained from the OpenAI website. https://platform.openai.com/account/api-keys

How to use
----------

1. Create a flow and click the Deploy button.

![](https://raw.githubusercontent.com/node-red-jp/node-red-contrib-plugin-chatgpt/main/creatingflow.png)

2. Double-click the tab to open the following user interface. And then, click the "Ask ChatGPT" button.

![](https://raw.githubusercontent.com/node-red-jp/node-red-contrib-plugin-chatgpt/main/askchatgpt.png)

3. The ChatGPT will automatically generate the Markdown document from the deployed flow and paste it into the editor area.

5. After clicking the "Done" button, you can see the documentation in the "Information" tab.

![](https://raw.githubusercontent.com/node-red-jp/node-red-contrib-plugin-chatgpt/main/infotab.png)

This plugin dramatically reduce time-consuming task to write the document of the Node-RED flow.
