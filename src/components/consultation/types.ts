
import * as z from "zod";

// Form schema with validation
export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  fitnessGoal: z.string().min(1, { message: "Please select your primary fitness goal." }),
  fitnessLevel: z.string().min(1, { message: "Please indicate your current fitness level." }),
  preferredTime: z.array(z.string()).min(1, { message: "Please select at least one preferred time." }),
  healthIssues: z.string().optional(),
  message: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions to proceed."
  })
});

export type ConsultationFormValues = z.infer<typeof formSchema>;

export interface ConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}
