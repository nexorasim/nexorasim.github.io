#!/usr/bin/env node
const fs = require('fs');

const hasEmoji = (text) => /[\p{Emoji}]/u.test(text);

const run = () => {
  const commitMsgPath = process.argv[2];
  if (!commitMsgPath || !fs.existsSync(commitMsgPath)) {
    console.error('Commit message file not found.');
    process.exit(1);
  }
  const msg = fs.readFileSync(commitMsgPath, 'utf8');
  if (hasEmoji(msg)) {
    console.error('Emoji detected in commit message. Please remove emojis.');
    process.exit(1);
  }
  process.exit(0);
};

run();
