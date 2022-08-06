const hasGroupRule = (rules, column) => {
    return rules.filter(
        rule => rule[column] !== null
    ).length > 0;
};

module.exports = [
    // another example...
    minecraftGroupSyncCheck = {
        execute: (debugData, text) => {
            if (!text.includes("group sync")) {
                return false;
            }

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
                "title": "Minecraft Group Sync not working",
                "footer": "",
                "body": [
                    "Troubleshooting steps for configuring Minecraft Group Sync:\n",
                    ...errors.map(error => `\`*\` ${error}`),
                ]
            };
        }
    }
];