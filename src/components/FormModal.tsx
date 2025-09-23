import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import RevenueCalculator from "./RevenueCalculator";
import TerrainVisitForm from "./TerrainVisitForm";
import JoinFarmersForm from "./JoinFarmersForm";
import TestimonialForm from "./TestimonialForm";

interface FormModalProps {
  type: "revenue" | "visit" | "join" | "testimonial";
  children: React.ReactNode;
}

const FormModal = ({ type, children }: FormModalProps) => {
  const [open, setOpen] = useState(false);

  const renderForm = () => {
    switch (type) {
      case "revenue":
        return <RevenueCalculator />;
      case "visit":
        return <TerrainVisitForm />;
      case "testimonial":
        return <TestimonialForm />;
      case "join":
      default:
        return <JoinFarmersForm />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {renderForm()}
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;