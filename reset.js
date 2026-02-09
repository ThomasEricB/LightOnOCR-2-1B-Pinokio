module.exports = {
  run: [
    // Remove Python virtual environment
    {
      method: "fs.rm",
      params: {
        path: "../venv"
      }
    },
    // Remove HuggingFace cache (optional - models will be re-downloaded)
    {
      method: "fs.rm",
      params: {
        path: "../cache"
      }
    },
    // Completion message
    {
      method: "input",
      params: {
        title: "Reset Complete",
        description: "The app has been reset to pre-install state. Run 'Install' to set up again."
      }
    }
  ]
}
