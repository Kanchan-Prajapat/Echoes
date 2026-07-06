import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,

  limits: {
    fileSize: 50 * 1024 * 1024, // 50 MB
  },

 fileFilter: (_req, file, cb) => {

  console.log("Incoming MIME:", file.mimetype);

  cb(null, true);

},
});

export default upload;