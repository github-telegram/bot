module.exports = Object.freeze({
  TOKEN: '861409410:AAG3Adf-w1VQ-rZk1wayzLoUdnRU7xSUyw0',
  ARIA_SECRET: 'ariatelegrambotsecret', 
  ARIA_PORT: '8210',
  ARIA_DOWNLOAD_LOCATION: '/root/content/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/root/content/downloads', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '1L44L0AXpttK5g6RnYsM_cG7aVAC_zMdP', //GOOGLE DRIVE FOLDER ID
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: []
  },
  SUDO_USERS: [1005903824],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 10000, // A smaller number will update faster, but might cause rate limiting 
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: ""
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  } 
});
