import {request, response} from 'express';
import {validationResult} from 'express-validator'; 

const validatorFields = (req = request, res = response, next: any) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    next();
}

export default validatorFields;