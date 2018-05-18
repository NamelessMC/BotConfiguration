# BotConfiguration
Configuration repo for NamelessMC bot commands

## How do I add a parameter to the support command?
To add a parameter to the support command, follow these simple instructions:
1. Add the parameter to the `/support/parameters.json`.
2. Make a file in `/support` named: `<parameter>.json`
3. Have the following JSON in the file:
```
{
  "title": "The title of embed",
  "body": [
    "Put the following on the end to put a new line: \n",
    "You can make links [like this](https://example.com) to have a link with a certain text displayed for the link name.\n",
    "You can also make a new paragraph by using two new lines like this: \n\n",
    "Finally, make sure you don't have an extra comma on the last line and the other lines have a comma on them."
  ]
}
```

Note: If you want to be version specific (ex. v1 or v2) place the json file in the version it corresponds with (ex. `/support/v1/<parameter>.json`). The `/support/parameters.json` will require `v1/test` if a test.json is in the `/support/v1` directory.
