import multer from 'multer';

export const upload= multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {

        // The function should call `cb` with a boolean
        // to indicate if the file should be accepted

        if (!file.mimetype.match(/png||jpeg||jpg||gif$i||mp4/)) {
            // You can always pass an error if something goes wrong:
            cb(new Error('File does not support'), false);
            return;
        }
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            // Check if file size exceeds the limit
            cb(new Error('File size exceeds the limit'), false);
            return;
        }

        // To accept the file pass `true`, like so:
        cb(null, true);
    }
});