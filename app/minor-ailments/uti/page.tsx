"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Disclaimer } from "@/components/ailment-forms/uti/disclaimer";
import { PatientInformation } from "@/components/ailment-forms/uti/patient-information";
import { PatientHistory } from "@/components/ailment-forms/uti/patient-history";
import { Symptoms } from "@/components/ailment-forms/uti/symptoms";
import { DifferentialDiagnosis } from "@/components/ailment-forms/uti/differential-diagnosis";
import { RedFlags } from "@/components/ailment-forms/uti/red-flags";
import { Referral } from "@/components/ailment-forms/uti/referral";
import { TreatmentOptions } from "@/components/ailment-forms/uti/treatment-options";
import { CarePlan } from "@/components/ailment-forms/uti/care-plan";
import { PatientConsent } from "@/components/ailment-forms/uti/patient-consent";
import { PharmacistInformation } from "@/components/ailment-forms/uti/pharmacist-information";

const components = [
  { name: "Disclaimer", component: Disclaimer },
  { name: "Patient Information", component: PatientInformation },
  { name: "Patient History", component: PatientHistory },
  { name: "Symptoms", component: Symptoms },
  { name: "Differential Diagnosis", component: DifferentialDiagnosis },
  { name: "Red Flags", component: RedFlags },
  { name: "Referral", component: Referral },
  { name: "Treatment Options", component: TreatmentOptions },
  { name: "Care Plan", component: CarePlan },
  { name: "Patient Consent", component: PatientConsent },
  { name: "Pharmacist Information", component: PharmacistInformation },
];

export default function UTIAssessmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (currentStep < components.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
  };

  const CurrentComponent = components[currentStep].component;
  const progress = ((currentStep + 1) / components.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8 max-w-md mb-24">
      <h1 className="font-semibold capitalize">
        patient assessment & prescribing form
      </h1>
      <h2 className="text-xs font-medium capitalize">
        uncomplicated urinary tract infection
      </h2>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{components[currentStep].name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CurrentComponent />
          </CardContent>
        </Card>
      </form>

      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
        <div className="container mx-auto max-w-md">
          <Progress value={progress} className="mb-2" />
          <div className="flex justify-between items-center">
            <Button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              variant="outline"
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {components.length}
            </span>
            {currentStep < components.length - 1 ? (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
