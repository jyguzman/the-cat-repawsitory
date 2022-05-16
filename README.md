# The Dog Repawsitory

The Dog Repawsitory is a full-stack web application made with React, Express, Node, and MongoDB that allows you to search for images of 172 different dog breeds. Check out below for details on how to use the app, and how to run the tests.

## Usage

The easiest way to use the Dog Repawsitory is just to visit its link at https://dogrepawsitory.uc.r.appspot.com! It has been deployed using Google Cloud Platform (GCP).

You can select a breed by clicking on any of the listed breeds that appear
as you type in the text box. There are 172 available breeds.

The 'Top Dogs' button lists the current 10 most searched breeds. A search
is simply whenever someone selects a breed and its pictures are loaded.

If the app seems to be taking a whiel to load, simply refresh or click 'Top Dogs' twice; the initial long load is a result of Google Cloud putting the app in an idle state after a period of no traffic.

### Local Usage

To run the app locally one must download this repository, open a terminal in the root directory, and enter the command 'npm run dev' to run the server and client concurrently; the app will then be open on http://localhost:3000.

## Testing

There are two ways to run the tests: with Replit or locally. 

To run on Replit, visit https://replit.com/@jyguzman/ShopifyChallengeTests and in the shell enter the command "npm test". It is NOT necessary to click the 'Run' button at the top. This must be done on a computer (not on mobile),
since it appears that the shell does not appear on mobile.

To run the tests locally, download the repository, and in the root 
directory open a terminal and enter the command 'npm test'.