 import { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } from "discord.js";
import { webhookReporter } from "../utilities";

module.exports = {
    pluginInfo: {
        /** Name of the plugin. Simple as it gets really. */
        name: "",
        /** Author(s) of the plugin. Please use the GitHub username of the person creating the PR on the repo */
        author: "",
        /** Current version of the plugin. Please change this as you update as it allows the CLI to know when a new plugin is waiting. */
        version: "",
        /** If present, the plugin will be imported only if the checksum matches. */
        md5hash: "",
        /** Add any NPM dependancies used in your package here. (Just copy and paste from the package.json.
          * Just note that using additional dependancies may mean that it takes longer for us to review your plugin.
          */
        npmDependancies: [""]
    },
    data: new SlashCommandBuilder()
        .setName('plugin-name')
        .setDescription('This is a template plugin - love the TSAB team :>'),
    async execute(ctx: CommandInteraction, client: Client) {
        const embed = new EmbedBuilder()
            .setTitle('TSAB Template Plugin')
            .setDescription('If you are a plugin developer, and have imported the template, it worked! If you are a regular user, run `/info` and contact the user or role mentioned in that embed.')

        await ctx.reply({embeds: [embed]})

        webhookReporter('note', 'Template plugin executed successfully.')
    }
}
