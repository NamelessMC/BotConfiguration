const debugLinkResponses = require('./debug_link_responses.js');

module.exports = [
    {
        requiresDebugLink: false,
        priority: 1,
        keywords: ["how", "upload", "favicon"],
        response: {
            "title": "Adding a Favicon to v2",
            "footer": "",
            "body": [
                "1. Make sure your favicon is named `favicon.ico` (note the .ico format - for example don't rename a .png to a .ico)",
                "2. Upload the favicon to the root directory. (public_html, htdocs or /var/www/html)",
                "3. If you still can't see it on your website, try forcing a browser cache refresh by viewing your site and pressing `Ctrl + F5` on Windows/Linux or `Cmd + Shift + R` on MacOS. And if you're using Cloudflare, don't forget to purge cache there as well."
            ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        keywords: ["The requested URL was not found on this server."],
        response: {
            "title": "Friendly Urls",
            "footer": "To disable friendly urls, go to `core/config.php` and change \"friendly\" from \"true\" to \"false\".",
            "body": [
                "In order to use friendly urls on your v2 website, your web server has to allow the use of `.htaccess` files and you have to have `mod_rewrite` enabled. You can check if `mod_rewrite` is enabled by going to http://example.com/rewrite_test if it says \"Rewrite Enabled\" you're good to go.",
                "",
                "If not, contact your web host and ask them to enable `mod_rewrite`, or if you're using a vps or a dedicated server, Google information on how to enable `mod_rewrite` on your specific OS.",
                "",
                "As well make sure you have a `.htaccess` file in your root directory, `.htaccess` files are hidden so make sure you have hidden file view enabled on your file manager or ftp client. Your `.htaccess` file should contain these rules: https://raw.githubusercontent.com/NamelessMC/Nameless/v2/.htaccess",
                "",
                "Nginx users should ignore the above and instead make sure the nginx configuration file (`server {` block) includes the location blocks from the [example config file](https://github.com/NamelessMC/Nameless/blob/v2/nginx.example)."
            ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        keywords: ["Unable to enable incompatible module."],
        response: {
            "title": "Incompatible module",
            "footer": "",
            "body": [
                "It seems like the module you are trying to enable is **not compatible** with your template! You can do 2 things:",
                "- Ask the developer of the template you use to add compatibility for it",
                "- Use a different template that is compatible"
            ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        keywords: ["invalid api method"],
        response: {
            "title": "Invalid api method",
            "footer": "",
            "body": ["The error `invalid api method` means that the way the enpoint was requested is not supported. This does **NOT** mean that the API is broken, it actually confirms that it IS working. This likely happened because you visited your API URL and got this error. When copy pasting the API URL into a browser, you are not specifying an API method, so the error is correct."]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        keywords: ["unable to load template 'file"],
        response: {
            "title": "Unable To Load Template File",
            "footer": "",
            "body": [
               "When you get an error that says \"Unable to load template file:\" `module-name/some-file.tpl` or `some-file.tpl`, it means that either your panel template or your website template (depending on where the error occurs), is missing that module's template file(s).",
               "",
               "If you're using the \"DefaultRevamp\" template, the template file(s) for that module should be included in the module's download folder.",
               "",
               "For custom templates, with premium templates the module template files should've already been included with the template, if they are not, contact the template author. For free templates, module support is usually pretty shaky, and possibilty for the module support being added is pretty low.",
               "",
               "Most panel templates in the resources page at this time don't support most modules, so you should either wait for the support to be added or use the \"Default\" panel template instead."
           ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        keywords: ["change", "api", "bot"],
        response: {
            "title": "Change API Key for Nameless Link Discord bot",
            "footer": "",
            "body": [
                "If you want to change the API URL of the Nameless Link Discord bot, use the slash command `/apiurl <url>` in your discord server. If the slash commands do not exist, try re-inviting the discord bot."
            ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        keywords: ["upload failed, unknown error occured"],
        response: {
            "title": "Folder is not writeable",
            "footer" : "",
            "body": [
                "This is usually caused by the installation folder within the web root (and its subdirectories) not being writable. You will need to modify the permissions recursively of the folder so the process running PHP can write to it.",
                "",
                "An example command for Apache and nginx on Ubuntu is:",
                "`sudo chown -R www-data:www-data /var/www/html/`"
            ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        keywords: ["invalid token, please try again"],
        response: {
            "title": "Invalid token",
            "footer": "",
            "body": [
                "This error will likely occur when your template is outdated. This is due to a change in pr12 which causes issues causing this error. To fix this, update your template to the most recent version if it is available (it should support pr12). If your template has not been updated yet, try switching to the default template to fix the issue temporarily. After this, attempt to clear your panel template cache."
            ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        keywords: ["777"],
        response: {
            "title": "Proper file permissions",
            "footer": "",
            "body": [
                "Setting the permission mode of a file to 777 means all users on a system will get full read, write and execute permissions. This is never a good solution.",
                "",
                "When you installed your webserver, a dedicated user was automatically created on your system. On nearly all systems it's `www-data`, but it can also be `nginx`, `apache`, `www`, or something else. The `chmod -R` command can be used to recursively change ownership of a directory and its contents. Replace `/var/www/html` with the path to your NamelessMC installation directory.",
                "",
                "Example: `chown -R www-data: /var/www/html`"
            ]
        }
    },
    ...debugLinkResponses
]
