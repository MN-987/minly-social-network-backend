import multer from "multer";

export const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    // The function should call `cb` with a boolean
    // To indicate if the file should be accepted

    if (!file.mimetype.match(/png||jpeg||jpg||gif$i||mp4/)) {
        console.log("entered here")
      cb(new Error("File does not support"), false);
      return;
    }
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      cb(new Error("File size exceeds the limit"), false);
      return;
    }

    cb(null, true);
  },
});
