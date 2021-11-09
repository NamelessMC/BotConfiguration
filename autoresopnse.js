module.exports = [
    {
        requiresDebugLink: false,
        priority: 1,
        check: (message) => {
            const keywords = ["how", "upload", "favicon"];
            return keywords.every(keyword => message.toLowerCase().includes(keyword));
        },
        response: {
            "title": "Adding a Favicon to v2",
            "footer": "",
            "body": [
                "1. Make sure your favicon is named `favicon.ico` (note the .ico format - for example don't rename a .png to a .ico)\n",
                "2. Upload the favicon to the root directory. (public_html, htdocs or /var/www/html)\n",
                "3. If you still can't see it on your website, try forcing a browser cache refresh by viewing your site and pressing `Ctrl + F5` on windows or `Cmd + Shift + R` on macos.\n",
                "And if you're using Cloudflare, don't forget to purge cache there as well."
            ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        check: (message) => {
            const keywords = ["The requested URL was not found on this server."];
            return keywords.every(keyword => message.toLowerCase().includes(keyword));
        },
        response: {
            "title": "Friendly Urls",
            "footer": "",
            "body": [
                "In order to use friendly urls on your v2 website, your web server has to allow the use of `.htaccess` files and you have to have `mod_rewrite` enabled.\n\n",
                "You can check if `mod_rewrite` is enabled by going to http://example.com/rewrite_test if it says \"Rewrite Enabled\" you're good to go.\n",
                "If not, contact your web host and ask them to enable `mod_rewrite`, or if you're using a vps or a dedicated server, Google information on how to enable `mod_rewrite` on your specific OS.\n\n",
                "As well make sure you have a `.htaccess` file in your root directory, `.htaccess` files are hidden so make sure you have hidden file view enabled on your file manager or ftp client.\n",
                "Your `.htaccess` file should contain these rules: https://raw.githubusercontent.com/NamelessMC/Nameless/v2/.htaccess\n\n",
                "To disable friendly urls, go to `core/config.php` and change \"friendly\" from \"true\" to \"false\"."
            ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        check: (message) => {
            const keywords = ["Unable to enable incompatible module."];
            return keywords.every(keyword => message.toLowerCase().includes(keyword));
        },
        response: {
            "title": "Incompatible module",
            "footer": "",
            "body": [
                "It seems like the module you are trying to enable is **not compatible** with your template! You can do 2 things:\n\n",
                "- Ask the developer of the template you use to add compatibility for it\n",
                "- Use a different template that is compatible"
            ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        check: (message) => {
            const keywords = ["invalid api method"];
            return keywords.every(keyword => message.toLowerCase().includes(keyword));
        },
        response: {
            "title": "Invalid api method",
            "footer": "",
            "body": ["The error `invalid api method` means that the way the enpoint was requested is not supported. This does **NOT** mean that the API is broken, it actually confirms that it IS working. This likely happened because you visited your API URL and got this error. When copy pasting the API URL into a browser, you are not specifying an API method, so the error is correct."]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        check: (message) => {
            const keywords = ["unable to load template 'file"];
            return keywords.every(keyword => message.toLowerCase().includes(keyword));
        },
        response: {
            "title": "Unable To Load Template File",
            "footer": "",
            "body": [
               "When you get an error that says \"Unable to load template file:\" `module-name/some-file.tpl` or `some-file.tpl`, it means that either your panel template or your website template (depending on where the error occurs), is missing that module's template file(s).\n\n",
               "If you're using the \"DefaultRevamp\" template, the template file(s) for that module should be included in the module's download folder.\n\n",
               "If you're using a premium template, the module template files should've already been included with the template, if they are not, contact the template author.\n",
               "For the free templates, module support is usually pretty shaky, and possibilty for the module support being added is pretty low.\n\n",
               "Most panel templates in the resources page at this time don't support most modules, so you should either wait for the support to be added or use the \"Default\" panel template instead."
           ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        check: (message) => {
            const keywords = ["change", "api", "bot"];
            return keywords.every(keyword => message.toLowerCase().includes(keyword));
        },
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
        check: (message) => {
            const keywords = ["upload failed, unknown error occured"];
            return keywords.every(keyword => message.toLowerCase().includes(keyword));
        },
        response: {
            "title": "Folder is not writeable",
            "footer" : "",
            "body": [
                "This is usually caused by the installation folder within the web root (and its subdirectories) not being writable. You will need to modify the permissions recursively of the folder so the process running PHP can write to it.\n",
                "An example command for Apache and nginx on Ubuntu is\n",
                "`sudo chown -R www-data:www-data /var/www/html/`"
            ]
        }
    },
    {
        requiresDebugLink: false,
        priority: 1,
        check: (message) => {
            const keywords = ["invalid token, please try again"];
            return keywords.every(keyword => message.toLowerCase().includes(keyword));
        },
        response: {
            "title": "Invalid token",
            "footer": "",
            "body": [
                "This error will likely occur when your template is outdated. This is due to a change in pr12 which causes issues causing this error.\n",
                "To fix this, update your template to the most recent version if it is available (it should support pr12). If your template has not been updated yet,",
                "try switching to the default template to fix the issue temporarily. After this, attempt to clear your panel template cache."
            ]
        }
    },
    {
        requiresDebugLink: true,
        priority: 1,
        check: (message, debugObject) => {
            return debugObject.debug_version === 1
        },
        response: {
            "title": "Success",
            "footer": "",
            "body": [
                "The debug log version is correct and equal to 1..."
            ]
        }
    }
]