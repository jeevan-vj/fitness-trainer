
import React from 'react';
import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const FormSection = ({ title, description, children }: FormSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <FormLabel className="text-base">{title}</FormLabel>
        {description && <FormDescription>{description}</FormDescription>}
      </div>
      {children}
    </div>
  );
};
