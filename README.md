# yt-ydr-authfe
Auth project, front-end onboarding
SANDBOX NETWORK, Content Tech team SW Developer (FE) Practice repository.

## Overview

This is about result pages.<br/>

[Channel Page]<br/>
<img width="1440" alt="스크린샷 2022-01-18 오후 5 01 09" src="https://user-images.githubusercontent.com/97079582/149898412-cdf05b79-7e46-4297-81a1-5860327db624.png">
<img width="1440" alt="스크린샷 2022-01-18 오후 5 01 32" src="https://user-images.githubusercontent.com/97079582/149898417-99b3b255-123a-4560-9edc-a31424945343.png">
<img width="1440" alt="스크린샷 2022-01-18 오후 5 01 43" src="https://user-images.githubusercontent.com/97079582/149898446-423e2a0d-ae6d-4a2f-ba9e-f03e999469b8.png">

<br/>
[Video Page]<br/>
<img width="1427" alt="스크린샷 2022-01-19 오후 4 31 03" src="https://user-images.githubusercontent.com/97079582/150086150-c842b5c1-fddd-4195-8247-3830014582b7.png">
<img width="1430" alt="스크린샷 2022-01-19 오후 4 30 42" src="https://user-images.githubusercontent.com/97079582/150086158-0d37475f-a699-491d-a0d1-5b538a2a296b.png">

## Getting Started

<b>Use react-cil, TypeScript.</b>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

.env
In the API, URL settings are done by variables in the .env file.

```
REACT_APP_SOCIAL: 
This is the URL where you send a request to SandAuth to get a login token.

REACT_APP_VERIFY: 
This is the URL that asks SandAuth if the token is valid or not.

REACT_APP_KEY: 
This key is a client key for Google social login authentication.

REACT_APP_CHANNEL_SEARCH:
This is the URL used to load the list of channels.

REACT_APP_CHANNEL_BASIC:
The most basic form of URL used to get channel information.

REACT_APP_CHANNEL_INFO: 
This is the URL used to get specific channel information (title, number of subscribers, etc.)

REACT_APP_CHANNEL_SUMMARY:
This is a URL where you can get the channel trend information for a specific period.

REACT_APP_VIDEO_LIST:
This is the URL used to load the list of video.need keyword.

REACT_APP_VIDEO_SUMMARY:
This is a URL where you can get the video information for a specific period.

REACT_APP_VIDEO_INFO:
This is the URL used to get specific video information (title, number of subscribers, etc.)

```

### Prerequisites

What things you need to install the software and how to install them

```
already installed npm 14.X version (upgrade version)
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be (first clone, install)

```
npm install
```

And repeat (if you want to start)

```
npm start
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
npm test (example)
```

### And coding style tests

Explain what these tests test and why

```
eslint --fix [./fileDirectory OR flie name]
```

## Deployment

Add additional notes about how to deploy this on a live system
