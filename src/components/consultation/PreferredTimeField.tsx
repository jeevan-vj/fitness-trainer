
import React from 'react';
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { ConsultationFormValues } from './types';
import { FormSection } from './FormSection';

interface PreferredTimeFieldProps {
  form: UseFormReturn<ConsultationFormValues>;
}

export const PreferredTimeField = ({ form }: PreferredTimeFieldProps) => {
  const timeOptions = [
    { id: "morning", label: "Morning (6AM-10AM)" },
    { id: "midday", label: "Midday (10AM-2PM)" },
    { id: "afternoon", label: "Afternoon (2PM-6PM)" },
    { id: "evening", label: "Evening (6PM-10PM)" },
    { id: "weekend", label: "Weekends" },
  ];

  return (
    <FormField
      control={form.control}
      name="preferredTime"
      render={() => (
        <FormItem>
          <FormSection 
            title="Preferred Time for Sessions" 
            description="Select all that apply."
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {timeOptions.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
          </FormSection>
        </FormItem>
      )}
    />
  );
};
