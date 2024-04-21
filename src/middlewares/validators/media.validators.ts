import joi from 'joi';

export  const postMediaValidator = joi.object().required().keys({
    file: joi.object().required(),
    uploaderUserId: joi.string().required()
});
