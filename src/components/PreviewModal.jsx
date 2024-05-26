import React, { useState } from 'react';
import Modal from 'react-modal';
import { Document, Page, pdfjs } from 'react-pdf';

// Set PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PreviewModal = ({ pdfUrl, isOpen, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onError(err) {
    setError(err.message || 'Failed to load PDF.');
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= numPages) {
      setPageNumber(page);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Preview PDF"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <div className="modal-header">
      </div>
      {error && <p className="error-msg">{error}</p>}
      <div className="pdf-container">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onError}
        >
          <Page pageNumber={pageNumber} width={1.75 * 400} />
        </Document>
        {!error && numPages && (
          <div className="page-navigation">
            <button onClick={() => goToPage(pageNumber - 1)} disabled={pageNumber === 1}>
              Previous Page
            </button>
            <p>Page {pageNumber} of {numPages}</p>
            <button onClick={() => goToPage(pageNumber + 1)} disabled={pageNumber === numPages}>
              Next Page
            </button>
          </div>
        )}
      </div>
      <button className="modal-close-btn" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default PreviewModal;