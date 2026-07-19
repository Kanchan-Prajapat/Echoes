import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,

  limits: {
    fileSize: 50 * 1024 * 1024, // 50 MB
  },

 fileFilter: (_req, file, cb) => {


  cb(null, true);

},
});

export default upload;