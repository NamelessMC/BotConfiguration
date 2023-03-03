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
               "Most panel templates in the resources page at this time don't support most modules, so you should either wait for the support to be added or use the \"Default\" panel template instead.",
               "",
               "To force your template to be reset to \"DefaultRevamp\", delete the file `cache/b1ef26a8913c5b4c085921a013f66a13c3687c1c.cache`, and make sure it is enabled and default in the `nl2_templates` MySQL table."
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
            ["<meta name=\"description\" content=\"Allvarligt fel"],
            ["fatal error"],
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
        keywords: [
            ["<title>Please Wait... | Cloudflare</title>"],
            ["<title>Just a moment...</title>"],
        ],
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
            ["HttpHeadersTimeoutException"],
            ["couldn't receive headers on time"],
            ["HttpTimeoutException: request timed out"],
        ],
        response: {
            "title": "Plugin or Nameless-Link times out while waiting for response",
            "footer": "",
            "body": [
                "This error means the website hasn't sent a response to an API call in a reasonable amount of time and the connection was aborted. Some possible causes are listed below.",
                "",
                "1. Discord group sync (most likely): Due to several bugs, Discord group sync can be *extremely* slow, delaying web requests for far too long. Please remove any Discord group sync rules in StaffCP > Configuration > API > Group Sync. This will be fixed in 2.1.0.",
                "2. Invalid address: if the address is invalid, the plugin or Nameless-Link is never going to get a response",
                "3. Slow web server: ensure the database server and web server are on the same machine, otherwise it might not be able to produce API responses quickly enough due to query latency.",
                "4. Firewall (unlikely): if a firewall is blocking requests from the plugin or Nameless-Link, your website will never send a response and as a result, no response will be received.",
                "5. (only for v2-pr12 and older) One API endpoint endpoint sometimes checked for a NamelessMC update, delaying the response. This update check has been removed in later versions. Please update.",
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
                "For nginx, the default path is `/var/log/nginx/error.log`. Though these can be configured in the webservers themselves so yours may be somewhere else.",
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
        keywords: [
            ["Frame", "VerifyMinecraftEndpoint"],
            ["VerifyMinecraftEndpoint", "abstract method"],
            ["VerifyDiscordEndpoint", "abstract method"],
        ],
        response: {
            "title": "Files were not deleted during upgrade",
            "footer": "",
            "body": [
                "This error can appear if you upgraded from v2-pr12 to v2-pr13 without clicking the 'Update' button after uploading the update package. Please finish the update by visiting http://yoursite.com/index.php?route=/panel/upgrade manually in a web browser.",
                "",
                "It is also possible that you did run the upgrader, but your files had incorrect permissions and as a result NamelessMC was not able to delete them. Please manually delete any *Endpoint.php files affected by this error, until your website loads (or you get a different error). Be careful to not delete other files!",
            ]
        }
    },
    {
        keywords: [
            ["Base table or view not found", "nl2_phinxlog", "database migrations pending"],
            ["there are", "migrations files", "not been executed"],
            ["There are", "database migrations pending"],
        ],
        response: {
            "title": "Upgrader did not run",
            "footer": "",
            "body": [
                "This error can appear if you upgraded NamelessMC without clicking the 'Update' button after uploading the update package. Please finish the update by visiting http://yoursite.com/index.php?route=/panel/upgrade manually in a web browser.",
                "",
                "If you are redirected back to the update page, try to remove these lines https://github.com/NamelessMC/Nameless/blob/v2/modules/Core/pages/panel/upgrade.php#L13-L17 from your `modules/Core/pages/panel/upgrade.php` file, and then go to the upgrade URL again.",
            ]
        }
    },
    {
        keywords: [["Translation file not found"]],
        response: {
            "title": "Translation file not found",
            "footer": "",
            "body": [
                "Ensure that you don't have any modules/templates installed that are not compatible with v2.0.0-pr13 or above. You can remove modules by going to the /modules directory and deleting (or moving) any outdated modules. For templates you can delete them in the /custom/templates directory."
            ]
        }
    },
    {
        keywords: [["Base table or view not found", "nl2_settings"]],
        response: {
            "title": "Installation issues",
            "footer": "",
            "body": [
                "Please go to https://github.com/NamelessMC/Nameless/issues/2822 and follow the steps mentioned in the \"`nl2_settings` not found during installation\" section",
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
            title: "Invalid API key",
            footer: "",
            body: [
                "This message has several possible causes:",
                "",
                "1. Your API key is invalid",
                "2. (v2.0.0-pr13 only) Your web server is not passing the Authorization header to NamelessMC. Try adding `CGIPassAuth On` to your `.htaccess` file in the root directory of your NamelessMC files.",
                "3. (v2.0.0-pr13 only) Your web server is passing the Authorization header, but in an usual case. Headers should be case insensitive but weren't in v2-pr13. This has been fixed properly for the next version, for now edit `core/classes/Endpoints/KeyAuthEndpoint.php` and 1) replace `$headers = getallheaders();` with `$headers = array_change_key_case(getallheaders(), CASE_LOWER);` and 2) replace `$headers['Authorization']` with `$headers['authorization']` (2 times!)",
            ],
        },
    },
    {
        keywords: [["nameless:missing_api_key"]],
        response: {
            title: "Missing API key",
            footer: "",
            body: [
                "NamelessMC has not received an API key. The `Authorization` header is probably being removed by your hosting provider, web server, or a proxy. A few possible ways to fix this issue are listed below:",
                "",
                "1. (v2.0.0-v2.0.2 only) Update to Nameless v2.0.3 and Nameless-Plugin v3.2.4 and you won't have this issue anymore. Since these versions, the website and plugin will now use a fallback header if the Authorization header is being removed.",
                "2. (v2.0.0-pr13 only) NamelessMC version v2.0.0-pr13 has some bugs related to the Authorization header. Please update to v2.0.3. There are no breaking changes.",
                "3. Make sure the .htaccess file exists, and contains the `CGIPassAuth On` rule.",
                "4. Contact your hosting provider. They should know what to do if you tell them the `Authorization` header is stripped and not accessible from PHP. However, experience shows that many hosting providers will claim that the Authorization header is not being removed, even when it is. We strongly recommend option 1 instead, which will fix the issue without needing cooperation from your hosting provider.",
            ],
        },
    },
    {
        keywords: [
            ["port 80", "https"],
            [":80", "https://", "api/v2"],
            ["SSLException", "plaintext connection"],
        ],
        response: {
            title: "Proxy misconfiguration, HTTPS with port 80",
            footer: "",
            body: [
                "Ensure that if you are using Cloudflare (with proxy enabled), the TLS mode is set to \"Full (strict)\". It may be set to Flexible which is not secure, as traffic to the web server is unencrypted.",
                "",
                "If you are running your own proxy, it needs to send appropriate proxy headers so NamelessMC knows which protocol and port to use. An example for NGINX:",
                "```",
                "proxy_set_header X-Forwarded-For       $proxy_add_x_forwarded_for;",
                "proxy_set_header X-Forwarded-Proto     $scheme;",
                "proxy_set_header X-Forwarded-Port      $server_port;",
                "```",
                "Please note that this configuration should be placed in the **proxy** webserver, not the NamelessMC web server!",
            ],
        },
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
                // "Replace the contents of core/classes/Core/Util.php with this: https://paste.rkslot.nl/raw/uqacohaqip",
                "Please update to version 2.0.3. There are no breaking changes.",
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
    {
        keywords: [["invalid_post_contents", "tps"]],
        response: {
            title: "ServerInfoEndpoint validation issue in v2-pr13",
            footer: "",
            body: [
                // "Please replace the contents of the `modules/Core/includes/endpoints/ServerInfoEndpoint.php` file with https://paste.rkslot.nl/raw/xayotubuwe",
                "Please update to version 2.0.3. There are no breaking changes.",
            ],
        },
    },
    {
        keywords: [["Error loading language file general.php"]],
        response: {
            title: "Cannot load php language file",
            footer: "",
            body: [
                "If you're using an older version before v2-pr13, make sure you don't install any modules made for v2-pr13 and up.",
            ],
        },
    },
    {
        keywords: [["MCQuery", "TypeError", "Cannot access offset of type string on string"]],
        response: {
            title: "Query motd bug in v2-pr13",
            footer: "",
            body: [
                // "Please apply this change: https://github.com/NamelessMC/Nameless/commit/4ab19bfebc2ec3d59d8c7b436b4dcb8de6e51e27",
                "Please update to version 2.0.3. There are no breaking changes.",
            ],
        },
    },
    {
        keywords: [["Error", "Cannot use object of type stdClass as array", "LatestPostsWidget"]],
        response: {
            title: "Latest posts widget issue in v2-pr13",
            footer: "",
            body: [
                // "Please turn off the latests posts widget until v2 is released, or apply this change manually: https://github.com/NamelessMC/Nameless/commit/8ba42f7a839a4f4f5586f8ad8153c44b8034d35d",
                "Please update to version 2.0.3. There are no breaking changes.",
            ],
        },
    },
    {
        keywords: [
            ["plugin not set up"],
            ["plugin not setup"],
        ],
        response: {
            title: "Group sync: 'In-game plugin not set up'",
            footer: "",
            body: [
                "Ensure the 'server data sender' is enabled in your plugin config file, and `server-id` is configured correctly.",
            ],
        },
    },
    {
        keywords: [["nginx", "403 Forbidden"]],
        response: {
            title: "NGINX forbidden",
            footer: "",
            body: [
                "The most likely causes for this error are:",
                "1. Wrong `root` path in nginx config",
                "2. Misconfigured index, it should be: `index index.php index.html`",
                "3. Nameless files not uploaded, not extracted, or not in the right directory.",
            ],
        },
    },
    {
        keywords: [["nginx", "502 Bad Gateway"]],
        response: {
            title: "NGINX bad gateway",
            footer: "",
            body: [
                "The most likely causes for this error are:",
                "1. You have entered the wrong socket path for php-fpm. Check if the socket file exists, and if it doesn't, look for a similarly named socket file in the same directory and enter that instead. For example, you might need to enter `/var/run/php-fpm.sock` instead of `/var/run/php7.4-fpm.sock`. The actual socket path depends on your operating system.",
                "2. If you are using a proxy, this appears if the proxy server can't reach your backend webserver. Ensure your backend webserver is running and the proxy is configured correctly.",
            ],
        },
    },
    {
        keywords: [["767 bytes"]],
        response: {
            title: "Specified key was too long; max key length is 767 bytes",
            footer: "",
            body: [
                "Please update to a more recent version of MariaDB (10.3+) or MySQL (5.7+) with support for longer indexes. If you use a webhost, please contact them or move to a different web hosting provider. If you configured a server yourself, make sure it is upgraded to the newest release of your Linux distribution. Most Linux distributions include a new enough MariaDB version, so you don't need to install it from third party sources.",
            ],
        },
    },
    {
        keywords: [["empty response", "status code 521"]],
        response: {
            title: "Empty response with status code 521",
            footer: "",
            body: [
                "Your website is down. HTTP status code 521 is sent by CloudFlare when it cannot connect to your web server. This error message is not sent by or caused by NamelessMC.",
            ],
        },
    },
    {
        keywords: [["ExternalMCQuery", "must be of type bool", "null given"]],
        response: {
            title: "External query bedrock setting issue in v2-pr13",
            footer: "",
            body: [
                "Please replace the contents of the `core/classes/Minecraft/MCQuery.php` file with [this](https://raw.githubusercontent.com/NamelessMC/Nameless/21825f657a84bb2184866aa8addbf1060783c724/core/classes/Minecraft/MCQuery.php)",
            ],
        },
    },
    {
        keywords: [["change", "api", "bot"]],
        response: {
            title: "Change API Key for Nameless Link Discord bot",
            footer: "",
            body: [
                "If you want to change the API URL of the Nameless Link Discord bot, use the slash command `/apiurl <url>` in your discord server. If the slash commands do not exist, try re-inviting the discord bot."
            ]
        }
    },
    {
        keywords: [["column", "username", "cannot be null"]],
        response: {
            title: "Issue with user integrations",
            footer: "",
            body: [
                "To fix this issue, do the following:",
                "",
                "`1.` Open your database with a tool like PHPMyAdmin",
                "`2.` Find your database and then find the nl2_users_integrations table inside that [image](https://imgur.com/dArlmmD)",
                "`3.` Click the structure tab at the top of the page after you've selected the table and find the username row [image](https://imgur.com/jgRJx71)",
                "`4.` Find the username row and click \"Change\". [image](https://imgur.com/SUN1pjf)",
                "`5.` Click the checkbox that says \"Null\", then click Save on the bottom right.",
                "",
                "The issue should now be fixed."
            ]
        }
    },
    {
        keywords: [["must be of type Countable", "MCQuery"]],
        response: {
            title: "MOTD extra data issue in v2-p13",
            footer: "",
            body: [
                // "Please make the following change: https://github.com/NamelessMC/Nameless/commit/348fee4abea348e2aaa666134aaba7c73703f984",
                "Please update to version 2.0.3. There are no breaking changes.",
            ],
        },
    },
    {
        keywords: [['Undefined constant "DEFAULT_LANGUAGE"', 'Undefined constant "MINECRAFT"']],
        response: {
            title: "Admin account creation issue in 2.0.0",
            footer: "",
            body: [
                // "Follow the steps here https://github.com/NamelessMC/Nameless/issues/2973 for 'Issues creating admin account during installer'",
                "Please install version 2.0.3 instead. There are no breaking changes.",
            ],
        },
    },
    {
        keywords: [["Config file does not exist"]],
        response: {
            title: "Config file does not exist",
            footer: "",
            body: [
                "Please delete the `core/config.php` file if it exists, then restart the installation **in a private/incognito** browser window.",
            ],
        },
    },
    {
        keywords: [["Column 'reset_code' cannot be null"]],
        response: {
            title: "Column 'reset_code' cannot be null",
            footer: "",
            body: [
                "Run the following query:",
                "```sql",
                "ALTER TABLE nl2_users MODIFY reset_code varchar(64) DEFAULT NULL;",
                "```",
            ],
        },
    },
    {
        keywords: [["GOAWAY received"]],
        response: {
            title: "GOAWAY received",
            footer: "",
            body: [
                "The web server closed the connection early. Did you restart your web server, or was it responding too slowly? If it only happens occasionally, please ignore the message. It is probably the result of temporary web server downtime.",
            ],
        },
    },
    {
        keywords: [["init", "Undefined constant", "host"]],
        response: {
            title: "core/init.php(90): Undefined constant \"host\"",
            footer: "",
            body: [
                // "Please apply this change: https://github.com/NamelessMC/Nameless/commit/4905abce181cbdd75b7c0de65128c9c05f9f10a4",
                "Please update to version 2.0.3. There are no breaking changes.",
            ],
        },
    },
    {
        keywords: [["Duplicate entry", "core", "name"]],
        response: {
            title: "(re-)installing without clearing database",
            footer: "",
            body: [
                "This error happens when you are trying to (re-)install into an existing database. Please clear your database first and then attempt to re-install. You may need to do this in a private/incognito browser window"
            ],
        },
    },
    {
        keywords: [["InvalidPluginException", "Unsupported API version"]],
        response: {
            title: "Wrong jar file for your platform",
            body: [
                "You have likely installed the wrong jar file for your server platform. Please read the [plugin installation instructions](https://www.spigotmc.org/resources/nameless-plugin-for-v2.59032/).",
            ],
        },
    },
]
