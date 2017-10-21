/*
Emoticon plugin
This plugin allows you to use emoticons in both chat rooms (as long as they are enabled in the room) and private messages.
*/
'use strict';

const fs = require('fs');
let emoticons = {''#freewolf': 'http://i.imgur.com/ybxWXiG.png',
	'4Head': 'https://static-cdn.jtvnw.net/emoticons/v1/354/1.0',
	'DansGame': 'https://static-cdn.jtvnw.net/emoticons/v1/33/1.0',
	'Doge': 'http://fc01.deviantart.net/fs71/f/2014/279/4/5/doge__by_honeybunny135-d81wk54.png',
	'EleGiggle': 'https://static-cdn.jtvnw.net/emoticons/v1/4339/2.0',
	'FacePalm': 'http://i.imgur.com/lv3GmpM.png',
	'FailFish': 'https://static-cdn.jtvnw.net/emoticons/v1/360/1.0',
	'feelsackbr': 'http://i.imgur.com/BzZJedC.jpg?1',
	'feelsbebop': 'http://i.imgur.com/TDwC3wL.png',
	'feelsbd': 'http://i.imgur.com/YyEdmwX.png',
	'feelsbirb': 'http://i.imgur.com/o4KxmWe.png',
	'feelsbm': 'http://i.imgur.com/xwfJb2z.png',
	'feelsbn': 'http://i.imgur.com/wp51rIg.png',
	'feelsbt': 'http://i.imgur.com/rghiV9b.png',
	'feelschime': 'http://i.imgur.com/uIIBChH.png',
	'feelscrazy': 'http://i.imgur.com/NiJsT5W.png',
	'feelscool': 'http://i.imgur.com/qdGngVl.jpg?1',
	'feelscri': 'http://i.imgur.com/QAuUW7u.jpg?1',
	'feelscx': 'http://i.imgur.com/zRSUw2n.gif',
	'feelsdd': 'http://i.imgur.com/fXtdLtV.png',
	'feelsdoge': 'http://i.imgur.com/GklYWvi.png',
	'feelsemo': 'http://i.imgur.com/FPolh5d.jpg',
	'feelsfdra': 'http://i.imgur.com/ZIcl9Zy.jpg',
	'feelsfro': 'http://i.imgur.com/ijJakJT.png',
	'feelsgay': 'http://i.imgur.com/zQAacwu.png?1',
	'feelsgd': 'http://i.imgur.com/Jf0n4BL.png',
	'feelsgn': 'http://i.imgur.com/juJQh0J.png',
	'feelsgro': 'http://i.imgur.com/jLhP0bZ.png?1',
	'feelshigh': 'http://i.imgur.com/s9I2bxp.jpg?1',
	'feelshlwn': 'http://i.imgur.com/OHMDVNJ.jpg',
	'feelshp': 'http://i.imgur.com/1W19BDG.png',
	'feelsho': 'http://i.imgur.com/J4oUHm2.png?1',
	'feelsilum': 'http://i.imgur.com/CnyGTTD.png',
	'feelsjig': 'http://i.imgur.com/hSzqy5z.png?1',
	'feelsjpn': 'http://i.imgur.com/Zz2WrQf.jpg',
	'feelskawaii': 'http://i.imgur.com/kLnDaYD.png', 
	'feelsky': 'http://i.imgur.com/BtATPId.png?1',
	'feelslelouch': 'http://i.imgur.com/qZrV75o.png',
	'feelslot': 'http://i.imgur.com/tl88F7i.png?1',
	'feelslu': 'http://i.imgur.com/REEBSOT.png?1',
	'feelsmd': 'http://i.imgur.com/DJHMdSw.png',
	'feelsmixtape': 'http://i.imgur.com/7lncwng.png',
	'feelsnv': 'http://i.imgur.com/XF6kIdJ.png',
	'feelsns': 'http://i.imgur.com/jYRFUYW.jpg?1',
	'feelsok': 'http://i.imgur.com/gu3Osve.png',
	'feelsorange': 'http://i.imgur.com/3fxXP16.jpg',
	'feelspanda': 'http://i.imgur.com/qi7fue9.png',
	'feelspaul': 'http://imgur.com/KuDZMJR.png',
	'feelsshrk': 'http://i.imgur.com/amTG3jF.jpg',
	'feelspika': 'http://i.imgur.com/mBq3BAW.png',
	'feelsPika': 'http://i.imgur.com/eoTrTkn.png?1',
	'feelspink': 'http://i.imgur.com/jqfB8Di.png',
	'feelspn': 'http://i.imgur.com/wSSM6Zk.png',
	'feelspoli': 'http://i.imgur.com/FnzhrWa.jpg?1',
	'feelsPoli': 'http://i.imgur.com/sbKhXZE.jpg?1',
	'feelsrb': 'http://i.imgur.com/L6ak1Uk.png',
	'feelsrg': 'http://i.imgur.com/DsRQCsI.png',
	'feelsrs': 'http://i.imgur.com/qGEot0R.png',
	'feelssc': 'http://i.imgur.com/cm6oTZ1.png',
	'feelsseis': 'http://i.imgur.com/gGGYxrE.png?1',
	'feelsshi': 'http://i.imgur.com/VzlGZ1M.jpg',
	'feelsslo': 'http://i.imgur.com/iQuToJf.jpg?1',
	'feelssnake': 'http://i.imgur.com/xoJnDUD.png',
	'feelstea': 'http://i.imgur.com/M0f2zgJ.jpg?1',
	'feelstired': 'http://i.imgur.com/EgYViOs.jpg',
	'feelsdrg': 'http://i.imgur.com/UZzWcA3.png',
	'feelsvolc': 'http://i.imgur.com/QXlKzZd.png?1',
	'feelsvpn': 'http://i.imgur.com/ODTZISl.gif',
	'feelswin': 'http://i.imgur.com/rbs9pZG.png?1',
	'feelswnk': 'http://i.imgur.com/K1GhJaN.png', 
	'funnylol': 'http://i.imgur.com/SlzCghq.png',
	'happyface': 'http://imgur.com/krzCL3j.jpg',
	'hmmface': 'http://i.imgur.com/Z5lOwfZ.png',
	'hypnotoad': 'http://i.imgur.com/lJtbSfl.gif',
	'jcena': 'http://i.imgur.com/hPz30Ol.jpg?2',
	'Kappa': 'http://i.imgur.com/ZxRU4z3.png?1',
	'Kreygasm': 'https://static-cdn.jtvnw.net/emoticons/v1/41/1.0',
	'meGusta': 'http://cdn.overclock.net/3/36/50x50px-ZC-369517fd_me-gusta-me-gusta-s.png',
	'MingLee': 'https://static-cdn.jtvnw.net/emoticons/v1/68856/2.0',
	'noface': 'http://i.imgur.com/H744eRE.png',
	'Obama': 'http://i.imgur.com/rBA9M7A.png',
	'oshet': 'http://i.imgur.com/yr5DjuZ.png',
	'PeoplesChamp': 'http://i.imgur.com/QMiMBKe.png',
	'Sanic': 'http://i.imgur.com/Y6etmna.png',
	'thumbsup': 'http://i.imgur.com/eWcFLLn.jpg',
	'trollface': 'http://cdn.overclock.net/a/a0/50x50px-ZC-a0e3f9a7_troll-troll-face.png',
	'trumpW': 'https://static-cdn.jtvnw.net/emoticons/v1/35218/1.0',
	'wtfman': 'http://i.imgur.com/kwR8Re9.png',
	'WutFace': 'https://static-cdn.jtvnw.net/emoticons/v1/28087/2.0',
	'xaa': 'http://i.imgur.com/V728AvL.png',
	'xoxo': 'http://orig00.deviantart.net/b49d/f/2014/220/5/3/ichigo_not_impressed_icon_by_magical_icon-d7u92zg.png',
	'yayface': 'http://i.imgur.com/anY1jf8.png',
	'yesface': 'http://i.imgur.com/k9YCF6K.png',
	'youdontsay': 'http://r32.imgfast.net/users/3215/23/26/64/smiles/280467785.jpg',
	'gudone': 'http://i.imgur.com/USkp1b9.png'};
		 
		 
