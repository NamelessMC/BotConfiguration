const hasGroupRule = (rules, column) => {
    rules.forEach((rule) => {
        if (rule[column] !== null) {
            return true;
        }
    });

    return false;
}

module.exports = [
    {
        requiresDebugLink: true,
        priority: 1,
        check: (message, debugObject) => {
            return debugObject.debug_version !== 1
        },
        response: {
            "title": "Invalid debug link verion",
            "footer": "",
            "body": [
                "Please ensure you are running NamelessMC 2.0.0 pre13."
            ]
        }
    },
    {
        requiresDebugLink: true,
        priority: 1,
        check: (message, debugObject) => {
            const keywords = ["minecraft", "sync"];
            if (!keywords.every(keyword => message.toLowerCase().includes(keyword))) {
                return;
            }

            return debugObject.namelessmc.version === '2.0.0-pr13'
                && debugObject.namelessmc.settings.api_enabled
                && debugObject.namelessmc.modules['Core'].debug_info.minecraft.mc_integration
                && Object.keys(debugObject.namelessmc.modules['Core'].debug_info.minecraft.servers) > 0
                && Object.keys(debugObject.namelessmc.settings.group_sync.rules).length > 0
                && hasGroupRule(debugObject.namelessmc.settings.group_sync.rules, 'ingame_group_name');
        },
        response: {
            "title": "Minecraft Group Sync not working",
            "footer": "",
            "body": [
                "Troubleshooting steps for configuring Minecraft Group Sync:\n",
                "- `Please ensure you are running NamelessMC 2.0.0 pre13.`\n",
                "- `Please ensure your NamelessMC API is enabled in StaffCP -> Configuration -> API.`\n",
                "- `Please ensure you have enabled Minecraft integration in StaffCP -> Integrations -> Minecraft.`\n",
                "- `Please ensure you have a least one Minecraft server in StaffCP -> Integrations -> Minecraft -> Servers.`\n",
                "- `Please ensure you have configured Group Sync rules in StaffCP -> Configuration -> API -> Group Sync.`\n",
                "- `Please ensure at least one of your Group Sync rules has a Minecraft group attached in StaffCP -> Configuration -> API -> Group Sync.`\n",
            ]
        }
    },
    {
        requiresDebugLink: true,
        priority: 1,
        check: (message, debugObject) => {
            const keywords = ["discord bot", "sync"];
            if (!keywords.every(keyword => message.toLowerCase().includes(keyword))) {
                return;
            }

            return debugObject.namelessmc.version === '2.0.0-pr13'
                && debugObject.namelessmc.settings.api_enabled
                && debugObject.namelessmc.modules['Discord Integration'].enabled
                && debugObject.namelessmc.modules['Discord Integration'].debug_info.bot_setup
                && Object.keys(debugObject.namelessmc.settings.group_sync.injectors).length > 0
                && Object.keys(debugObject.namelessmc.settings.group_sync.rules).length > 0
                && hasGroupRule(debugObject.namelessmc.settings.group_sync.rules, 'discord_role_id');
        },
        response: {
            "title": "Discord Group Sync not working",
            "footer": "",
            "body": [
                "Troubleshooting steps for configuring Discord Group Sync:\n",
                "- `Please ensure you are running NamelessMC 2.0.0 pre13.`\n",
                "- `Please ensure your NamelessMC API is enabled in StaffCP -> Configuration -> API.`\n",
                "- `Please ensure the Discord Integration module is enabled in StaffCP -> Modules.`\n",
                "- `Please ensure the Discord Integration bot is setup in StaffCP -> Integrations -> Discord.`\n",
                "- `Please ensure you have configured Group Sync rules in StaffCP -> Configuration -> API -> Group Sync.`\n",
                "- `Please ensure at least one of your Group Sync rules has a Discord role attached in StaffCP -> Configuration -> API -> Group Sync.`\n",
            ]
        }
    },
];