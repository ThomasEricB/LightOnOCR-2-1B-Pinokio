module.exports = {
  "run": [
    // Step 1: Remove existing app directory
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install gradio devicetorch",
          "uv pip install -r requirements.txt"
        ],
      }
    },
    // Completion message
    {
      method: "notify",
      params: {
        title: "Installation Complete!",
        description: "LightOnOCR-2-1B is ready to use. Click 'Start' to launch the app.\n\nNote: On first run, the model will be downloaded from HuggingFace (~2GB)."
      }
    }
  ]
}


