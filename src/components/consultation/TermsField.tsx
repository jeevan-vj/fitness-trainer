
import React from 'react';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { ConsultationFormValues } from './types';

interface TermsFieldProps {
  form: UseFormReturn<ConsultationFormValues>;
}

export const TermsField = ({ form }: TermsFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="acceptTerms"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              I accept the terms and conditions
            </FormLabel>
            <FormDescription>
              You agree to our terms of service and privacy policy.
            </FormDescription>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
