const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('ping'),
    run: async (interaction) => {
        interaction.reply({content: `Pong, legrox!`, ephemeral: true});
    },
};
