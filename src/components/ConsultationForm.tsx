
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ConsultationFormContent } from './consultation/ConsultationFormContent';
import { formSchema, ConsultationFormProps, ConsultationFormValues } from './consultation/types';

export function ConsultationForm({ open, onOpenChange, onSuccess }: ConsultationFormProps) {
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // Form setup
  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      fitnessGoal: "",
      fitnessLevel: "beginner",
      preferredTime: [],
      healthIssues: "",
      message: "",
      acceptTerms: false
    },
  });

  // Form submission
  const onSubmit = (data: ConsultationFormValues) => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", data);
    
    toast({
      title: "Consultation Request Submitted!",
      description: "We'll get back to you within 24 hours to schedule your free consultation.",
    });
    
    form.reset();
    onOpenChange(false);
    if (onSuccess) onSuccess();
  };

  // Responsive UI - Different components for mobile and desktop
  return (
    <>
      {isMobile ? (
        <Drawer open={open} onOpenChange={onOpenChange}>
          <DrawerContent className="px-4 pb-6 max-h-[90vh] overflow-y-auto">
            <DrawerHeader className="text-center">
              <DrawerTitle className="text-2xl font-bold">Book a Free Consultation</DrawerTitle>
              <DrawerDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4">
              <ConsultationFormContent form={form} onSubmit={onSubmit} />
            </div>
            <DrawerFooter className="flex justify-start items-center px-2 py-2 bg-gray-50 rounded-md mt-2">
              <div className="flex items-center text-sm text-gray-600">
                <Check className="mr-2 h-4 w-4 text-fitness-primary" />
                Your information is secure and will never be shared.
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Book a Free Consultation</DialogTitle>
              <DialogDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <ConsultationFormContent form={form} onSubmit={onSubmit} />
            <DialogFooter className="flex justify-start items-center px-2 py-2 bg-gray-50 rounded-md mt-2">
              <div className="flex items-center text-sm text-gray-600">
                <Check className="mr-2 h-4 w-4 text-fitness-primary" />
                Your information is secure and will never be shared with third parties.
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

// Exportable trigger component
export function ConsultationFormTrigger({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  
  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </span>
      <ConsultationForm 
        open={open} 
        onOpenChange={setOpen} 
      />
    </>
  );
}
