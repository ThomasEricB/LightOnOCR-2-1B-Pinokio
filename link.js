module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        venv: "../venv",
        path: "..",
        message: [
          "pip cache purge"
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "../venv"
      }
    },
    {
      method: "input",
      params: {
        title: "Disk Space Saved",
        description: "Redundant library files have been deduplicated to save disk space."
      }
    }
  ]
}
