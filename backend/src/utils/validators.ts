import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};

export const signinValidator = [
  body("email").trim().isEmail().withMessage("Enter a valid email"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Minimum length of the password is 6"),
];

export const signupValidator = [
  body("name").notEmpty().withMessage("A valid name is required"),
  ...signinValidator,
];

export const chatCompletionValidator = [
  body("message").notEmpty().withMessage("Message  is required"),
];