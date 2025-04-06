
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage, 
  FormDescription 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerFooter, DrawerTrigger } from "@/components/ui/drawer";
import { Check, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Form schema with validation
const formSchema = z.object({
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

interface ConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

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

  // Form content - reused in both mobile and desktop views
  const formContent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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

          <FormField
            control={form.control}
            name="fitnessLevel"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Current Fitness Level</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="beginner" />
                      <label htmlFor="beginner" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Beginner
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="intermediate" />
                      <label htmlFor="intermediate" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Intermediate
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advanced" id="advanced" />
                      <label htmlFor="advanced" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Advanced
                      </label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredTime"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Preferred Time for Sessions</FormLabel>
                  <FormDescription>
                    Select all that apply.
                  </FormDescription>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    { id: "morning", label: "Morning (6AM-10AM)" },
                    { id: "midday", label: "Midday (10AM-2PM)" },
                    { id: "afternoon", label: "Afternoon (2PM-6PM)" },
                    { id: "evening", label: "Evening (6PM-10PM)" },
                    { id: "weekend", label: "Weekends" },
                  ].map((item) => (
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
                <FormMessage />
              </FormItem>
            )}
          />

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
              {formContent}
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
            {formContent}
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
