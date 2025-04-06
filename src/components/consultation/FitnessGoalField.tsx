
import React from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ConsultationFormValues } from './types';

interface FitnessGoalFieldProps {
  form: UseFormReturn<ConsultationFormValues>;
}

export const FitnessGoalField = ({ form }: FitnessGoalFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="fitnessGoal"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Primary Fitness Goal</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select your primary fitness goal" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="weight-loss">Weight Loss</SelectItem>
              <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
              <SelectItem value="strength">Strength Training</SelectItem>
              <SelectItem value="endurance">Endurance & Stamina</SelectItem>
              <SelectItem value="flexibility">Flexibility & Mobility</SelectItem>
              <SelectItem value="sports">Sports Performance</SelectItem>
              <SelectItem value="health">General Health & Wellness</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
