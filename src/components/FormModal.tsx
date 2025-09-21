import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import RevenueCalculator from "./RevenueCalculator";
import TerrainVisitForm from "./TerrainVisitForm";

interface FormModalProps {
  type: "revenue" | "visit";
  children: React.ReactNode;
}

const FormModal = ({ type, children }: FormModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {type === "revenue" ? <RevenueCalculator /> : <TerrainVisitForm />}
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;