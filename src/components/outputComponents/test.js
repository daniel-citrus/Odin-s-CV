// require dependencies
const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');

// create a document the same way as above
const doc = new PDFDocument();

// pipe the document to a blob
const stream = doc.pipe(blobStream());

// add your content to the document here, as usual

// get a blob when you're done
doc.end();