let emoteRegex = new RegExp('feelsbd', 'g');
SG.ignoreEmotes = {};
try {
	SG.ignoreEmotes = JSON.parse(fs.readFileSync('config/ignoreemotes.json', 'utf8'));
} catch (e) {}

function loadEmoticons() {
	try {
		emoticons = JSON.parse(fs.readFileSync('config/emoticons.json', 'utf8'));
		emoteRegex = [];
		for (let emote in emoticons) {
			emoteRegex.push(escapeRegExp(emote));
		}
		emoteRegex = new RegExp('(' + emoteRegex.join('|') + ')', 'g');
	} catch (e) {}
}
loadEmoticons();

function saveEmoticons() {
	fs.writeFileSync('config/emoticons.json', JSON.stringify(emoticons));
	emoteRegex = [];
	for (let emote in emoticons) {
		emoteRegex.push(emote);
	}
	emoteRegex = new RegExp('(' + emoteRegex.join('|') + ')', 'g');
}

function parseEmoticons(message) {
	if (emoteRegex.test(message)) {
		message = SG.parseMessage(message).replace(emoteRegex, function (match) {
			return '<img src="' + emoticons[match] + '" title="' + match + '" height="40" width="40">';
		});
		return message;
	}
	return false;
}
SG.parseEmoticons = parseEmoticons;

