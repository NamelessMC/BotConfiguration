const hasGroupRule = (rules, column) => {
    return rules.filter(
        rule => rule[column] !== null
    ).length > 0;
}

module.exports = [

    debugLinkVersionCheck = {

        debugLinkRequired: true,

        // must have "how" and "discord" and at least one of the optional keywords
        keywords: [
            'how', // required
            'discord', // required
            [
                'group sync', // optional
                'rank sync', // optional
                'role sync' // optional
            ]
        ],

        // returns an array which should be treated as the embed data, or nothing if this check has no errors
        execute: (debugData) => {
            const errors = (() => {
                if (debugData.debug_version !== 1) {
                    return [
                        "use version 1 debug version"
                    ];
                }

               return true;
            })();

            if (errors === true) {
                // no errors
                return;
            }

            return {
                "title": "Discord Group Sync not working",
                "footer": "",
                "body": [
                    "Troubleshooting steps for configuring Discord Group Sync:\n",
                    ...errors.join("\n")
                ]
            }
        }

    },

    // another example...
    minecraftGroupSyncCheck = {
        debugLinkRequired: true,
        keywords: [
            'minecraft',
            [
                'group sync',
                'rank sync',
                'role sync'
            ]
        ],
        execute: (debugData) => {
            const errors = (() => {
                const errors = [];

                if (!debugData.namelessmc.version === '2.0.0-pr13') {
                    errors.push("- `Please ensure you are running NamelessMC 2.0.0 pre13.`");
                }

                if (!debugData.namelessmc.settings.api_enabled) {
                    errors.push("- `Please ensure your NamelessMC API is enabled in StaffCP -> Configuration -> API.`");
                }

                if (!debugData.namelessmc.modules['Core'].debug_info.minecraft.mc_integration) {
                    errors.push("- `Please ensure you have enabled Minecraft integration in StaffCP -> Integrations -> Minecraft.`");
                }

                if (!Object.keys(debugData.namelessmc.modules['Core'].debug_info.minecraft.servers) > 0) {
                    errors.push("- `Please ensure you have a least one Minecraft server in StaffCP -> Integrations -> Minecraft -> Servers.`");
                }

                if (!Object.keys(debugData.namelessmc.settings.group_sync.rules).length > 0) {
                    errors.push("- `Please ensure you have configured Group Sync rules in StaffCP -> Configuration -> API -> Group Sync.`");
                }

                if (!hasGroupRule(debugData.namelessmc.settings.group_sync.rules, 'ingame_group_name')) {
                    errors.push("- `Please ensure at least one of your Group Sync rules has a Minecraft group attached in StaffCP -> Configuration -> API -> Group Sync.`");
                }

                return errors.length > 0
                    ? errors
                    : true;
            })();

            if (errors === true) {
                // no errors
                return;
            }

            return {
                "title": "Discord Group Sync not working",
                "footer": "",
                "body": [
                    "Troubleshooting steps for configuring Discord Group Sync:\n",
                    ...errors.join("\n")
                ]
            }
        }
    }

]