import type { CapacitorConfig } from "@capacitor/cli";

const serverUrl =
  process.env.CAPACITOR_SERVER_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://soutien-van.vercel.app";

const config: CapacitorConfig = {
  appId: "ch.learnup.soutienscolaire",
  appName: "LearnUp",
  webDir: "capacitor-web",
  android: {
    allowMixedContent: false,
  },
  ios: {
    contentInset: "automatic",
  },
  server: {
    url: serverUrl,
    cleartext: serverUrl.startsWith("http://"),
    androidScheme: "https",
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      backgroundColor: "#ffffff",
      showSpinner: false,
    },
    StatusBar: {
      style: "LIGHT",
    },
  },
};

export default config;
