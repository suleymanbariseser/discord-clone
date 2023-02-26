import type { z } from 'zod';
import { ZodError } from 'zod';

type ValidateOptions<T extends z.ZodRawShape> = {
  request: Request;
  schema: z.ZodObject<T>;
};

type ValidateResult<T extends z.ZodRawShape> =
  | {
      success: true;
      values: {
        [K in keyof T]: z.infer<T[K]>;
      };
    }
  | {
      success: false;
      errors?: Record<keyof T, string[]>;
    };

export const validate = async <T extends z.ZodRawShape>({
  request,
  schema,
}: ValidateOptions<T>): Promise<ValidateResult<T>> => {
  const body = Object.fromEntries(await request.formData());

  try {
    const values = schema.parse(body);

    return { success: true, values };
  } catch (error: any) {
    if (error instanceof ZodError) {
      return {
        success: false,
        errors: error.formErrors.fieldErrors as Record<keyof T, string[]>,
      };
    }

    return {
      success: false,
    }
  }
};
