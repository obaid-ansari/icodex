const { ZodError } = require("zod");

const validatorMiddleware = (schema) => async (req, res, next) => {
  try {
    const validatedData = await schema.parseAsync(req.body);

    req.body = validatedData;
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      const errors = err.issues.map((issue) => ({
        message: issue.message,
      }));

      return next({
        status: 400,
        message: "Validation failed",
        errors,
      });
    }

    next(err);
  }
};

module.exports = validatorMiddleware;
