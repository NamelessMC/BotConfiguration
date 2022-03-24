module.exports = [
    {
        keywords: [["how", "upload", "favicon"]],
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
        keywords: [
            ["The requested URL was not found on this server."],
            ["This page either doesn't exist, or it moved somewhere else."],
            ["404 Not Found", "nginx"]
        ],
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
            "title": "Invalid api method",
            "footer": "",
            "body": ["The error `invalid api method` means that the way the enpoint was requested is not supported. This does **NOT** mean that the API is broken, it actually confirms that it IS working. This likely happened because you visited your API URL and got this error. When copy pasting the API URL into a browser, you are not specifying an API method, so the error is correct."]
        }
    },
    {
        keywords: [["unable to load template 'file"]],
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
                "This error will likely occur when your template is outdated. This is due to a change in pr12 which causes issues causing this error. To fix this, update your template to the most recent version if it is available (it should support pr12). If your template has not been updated yet, try switching to the default template to fix the issue temporarily. After this, attempt to clear your panel template cache."
            ]
        }
    },
    {
        keywords: [["777"]],
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
                "Please find the full error message in the `/cache/logs/fatal-log.log` file or StaffCP > Configuration > Maintenance > Error Logs > Fatal log.",
                "",
                "If you got this issue while using the API (e.g. Spigot plugin or Nameless-Link bot), please apply the API fixes [mentioned here](https://github.com/NamelessMC/Nameless/issues/2446) first."
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
        keywords: [["where", "find", "api"], ["how", "find", "api"]],
        response: {
            "title": "Finding your api configuration",
            "footer": "",
            "body": [
                "You can find your API configuration in `StaffCP -> Configuration -> API`. This page will contain your API Key, API URL and some other settings related to your site API"
            ]
        }
    },
    {
        keywords: [["Argument", "must be of type", "given"]],
        response: {
            "title": "PHP 8 issues",
            "footer": "",
            "body": [
                "This issue occurs when the code is not yet compatible with PHP 8. If this happens within the functionality of a third party module or template, please contact the module/template author. You can fix this issue by **downgrading** to PHP 7.4 which fixes this issue."
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
        keywords: [["Announcements.php(50): Using $this when not in object context"], ["Undefined constant \"PAGE\""], ["ServerInfoEndpoint.php(163) 2: array_merge(): Expected parameter 2 to be an array, null given"], ["ServerInfoEndpoint.php(163) 8: Undefined variable: log_array"]],
        response: {
            "title": "Broken API in pr12",
            "footer": "",
            "body": [
                "To fix these issues, please head to [this](https://github.com/NamelessMC/Nameless/issues/2446) page and apply the commits mentioned in the `Broken API` part. This will fix the issue"
            ]
        }
    },
    {
        keywords: [
            ["how", "enable", "friendly url"],
            ["how", "enable", "friendly urls"]
        ],
        response: {
            "title": "Enabling friendly-urls",
            "footer": "",
            "body": [
                "If you want to enable friendly urls, please follow the steps over at https://docs.namelessmc.com/friendly-urls"
            ]
        }
    },
    {
        keywords: [
            ["<title>Please Wait... | Cloudflare</title>"],
            ["Please wait while your request is being verified..."]
        ],
        response: {
            "title": "Cloudflare",
            "footer": "",
            "body": [
                "Make sure \"under attack\" mode is disabled and API calls bypass the browser integrity check. You can do this by creating a page rule for `https://yourdomain/index.php?route=/api/*`. Set: 'Browser Integrity Check' to 'Off', 'Always Online' to 'Off', 'Cache Level' to 'Bypass'. Make a page rule by clicking on 'Rules' and then 'Page Rules' in your Cloudflare panel."
            ]
        }
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
    }


]
