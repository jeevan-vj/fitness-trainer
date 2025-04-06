
import React from 'react';
import { ConsultationForm, ConsultationFormTrigger } from '@/components/ConsultationForm';
import { useIsMobile } from '@/hooks/use-mobile';

export function MobileConsultationFormTrigger({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();
  
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
