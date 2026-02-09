const path = require('path')
module.exports = {
  version: "5.0",
  title: "LightOnOCR-2-1B",
  description: "State-of-the-art 1B OCR model - Local version of HuggingFace demo. Created by Claude Code, orchestrated by TheAwakenOne.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
      link: info.running("link.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else if (running.link) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Deduplicating",
          href: "link.js",
        }]
      } else {
        return [{
          default: true,
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js"
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js"
        }, {
          icon: "fa-solid fa-plug",
          text: "Reinstall",
          href: "install.js"
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js"
        }];
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js"
      }];
    }
  }
};

