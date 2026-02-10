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
    {
      when: "{{gpu === 'nvidia' && platform === 'linux'}}",
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: "uv pip install nvidia-cusparselt-cu12 nvidia-nvshmem-cu12 nvidia-cuda-runtime-cu12 nvidia-cuda-nvrtc-cu12 nvidia-cublas-cu12 nvidia-cudnn-cu12 nvidia-nvjitlink-cu12"
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


