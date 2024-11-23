// src/services/ocrService.js
import axios from 'axios';

const OCR_API_ENDPOINT = 'https://example.com/ocr'; // Replace with your actual OCR API endpoint

/**
 * Verifies a document by uploading it to an OCR API.
 * @param {File} document - The document file to be verified.
 * @returns {Promise<Object>} - The OCR response containing extracted data.
 */
export const verifyDocument = async (document) => {
  const formData = new FormData();
  formData.append('file', document);

  try {
    const response = await axios.post(OCR_API_ENDPOINT, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during OCR verification:', error);
    throw new Error('Failed to verify document');
  }
};
