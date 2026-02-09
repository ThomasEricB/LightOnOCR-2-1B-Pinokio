# LightOnOCR-2-1B Demo - Local Version

A local version of [LightOnOCR-2-1B-Demo](https://huggingface.co/spaces/lightonai/LightOnOCR-2-1B-Demo)

**Created by Claude Code | Orchestrated by TheAwakenOne**

## Overview

LightOnOCR-2-1B is a 1B-parameter end-to-end multilingual vision-language model that converts document images (PDFs) into clean, naturally ordered text without brittle OCR pipelines.

Based on the paper: [LightOnOCR: A 1B End-to-End Multilingual Vision-Language Model for State-of-the-Art OCR](https://arxiv.org/abs/2601.14251)

## Key Capabilities

- **State-of-the-art OCR**: 83.2% on OlmOCR-Bench
- **9x smaller and faster** than prior best-performing models
- **Complex layout handling**: Tables, forms, receipts, scientific notation
- **Bounding box detection**: Localize embedded images (bbox variants)
- **LaTeX math transcription**: KaTeX compatible
- **Scanned document support**: Robust to noise and degradation
- **Multilingual**: European languages and Latin scripts
- **Max resolution**: 1540px (longest edge)
- **Throughput**: 5.71 pages/sec on H100

## Model Variants

| Model | Description | Use Case |
|-------|-------------|----------|
| LightOnOCR-2-1B | Best OCR performance (83.2%) | General document extraction |
| LightOnOCR-2-1B-bbox | Best bounding box detection | Image localization |
| LightOnOCR-2-1B-base | Supervised baseline (81.8%) | Fine-tuning base |
| LightOnOCR-2-1B-bbox-base | Base bbox model | Bbox fine-tuning |
| LightOnOCR-2-1B-ocr-soup | Task-arithmetic merged (82.4%) | Alternative OCR |
| LightOnOCR-2-1B-bbox-soup | OCR-bbox trade-off | Balanced performance |

## How to Use

### Via Pinokio (Recommended)

1. Install [Pinokio](https://pinokio.computer/)
2. Search for "LightOnOCR-2-1B-Pinokio" or download this repository
3. Click "Install" to set up dependencies
4. Click "Start" to launch the app
5. Open the Web UI and upload an image or PDF

## System Requirements

- **GPU**: NVIDIA GPU with 4GB+ VRAM (recommended) or Apple Silicon Mac
- **RAM**: 8GB+ system memory
- **Storage**: ~5GB for model weights
- **Python**: 3.10+

## Performance Benchmarks

### OlmOCR-Bench Results

| Model | Size | ArXiv | Tables | Math | Overall |
|-------|------|-------|--------|------|---------|
| LightOnOCR-2-1B | 1B | 89.6 | 42.2 | 89.0 | **83.2** |
| Chandra-9B | 9B | 82.2 | 50.4 | 88.0 | 81.7 |
| olmOCR-2-8B | 8B | 82.9 | 48.3 | 84.3 | 80.4 |

### Inference Throughput (H100)

| Model | Pages/sec | Speedup |
|-------|-----------|---------|
| LightOnOCR-2-1B | 5.71 | 6.49x |
| olmOCR-2-8B | 3.28 | 3.73x |
| Chandra-9B | 1.70 | 1.93x |

## Links

- [Paper (arXiv)](https://arxiv.org/abs/2601.14251)
- [Blog Post](https://huggingface.co/blog/lightonai/lightonocr-2)
- [Model Collection](https://huggingface.co/collections/lightonai/lightonocr-2)
- [Training Dataset](https://huggingface.co/datasets/lightonai/LightOnOCR-mix-0126)
- [Finetuning Notebook](https://colab.research.google.com/drive/1WjbsFJZ4vOAAlKtcCauFLn_evo5UBRNa)
- [Original HuggingFace Space](https://huggingface.co/spaces/lightonai/LightOnOCR-2-1B-Demo)

## License

Model weights: Apache 2.0

---

*A local version of [lightonai/LightOnOCR-2-1B-Demo](https://huggingface.co/spaces/lightonai/LightOnOCR-2-1B-Demo)*

*Created by Claude Code | Orchestrated by TheAwakenOne*
