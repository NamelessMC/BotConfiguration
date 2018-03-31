# BotConfiguration
Configuration repo for NamelessMC bot commands

## How do I add a parameter to the support command?
To add a parameter to the support command, follow these simple instructions:
1. Add the parameter to the `/support/parameters.json`.
2. Make a file in `/support` named: <parameter>.json
3. Have the following JSON in the file:
```
{
  "title": "The title of embed",
  "body": [
    "The body text of the embed, use \n for new line."
  ]
}
```

Note: If you want to be version specific (ex. v1 or v2) place the json file in the version it corresponds with. (ex. `/support/v1/<parameter>.json`) The `/support/parameters.json` will require `v1/test` if a test.json is in the `/support/v1` directory.
