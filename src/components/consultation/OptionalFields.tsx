
import React from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ConsultationFormValues } from './types';

interface OptionalFieldsProps {
  form: UseFormReturn<ConsultationFormValues>;
}

export const OptionalFields = ({ form }: OptionalFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="healthIssues"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Health Concerns (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Please list any injuries, conditions, or health concerns your trainer should be aware of." 
                className="min-h-[80px]" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Additional Information (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Tell us anything else that might help us prepare for your consultation." 
                className="min-h-[80px]" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
