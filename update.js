module.exports = {
  run: [
    // Pull latest changes from repository
    {
      method: "shell.run",
      params: {
        message: "git pull",
        path: ".."
      }
    },
    // Update Python dependencies
    {
      method: "shell.run",
      params: {
        venv: "../venv",
        path: "..",
        message: [
          "uv pip install -r requirements.txt --upgrade"
        ]
      }
    },
    // Completion message
    {
      method: "input",
      params: {
        title: "Update Complete",
        description: "The app has been updated to the latest version."
      }
    }
  ]
}
