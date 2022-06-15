module.exports = [
    {
        keywords: [["how", "upload", "favicon"]],
        response: {
            "title": "Adding a favicon to v2",
            "footer": "",
            "body": [
                "1. Make sure your favicon is named `favicon.ico` (note the .ico format - for example don't rename a .png to a .ico)",
                "2. Upload the favicon to the root directory. (public_html, htdocs or /var/www/html)",
                "3. If you still can't see it on your website, try forcing a browser cache refresh by viewing your site and pressing `Ctrl + F5` on Windows/Linux or `Cmd + Shift + R` on MacOS. And if you're using Cloudflare, don't forget to purge cache there as well."
            ]
        }
    },
    {
        keywords: [
            ["The requested URL was not found on this server."],
            ["This page either doesn't exist, or it moved somewhere else."],
            ["404 Not Found", "nginx"]
        ],
        response: {
            "title": "Friendly URLs",
            "footer": "To disable friendly URLs, go to `core/config.php` and change \"friendly\" from \"true\" to \"false\".",
            "body": [
                "In order to use friendly URLs on your v2 website, your webserver needs to be properly configured. You can have a look on how to do it over at our documentation at https://docs.namelessmc.com/friendly-urls/"
            ]
        }
    },
    {
        keywords: [["Unable to enable incompatible module."]],
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
        keywords: [["invalid api method"]],
        response: {
            "title": "Invalid API method",
            "footer": "",
            "body": ["The 'Invalid API Method' error means no API endpoint was provided or the provided API endpoint was invalid. This does **NOT** mean that the API is broken, it actually confirms that it IS working. This likely happened when visiting the API URL in a browser. When copy pasting the API URL into a browser, you are not specifying an API method, so the message is correct."]
        }
    },
    {
        keywords: [["unable to load template 'file"]],
        response: {
            "title": "Unable to load template file",
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
        keywords: [["Typed property Pages::$_active_page must not be accessed before initialization"]],
        response: {
            "title": "404 page breaking",
            "footer": "",
            "body": [
               "This error happens due to an error in the NamelessMC 404 page.",
               "To fix this, go to core/Classes/Core/Pages.php and on line 20, replace `private array $_active_page;` with `private array $_active_page = [];`."      
            ]
        }
    },
    {
        keywords: [["change", "api", "bot"]],
        response: {
            "title": "Change API Key for Nameless Link Discord bot",
            "footer": "",
            "body": [
                "If you want to change the API URL of the Nameless Link Discord bot, use the slash command `/apiurl <url>` in your discord server. If the slash commands do not exist, try re-inviting the discord bot."
            ]
        }
    },
    {
        keywords: [["upload failed, unknown error occured"]],
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
        keywords: [["invalid token, please try again"]],
        response: {
            "title": "Invalid token",
            "footer": "",
            "body": [
                "This error will likely occur when your template is outdated. This is due to a change in v2-pr12 which causes issues causing this error. To fix this, update your template to the most recent version if it is available (it should support v2-pr12). If your template has not been updated yet, try switching to the default template to fix the issue temporarily. After this, attempt to clear your panel template cache."
            ]
        }
    },
    {
        keywords: [[" 777"]],
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
    {
        keywords: [
            ["NamelessMC could not be downloaded. Please ensure", "your webserver has permissions to write to your file system"],
            ["Permission denied in /var/www/html/easy-install.php"],
            ["Unable to create cache directory"],
            ["core/config.php", "is not writeable"],
            ["The directory", "is not writable."],
            ["Your core directory is not writable"],
            ["directory must be readable and writeable."],
            ["Check your file permissions."],
            ["Upload failed", "Unknown error", "occured"]
        ],
        response: {
            "title": "File permissions",
            "footer": "",
            "body": [
                "Ensure your webserver directory and its contents are owned by the correct user. In most cases this is `www-data` but it can also be `nginx`, `apache`, `www`, or something else. The `chmod -R` command can be used to recursively change ownership of a directory and its contents. Replace `/var/www/html` with the path to your NamelessMC installation directory.",
                "",
                "Example: `chown -R www-data: /var/www/html`"
            ]
        }
    },
    {
        keywords: [
            ["Sorry, but something went wrong while loading the page. Please contact an administrator."],
            ["<meta name=\"description\" content=\"Fatal Error"],
            ["<meta name=\"description\" content=\"致命错误"],
            ["<meta name=\"description\" content=\"Fatální chyba"],
            ["<meta name=\"description\" content=\"Fatal Fejl"],
            ["<meta name=\"description\" content=\"Fatale fout"],
            ["<meta name=\"description\" content=\"Erreur fatale"],
            ["<meta name=\"description\" content=\"Fataler Fehler"],
            ["<meta name=\"description\" content=\"Errore fatale"],
            ["<meta name=\"description\" content=\"=内部エラーが発生しました="],
            ["<meta name=\"description\" content=\"Mirtina Klaida"],
            ["<meta name=\"description\" content=\"Fatalny błąd"],
            ["<meta name=\"description\" content=\"Erro Fatal"],
            ["<meta name=\"description\" content=\"Eroare fatală"],
            ["<meta name=\"description\" content=\"Критическая ошибка"],
            ["<meta name=\"description\" content=\"Fatálna chyba"],
            ["<meta name=\"description\" content=\"Error fatal"],
            ["<meta name=\"description\" content=\"Allvarligt fel"]
        ],
        response: {
            "title": "Fatal error",
            "footer": "",
            "body": [
                "Please find the full error message in the `/cache/logs/fatal-log.log` file or StaffCP > Configuration > Maintenance > Error Logs > Fatal log, and send it here.",
            ]
        }
    },
    {
        keywords: [["how", "setup", "mail"], ["how", "setup", "phpmailer"], ["how", "setup", "gmail"]],
        response: {
            "title": "Setting up PHPMailer",
            "footer": "",
            "body": [
                "Setting up SMTP can be done by going to `StaffCP -> Configuration -> Email` and enabling the `Enable PHPMailer` option. After this fill in the fields below.",
                "",
                "`username` - The email adress from your SMTP server",
                "`password` - The password associated with the SMTP email address",
                "`name` - The name you want to be displayed in the \"From\" field in the email",
                "`host` - The hostname of your SMTP server, such as the SMTP server's IP address",
                "",
                "For additional info, take a look at <https://docs.namelessmc.com/smtp/>"
            ]
        }
    },
    {
        keywords: [["SMTP Error: Could not authenticate"]],
        response: {
            "title": "PHPMailer authentication",
            "footer": "",
            "body": [
                "This error means that the username and password credentials or port you are attempting to use for SMTP emails are incorrect.",
                "Double check that you have entered the correct information, and test with <https://www.smtper.net/>",
                "For additional info, take a look at <https://docs.namelessmc.com/smtp/>"
            ]
        }
    },
    {
        keywords: [["Invalid reCAPTCHA response"]],
        response: {
            "title": "Invalid reCAPTCHA configuration",
            "footer": "",
            "body": [
                "The `Invalid reCAPTCHA response` error occurs when captcha has been enabled but not correctly configured in the StaffCP. You can disable the captcha by going in the file `core/config.php` and setting `captcha` to false. You can configure the captcha in `StaffCP -> Configuration -> Registration`. Make sure you fill in the `Captcha Site Key` and `Captcha Secret Key` fields and selecting the correct captcha type.",
                "",
                "We recommend testing the captcha on registration **first** before setting it up on login. This way you can't lock yourself out."
            ]
        }
    },
    {
        keywords: [["hCaptcha has failed to initialize"]],
        response: {
            "title": "Invalid hCaptcha configuration",
            "footer": "",
            "body": [
                "This error occurs when you entered invalid details in the `Captcha Site Key` and/or `Captcha Secret Key` fields in `StaffCP -> Configuration -> Registration`. If you are locked out of your website, you can manually disable the captcha by going in `core/config.php` and setting the `captcha` setting to false."
            ]
        }
    },
        {
        keywords: [["how", "disable", "captcha"]],
        response: {
            "title": "Disabling captcha",
            "footer": "",
            "body": [
                "You can manually disable captcha by going in `core/config.php` and setting the `captcha` setting to false.",
                "",
                "We recommend testing the captcha on registration **first** before setting it up on login. This way you can't lock yourself out."
            ]
        }
    },
    {
        keywords: [["where", "find", "api"], ["how", "find", "api"]],
        response: {
            "title": "Finding your API configuration",
            "footer": "",
            "body": [
                "You can find your API configuration in `StaffCP -> Configuration -> API`. This page will contain your API Key, API URL and some other settings related to your site API"
            ]
        }
    },
    {
        keywords: [["how", "remove", "status page"]],
        response: {
            "title": "Removing the minecraft status page",
            "footer": "",
            "body": [
                "To disable the minecraft status page. Go to `StaffCP -> Integrations -> Minecraft -> Minecraft Servers` and disable the `Enable status page` switch. This will remove the status page from your website"
            ]
        }
    },
    {
        keywords: [
            ["Announcements.php(50): Using $this when not in object context"],
            ["Undefined constant \"PAGE\""],
            ["ServerInfoEndpoint.php(163) 2: array_merge(): Expected parameter 2 to be an array, null given"],
            ["ServerInfoEndpoint.php(163) 8: Undefined variable: log_array"]
        ],
        response: {
            "title": "Broken API in v2-pr12",
            "footer": "",
            "body": [
                "To fix these issues, please head to [this](https://github.com/NamelessMC/Nameless/issues/2446) page and apply the commits mentioned in the `Broken API` part. This will fix the issue"
            ]
        }
    },
    {
        keywords: [
            ["Undefined constant \"REQUEST_URI\""]
        ],
        response: {
            "title": "Undefined constant \"REQUEST_URI\"",
            "footer": "",
            "body": [
                "Please open core/init.php in a text editor and replace all occurrences of `$_SERVER[REQUEST_URI]` with `$_SERVER['REQUEST_URI']`"
            ]
        }
    },
    {
        keywords: [
            ["how", "enable", "friendly url"],
            ["how", "enable", "friendly urls"]
        ],
        response: {
            "title": "Enabling friendly URLs",
            "footer": "",
            "body": [
                "If you want to enable friendly URLs, please follow the steps over at https://docs.namelessmc.com/friendly-urls"
            ]
        }
    },
    {
        keywords: [["<title>Please Wait... | Cloudflare</title>"]],
        response: {
            "title": "Cloudflare",
            "footer": "",
            "body": [
                "CloudFlare is blocking the API request. Please disable proxy in CloudFlare (DNS only) or add an exception: https://docs.namelessmc.com/cloudflare-api"
            ]
        }
    },
    {
        keywords: [["Please wait while your request is being verified..."]],
        response: {
            title: "Blocked by a firewall",
            footer: "",
            body: [
                "The request is being blocked by a firewall. This response is probably sent by Imunify360 / Webshield. Please contact your hosting provider.",
            ],
        },
    },
    {
        keywords: [["badge", "colors"], ["badge", "colours"], ["badge", "color"], ["badge", "colour"], ["group html", "colors"], ["group html", "colours"], ["group html", "color"], ["group html", "colour"]],
        response: {
            "title": "Group HTML",
            "footer": "",
            "body": [
                "Group HTML is HTML code that describes how your group will look like on pages like your profile, forum posts, etc.",
                "",
                "You can either use custom images for your group tags with `<img src=\"url/or/path/to/image.png\" alt=\"Group Tag\" width=\"200\" height=\"auto\">` HTML tag,",
                "or you can use `<span class=\"badge badge-danger\">Name</span>` HTML tag with Bootstrap's default badge classes to get a simple colored group tag.",
                "",
                "Bootstrap class that defines color looks like this `badge-primary`, you can change the color by changing the 2nd part of that class with one of the following Bootstrap's default colors, `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` & `dark`.",
                "",
                "If you wish to use a custom color for your badge you can do that by using this `<span class=\"badge\" style=\"color: #fff; background-color: #ff0000;\">Name</span>` HTML code.",
                "And replacing `#ff0000` with the hex code of a color of your choice. You can get hex codes of a color by using [this](https://www.google.com/search?q=color+picker) tool."
            ]
        }
    },
    {
        keywords: [
            ["vendor/autoload.php): failed to open stream"],
            ["vendor/autoload.php' (include_path="]
        ],
        response: {
            "title": "Install composer dependencies",
            "footer": "",
            "body": [
                "As of `2.0.0-pre13`, NamelessMC uses composer.",
                "Run `composer install` from within your NamelessMC directory to download and install the dependencies.",
                "In the chance you are not able to run commands (most budget webhosts don't allow it), you can download a zip with dependencies installed from https://ci.rkslot.nl/job/Nameless/"
            ]
        }
    },
    {
        keywords: [
            ["Minecraft username is invalid"],
        ],
        response: {
            "title": "Allowing non-premium accounts to register",
            "footer": "",
            "body": [
                "To allow cracked Minecraft accounts to register on your site, go to `StaffCP -> Integrations -> Minecraft -> Minecraft Account Verification` and disable `Force premium Minecraft accounts?`",
            ]
        }
    },
    {
        keywords: [
            ["Your bot might not be eligible to request a privileged intent such as GUILD_PRESENCES or GUILD_MEMBERS"],
        ],
        response: {
            "title": "Missing privileged intents for Nameless-Link in self-hosting setup",
            "footer": "",
            "body": [
                "Make sure you have enabled the guild members intent within your Discord Developer Portal page for your bot instance.",
                "For more information on how to properly self host Nameless-Link, please check out [this resource](https://github.com/NamelessMC/Nameless-Link/wiki/Installation-guide).",
            ]
        }
    },
    {
        keywords: [["compiled by a more recent version of the Java Runtime (class file version 61.0)"]],
        response: {
            "title": "Outdated Java",
            "footer": "",
            "body": [
                "Please update your Java version to Java 17 or newer (17 is recommended, this is a long term support version).",
            ]
        }
    },
    {
        keywords: [["compiled by a more recent version of the Java Runtime (class file version 55.0)"]],
        response: {
            "title": "Outdated Java",
            "footer": "",
            "body": [
                "Please update your Java version to Java 11 or newer (11 or 17 are recommended, these are long term support versions).",
            ]
        }
    },
    {
        keywords: [
            ["IOException: Read timed out"],
            ["IOException: Connect timed out"],
        ],
        response: {
            "title": "Plugin or Nameless-Link times out while waiting for response",
            "footer": "",
            "body": [
                "This error means the website hasn't sent a response to an API call in a reasonable amount of time and the connection was aborted. Some possible causes are listed below.",
                "",
                "1. Invalid address: if the address is invalid, the plugin or Nameless-Link is never going to get a response",
                "2. Firewall: if a firewall is blocking requests from the plugin or Nameless-Link, your website will never send a response and as a result, no response will be received. In case of Nameless-Link, you may need to ask your hosting provider to whitelist requests from 135.125.205.25.",
                "3. Slow web server: ensure the database server and web server are on the same machine, otherwise it might not be able to produce API responses quickly enough due to query latency.",
                "4. Update checker in v2-pr12 and older: In older versions, the API info endpoint sometimes checked for a NamelessMC update, delaying the response. This update check has been removed in v2-pr13.",
            ]
        }
    },
    {
        keywords: [["/aes.js"]],
        response: {
            "title": "API blocked",
            "footer": "",
            "body": [
                "This error is usually caused by hosting providers blocking access to their api. If you are using a provider like InfinityFree, please switch to a different hosting provider as they completely block access to your sites API.",
            ]
        }
    },
    {
        keywords: [["SQLSTATE", "Access denied for user"], ["SQLSTATE", "Connection refused"]],
        response: {
            "title": "Database connection issues",
            "footer": "Response based on the one from the Pterodactyl support server",
            "body": [
                "Your database is refusing the site's attempt to connect to it. This can be because of a few reasons. Here are some:",
                "",
                "**1.** Are you sure you entered the correct credentials?",
                "**2.** Is the MySQL instance running?",
                "**3.** Is the user you are trying to connect with authorized to access the given database from the site's IP adress?",
                "**4.** Did you correctly give that user permission to even access the database?",
                "**5.** Do you have a firewall that is blocking connections?",
                "**6.** Is your MySQL instance bound to `127.0.0.1` or `localhost` and you're trying to connect from outside the server?",
            ]
        }
    },
    {
        keywords: [["HTTP ERROR 500"]],
        response: {
            "title": "webserver error",
            "footer": "",
            "body": [
                "It looks like your web server is experiencing issues. Most common causes for this error is having wrong file permissions.",
                "Check your webserver logs to find out what exactly is wrong. For Apache, the default path would be `/var/log/apache2/error.log`",
                "For nginx, the default path is `/var/log/nginx/error.log`. Though these can be configured in the webservers themselves so yours may be somewher else.",
                "If you are using a webhost, their dashboard usually has a section where you can view the webserver errors.",
            ]
        }
    },
    {
        keywords: [["The widget is disabled for the specified discord server"], ["\"message\": \"Widget Disabled\", \"code\": 50004"]],
        response: {
            "title": "Discord widget",
            "footer": "",
            "body": [
                "It appears that your discord widget is failing to load. This can be because of a few issues:",
                "",
                "1. Ensure that the discord ID you entered in `StaffCP -> Integrations -> Discord` is correct",
                "2. Make sure that in your **discord** server settings. In the `Widget` section, the \"Enable Server Widget\" option is enabled",
            ]
        }
    },
    {
        keywords: [["Base table or view not found", "nl2_phinxlog"]],
        response: {
            "title": "Missing tables",
            "footer": "",
            "body": [
                "This error can appear if you upgraded from v2-pr12 to v2-pr13 without clicking the 'Update' button after uploading the update package. Please finish the update by visiting http://yoursite.com/index.php?route=/panel/upgrade manually in a web browser.",
                "",
                "Please note that this URL uses \"upgrade\" not \"update\" like the update page itself. If you still get an error after this step, it is likely something else. Please check your log file again.",
            ]
        }
    },
    {
        keywords: [["Translation file not found"]],
        response: {
            "title": "Translation file not found",
            "footer": "",
            "body": [
                "Ensure that you don't have any modules/templates installed that are not compatible with pr13. You can remove modules by going to the /modules directory and deleting (or moving) any outdated modules. For templates you can delete them in the /custom/templates directory."
            ]
        }
    },
    {
        keywords: [["Base table or view not found", "nl2_settings"]],
        response: {
            "title": "Installation issues",
            "footer": "",
            "body": [
                "This is a known issue with pr13. Please go to https://github.com/NamelessMC/Nameless/issues/2822 and follow the steps mentioned in the \"`nl2_settings` not found during installation\" section",
            ]
        }
    },
    {
        keywords: [["java.lang.UnsupportedOperationException: JsonNull", "com.namelessmc.plugin.lib.nameless-api.Website"]],
        response: {
            title: "Null locale",
            footer: "",
            body: [
                "Due to an issue with the v2-pr12 to v2-pr13 upgrader, your language might not be stored correctly. Please change your site's language to something else, save, then change it back again.",
            ]
        }
    },
    {
        keywords: [["nameless:invalid_api_key"]],
        response: {
            title: "Invalid API key error with Spigot plugin",
            footer: "",
            body: [
                "Some webservers might not pass the authorization header from the plugin to the NamelessMC API by default.",
                "To fix this, add `CGIPassAuth On` to your `.htaccess` file in the root directory of your NamelessMC files.",
            ]
        }
    },
    {
        keywords: [["redirect_uri"], ["redirect_uri_mismatch"]],
        response: {
            title: "OAuth redirect URI misconfiguration",
            footer: "",
            body: [
                "OAuth will only work correctly if you enter the correct Redirect URI in each providers configuration.",
                "These URIs must *exactly* match your website URL. Extra characters and spaces will make them not work.",
                "Ensure there are no extra ports in your website URL, and that the HTTP protocol matches.",
            ]
        }
    },
    {
        keywords: [["Field 'group_html_lg' doesn't have a default value"]],
        response: {
            title: "Field 'group_html_lg' doesn't have a default value",
            footer: "",
            body: [
                "Edit your `nl2_groups` table to remove the `group_html_lg` column. This column should no longer exist in v2-pr13, but websites upgraded from earlier versions may still have it.",
            ],
        },
    },
    {
        keywords: [["AssetResolver", "gatherAsset", "null given"]],
        response: {
            title: "Util::determineOrder() broken in v2-pr13",
            footer: "",
            body: [
                "Replace the contents of core/classes/Core/Util.php with this: https://paste.rkslot.nl/raw/uqacohaqip",
            ],
        },
    },
    {
        keywords: [["NoClassDefFoundError", "kyori", "adventure"]],
        response: {
            title: "Nameless-Plugin \"Paper\" jar",
            footer: "",
            body: [
                "Please note that the \"Paper\" jar can only be used for modern paper versions. If you must use an old, unmaintained paper version, install the \"Spigot\" plugin jar instead.",
            ],
        }
    },
    {
        keywords: [["IllegalPluginAccessException", "register", "disabled"]],
        response: {
            title: "IllegalPluginAccessException: Plugin attempted to register task while disabled",
            footer: "",
            body: [
                "The plugin failed to load, please check for errors during the plugin loading stage of server startup.",
            ],
        }
    },
]