exports.commands = {
	blockemote: 'ignoreemotes',
	blockemotes: 'ignoreemotes',
	blockemoticon: 'ignoreemotes',
	blockemoticons: 'ignoreemotes',
	ignoreemotes: function (target, room, user) {
		this.parse('/emoticons ignore');
	},

	unblockemote: 'unignoreemotes',
	unblockemotes: 'unignoreemotes',
	unblockemoticon: 'unignoreemotes',
	unblockemoticons: 'unignoreemotes',
	unignoreemotes: function (target, room, user) {
		this.parse('/emoticons unignore');
	},

	emoticons: 'emoticon',
	emote: 'emoticon',
	emotes: 'emoticon',
	emoticon: function (target, room, user) {
		if (!target) target = 'help';
		let parts = target.split(',');
		for (let u in parts) parts[u] = parts[u].trim();

		switch (parts[0]) {
		case 'add':
			if (!this.can('roomowner')) return false;
			if (!parts[2]) return this.sendReply("Usage: /emoticon add, [name], [url] - Remember to resize the image first! (recommended 30x30)");
			if (emoticons[parts[1]]) return this.sendReply("\"" + parts[1] + "\" is already an emoticon.");
			emoticons[parts[1]] = parts[2];
			saveEmoticons();
			this.sendReply('|raw|The emoticon "' + Chat.escapeHTML(parts[1]) + '" has been added: <img src="' + parts[2] + '">');
			Rooms('upperstaff').add('|raw|' + SG.nameColor(user.name, true) + ' has added the emote "' + Chat.escapeHTML(parts[1]) +
				'": <img width="40" height="40" src="' + parts[2] + '">').update();
			SG.messageSeniorStaff('/html ' + SG.nameColor(user.name, true) + ' has added the emote "' + Chat.escapeHTML(parts[1]) +
				'": <img width="40" height="40" src="' + parts[2] + '">');
			break;

		case 'delete':
		case 'remove':
		case 'rem':
		case 'del':
			if (!this.can('roomowner')) return false;
			if (!parts[1]) return this.sendReply("Usage: /emoticon del, [name]");
			if (!emoticons[parts[1]]) return this.sendReply("The emoticon \"" + parts[1] + "\" does not exist.");
			delete emoticons[parts[1]];
			saveEmoticons();
			this.sendReply("The emoticon \"" + parts[1] + "\" has been removed.");
			break;

		case 'on':
		case 'enable':
		case 'disable':
		case 'off':
			if (!this.can('roommod', null, room)) return this.sendReply('Access denied.');
			let status = ((parts[0] !== 'enable' && parts[0] !== 'on'));
			if (room.disableEmoticons === status) return this.sendReply("Emoticons are already " + (status ? "disabled" : "enabled") + " in this room.");
			room.disableEmoticons = status;
			room.chatRoomData.disableEmoticons = status;
			Rooms.global.writeChatRoomData();
			this.privateModCommand('(' + user.name + ' ' + (status ? ' disabled ' : ' enabled ') + 'emoticons in this room.)');
			break;

		case 'view':
		case 'list':
			if (!this.runBroadcast()) return;
			let reply = "<b><u>Emoticons (" + Object.keys(emoticons).length + ")</u></b><br />";
			for (let emote in emoticons) reply += "(" + emote + " <img src=\"" + emoticons[emote] + "\" height=\"40\" width=\"40\">) ";
			this.sendReply('|raw|<div class="infobox infobox-limited">' + reply + '</div>');
			break;

		case 'ignore':
			if (SG.ignoreEmotes[user.userid]) return this.errorReply("You are already ignoring emoticons.");
			SG.ignoreEmotes[user.userid] = true;
			fs.writeFileSync('config/ignoreemotes.json', JSON.stringify(SG.ignoreEmotes));
			this.sendReply("You are now ignoring emoticons.");
			break;

		case 'unignore':
			if (!SG.ignoreEmotes[user.userid]) return this.errorReply("You aren't ignoring emoticons.");
			delete SG.ignoreEmotes[user.userid];
			fs.writeFileSync('config/ignoreemotes.json', JSON.stringify(SG.ignoreEmotes));
			this.sendReply("You are no longer ignoring emoticons.");
			break;

		default:
		case 'help':
			if (!this.runBroadcast()) return;
			this.sendReplyBox(
				"Emoticon Commands:<br />" +
				"<small>/emoticon may be substituted with /emoticons, /emotes, or /emote</small><br />" +
				"/emoticon add, [name], [url] - Adds an emoticon.<br />" +
				"/emoticon del/delete/remove/rem, [name] - Removes an emoticon.<br />" +
				"/emoticon enable/on/disable/off - Enables or disables emoticons in the current room.<br />" +
				"/emoticon view/list - Displays the list of emoticons.<br />" +
				"/emoticon ignore - Ignores emoticons in chat messages.<br />" +
				"/emoticon unignore - Unignores emoticons in chat messages.<br />" +
				"/emoticon help - Displays this help command.<br />" +
				"<a href=\"https://gist.github.com/jd4564/ef66ecc47c58b3bb06ec\">Emoticon Plugin by: jd</a>"
			);
			break;
		}
	},
};

function escapeRegExp(str) {
	return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); // eslint-disable-line no-useless-escape
}
