
import React from 'react';
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ConsultationFormValues } from './types';
import { PersonalInfoFields } from './PersonalInfoFields';
import { FitnessGoalField } from './FitnessGoalField';
import { FitnessLevelField } from './FitnessLevelField';
import { PreferredTimeField } from './PreferredTimeField';
import { OptionalFields } from './OptionalFields';
import { TermsField } from './TermsField';

interface ConsultationFormContentProps {
  form: UseFormReturn<ConsultationFormValues>;
  onSubmit: (data: ConsultationFormValues) => void;
}

export const ConsultationFormContent = ({ form, onSubmit }: ConsultationFormContentProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <PersonalInfoFields form={form} />
          <FitnessGoalField form={form} />
          <FitnessLevelField form={form} />
          <PreferredTimeField form={form} />
          <OptionalFields form={form} />
          <TermsField form={form} />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-fitness-primary hover:bg-fitness-primary/90 text-white"
        >
          Submit Request <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
};
