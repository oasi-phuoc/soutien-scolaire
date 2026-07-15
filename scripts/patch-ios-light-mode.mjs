#!/usr/bin/env node
/**
 * Force iOS light mode after `cap add ios` / `cap sync`.
 * Sets UIUserInterfaceStyle = Light in Info.plist.
 */
import fs from "node:fs";
import path from "node:path";

const plistPath = path.join(process.cwd(), "ios/App/App/Info.plist");
if (!fs.existsSync(plistPath)) {
  console.log("[patch-ios-light-mode] ios/App/App/Info.plist absent — ignoré");
  process.exit(0);
}

let xml = fs.readFileSync(plistPath, "utf8");
const key = "<key>UIUserInterfaceStyle</key>";
const value = "<string>Light</string>";

if (xml.includes(key)) {
  xml = xml.replace(
    /<key>UIUserInterfaceStyle<\/key>\s*<string>[^<]*<\/string>/,
    `${key}\n\t${value}`,
  );
} else {
  xml = xml.replace(
    "</dict>\n</plist>",
    `\t${key}\n\t${value}\n</dict>\n</plist>`,
  );
}

fs.writeFileSync(plistPath, xml);
console.log("[patch-ios-light-mode] UIUserInterfaceStyle = Light");
