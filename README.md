Multi-Funtional & Multi-Modal # AI-Powered-App 

![Screenshot of the AI-Powered App](./src/assets/demo.png)
![AI-Text Model](./src/assets/demo1.png)
![AI Audio & Video Model](./src/assets/demo2.png)
![AI Image Model](./src/assets/demo3.png)
![Signup](./src/assets/demo4.png)


This is a project that demonstrates how to use several AI technologies:

- Gemini chat completion API
- Deepgram speech-to-text API
- Replicate API to run the miniGPT vision encoder model
- gpt-3-encoder package to tokenize strings into tokens (which are used to set limits on the length of     prompts sent to OpenAI)
- Langchain model, chain, and memory interfaces

## Get it Working

To see this project working, you can clone the project and then do the following.

### Install dependencies

```
npm install
```

### Create .env file

Create a `.env` file at the root of the project and then go into the `.gitignore` file and add `.env` to the list. This will make sure that the `.env` file does not get pushed up to github if you choose to push the project up to github.

## API Keys

Add API keys to the `.env` file as you see in the `.env-example` file. Go to each of these websites to sign up for an API key:

[Google Gemini]

[Deepgram](https://dpgr.am/deepgram-signup)

[Replicate](https://replicate.com/)

### Run the web server and the node server

```
npm run start
```