module.exports = Object.freeze({
  TOKEN: '1034515482:AAGovNoxvzEQ3D5tGrNUN22FxxbOUUgcS6c', //token to access the HTTP API
  ARIA_SECRET: 'aria_telegram_mirror_bot_secret', 
  ARIA_PORT: '',
  ARIA_DOWNLOAD_LOCATION: '/content/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/content', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '1-yX2VFj8RbcVGEujs490t-sJB_Mpnx95', //GOOGLE DRIVE FOLDER ID
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