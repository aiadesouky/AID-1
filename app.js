var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
//openai key
var apiKey= "<OpenAI-API-Key>";
xhr.open("POST", "https://api.openai.com/v1/completions");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer "+apiKey);
var vprompt = "write code to send http request in c++";
var body = JSON.stringify({
  "model":"text-davinci-003",
  "prompt":vprompt,
  "max_tokens": 1000,
  "temperature": 0.5
});
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(JSON.parse(xhr.responseText)["choices"][0]["text"]);
    } else {
      console.log("Error: "+ xhr.status);
  }
}
xhr.send(body);