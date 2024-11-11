import { UseFormReturn } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

interface RedFlagsProps {
  form: UseFormReturn<any>
}

export default function RedFlags({ form }: RedFlagsProps) {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Check any red flags that apply to the patient. The presence of any red flags may indicate a more serious condition
        that requires immediate medical attention.
      </p>
      {[
        { name: "fever", label: "Fever (>38°C or 100.4°F)" },
        { name: "flankPain", label: "Flank pain" },
        { name: "nausea", label: "Nausea or vomiting" },
        { name: "rigors", label: "Rigors (shaking chills)" },
        { name: "acutelyIll", label: "Patient appears acutely ill" },
        { name: "immunocompromised", label: "Patient is immunocompromised" },
        { name: "recurrentInfection", label: "Recurrent UTI (≥3 in 12 months or ≥2 in 6 months)" },
        { name: "failedTreatment", label: "Failed treatment of UTI in the past 