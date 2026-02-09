module.exports = {
  version: "5.0",
  title: "LightOnOCR-2-1B",
  description: "State-of-the-art 1B OCR model - Local version of HuggingFace demo. Created by Claude Code, orchestrated by TheAwakenOne.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    // Check if dependencies are installed
    let installed = info.exists("../venv")

    // Check running status of scripts
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
      link: info.running("link.js"),
    }

    // Installing state
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    }

    // If installed
    if (installed) {
      // App is running
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            default: true,
            icon: "fa-solid fa-terminal",
            text: "Starting...",
            href: "start.js",
          }]
        }
      }

      // Updating state
      if (running.update) {
        return [{
          default: true,
          icon: "fa-solid fa-arrows-rotate",
          text: "Updating",
          href: "update.js",
        }]
      }

      // Resetting state
      if (running.reset) {
        return [{
          default: true,
          icon: "fa-solid fa-trash",
          text: "Resetting",
          href: "reset.js",
        }]
      }

      // Linking state (deduplication)
      if (running.link) {
        return [{
          default: true,
          icon: "fa-solid fa-file-zipper",
          text: "Saving Disk Space",
          href: "link.js",
        }]
      }

      // Idle state - show all options
      return [{
        default: true,
        icon: "fa-solid fa-power-off",
        text: "Start",
        href: "start.js",
      }, {
        icon: "fa-solid fa-arrows-rotate",
        text: "Update",
        href: "update.js",
      }, {
        icon: "fa-solid fa-plug",
        text: "Reinstall",
        href: "install.js",
      }, {
        icon: "fa-solid fa-file-zipper",
        text: "<div><strong>Save Disk Space</strong><div>Deduplicates redundant library files</div></div>",
        href: "link.js",
      }, {
        icon: "fa-regular fa-circle-xmark",
        text: "<div><strong>Reset</strong><div>Revert to pre-install state</div></div>",
        href: "reset.js",
        confirm: "Are you sure you wish to reset the app? This will remove all installed dependencies."
      }]
    }

    // Not installed - show install option
    return [{
      default: true,
      icon: "fa-solid fa-plug",
      text: "Install",
      href: "install.js",
    }]
  }
}
