"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import Disclaimer from "@/components/ailment-forms/uti/disclaimer";
import PatientInformation from "@/components/ailment-forms/uti/patient-information";
import PatientHistory from "@/components/ailment-forms/uti/patient-history";
import HealthcareProviders from "@/components/ailment-forms/uti/healthcare-providers";
import SocialHistory from "@/components/ailment-forms/uti/social-history";
import Symptoms from "@/components/ailment-forms/uti/symptoms";
import DifferentialDiagnosis from "@/components/ailment-forms/uti/differential-diagnosis";
import RedFlags from "@/components/ailment-forms/uti/red-flags";
import Referral from "@/components/ailment-forms/uti/referral";
import TreatmentOptions from "@/components/ailment-forms/uti/treatment-options";
import CarePlan from "@/components/ailment-forms/uti/care-plan";
import PatientConsent from "@/components/ailment-forms/uti/patient-consent";
import PharmacistInformation from "@/components/ailment-forms/uti/pharmacist-information";

const formSchema = z.object({
  patientInformation: z.object({
    lastName: z.string().min(1, "Last name is required"),
    firstName: z.string().min(1, "First name is required"),
    address: z.string().min(1, "Address is required"),
    patientIdentifier: z.string().min(1, "Patient identifier is required"),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    height: z.string().min(1, "Height is required"),
    weight: z.string().min(1, "Weight is required"),
    sex: z.enum(["female", "male", "other"]),
    phoneNumber: z.string().min(1, "Phone number is required"),
    otherContact: z.string().optional(),
  }),
  patientHistory: z.object({
    medicalConditions: z.string(),
    prescriptionMedications: z.string(),
    allergies: z.string(),
    otcMedications: z.string(),
    vitamins: z.string(),
    smoking: z.string(),
    smokingFrequency: z.enum(["day", "week", "month"]),
    pregnancy: z.enum(["yes", "no", "unknown"]),
    pregnancyTrimester: z.string().optional(),
    hepaticImpairment: z.enum(["yes", "no"]),
    renalImpairment: z.enum(["yes", "no"]),
  }),
  healthcareProviders: z.object({
    primaryProvider: z.string(),
    otherProviders: z.string(),
  }),
  socialHistory: z.object({
    pregnancy: z.enum(["yes", "no", "unknown"]),
    pregnancyTrimester: z.string().optional(),
    diet: z.string(),
    alcoholUse: z.string(),
    caffeineIntake: z.string(),
    recreationalDrugUse: z.string(),
    isSmoker: z.enum(["yes", "no"]),
    smoking: z.string().optional(),
    smokingFrequency: z.enum(["day", "week", "month"]).optional(),
    physicalActivity: z.string(),
    other: z.string(),
  }),
  symptoms: z.object({
    dysuria: z.boolean(),
    frequentUrination: z.boolean(),
    suprapubicPain: z.boolean(),
    urinaryUrgency: z.boolean(),
    other: z.boolean(),
    otherDescription: z.string().optional(),
    patientExpectations: z.string(),
  }),
  differentialDiagnosis: z.object({
    systemicSymptoms: z.boolean(),
    male: z.boolean(),
    ageUnder12: z.boolean(),
    urologicAbnormalities: z.boolean(),
    catheter: z.boolean(),
    pregnant: z.boolean(),
    renalTransplant: z.boolean(),
    diabetes: z.boolean(),
    immunocompromised: z.boolean(),
    flankPain: z.boolean(),
    hematuria: z.boolean(),
    icDysuria: z.boolean(),
    icFrequentUrination: z.boolean(),
    icUrinaryUrgency: z.boolean(),
    icNoInfection: z.boolean(),
    icNoOtherCause: z.boolean(),
    icChronic: z.boolean(),
    vDysuria: z.boolean(),
    pruritis: z.boolean(),
    dyspareunia: z.boolean(),
    vaginalDischarge: z.boolean(),
    noFrequentUrination: z.boolean(),
    noUrinaryUrgency: z.boolean(),
    penileUlcerations: z.boolean(),
    urethralDischarge: z.boolean(),
    pelvicPerinealPain: z.boolean(),
    radiatingPain: z.boolean(),
    urinaryHesitancy: z.boolean(),
    lowerAbdominalPain: z.boolean(),
    pidFever: z.boolean(),
    pidDysuria: z.boolean(),
    nausea: z.boolean(),
    pnFlankPain: z.boolean(),
    cvaTenderness: z.boolean(),
    other: z.string(),
  }),
  redFlags: z.object({
    fever: z.boolean(),
    flankPain: z.boolean(),
    nausea: z.boolean(),
    rigors: z.boolean(),
    acutelyIll: z.boolean(),
    immunocompromised: z.boolean(),
    recurrentInfection: z.boolean(),
    failedTreatment: z.boolean(),
    hematuria: z.boolean(),
  }),
  referral: z.object({
    referredTo: z.enum([
      "physician",
      "nursePractitioner",
      "emergencyDepartment",
      "other",
    ]),
    otherReferral: z.string().optional(),
    name: z.string(),
    role: z.string(),
    practiceAddress: z.string(),
    phone: z.string(),
    fax: z.string(),
    rationale: z.string(),
  }),
  treatmentOptions: z.object({
    fosfomycin: z.boolean(),
    nitrofurantoin: z.boolean(),
    trimethoprim: z.boolean(),
    smxTmp: z.boolean(),
    other: z.boolean(),
    otherSpecify: z.string().optional(),
    strength: z.string(),
    quantity: z.string(),
    directions: z.string(),
    additionalInstructions: z.string(),
    rationale: z.string(),
  }),
  carePlan: z.object({
    therapeuticGoal: z.string(),
    monitoringParameters: z.string(),
    conductedBy: z.string(),
    date: z.string(),
    results: z.string(),
    followUp: z.string(),
    additionalComments: z.string(),
  }),
  patientConsent: z.object({
    isPatient: z.boolean(),
    isAgent: z.boolean(),
    agentRelationship: z.string().optional(),
    receivedAssessment: z.boolean(),
    consentPrescription: z.boolean(),
    permitNotification: z.boolean(),
    name: z.string(),
    signature: z.string(),
    date: z.string(),
  }),
  pharmacistInformation: z.object({
    usedProfessionalJudgement: z.boolean(),
    name: z.string(),
    licenseNumber: z.string(),
    signature: z.string(),
    date: z.string(),
    phone: z.string(),
    email: z.string().email(),
    fax: z.string(),
    pharmacyAddress: z.string(),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const components = [
  { name: "Disclaimer", component: Disclaimer },
  { name: "Patient Information", component: PatientInformation },
  { name: "Patient History", component: PatientHistory },
  { name: "Healthcare Providers", component: HealthcareProviders },
  { name: "Social History", component: SocialHistory },
  { name: "Symptoms", component: Symptoms },
  // { name: 'Differential Diagnosis', component: DifferentialDiagnosis },
  // { name: 'Red Flags', component: RedFlags },
  { name: "Referral", component: Referral },
  { name: "Treatment Options", component: TreatmentOptions },
  { name: "Care Plan", component: CarePlan },
  { name: "Patient Consent", component: PatientConsent },
  { name: "Pharmacist Information", component: PharmacistInformation },
];

export default function UTIAssessmentForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientInformation: {
        lastName: "",
        firstName: "",
        address: "",
        patientIdentifier: "",
        dateOfBirth: "",
        height: "",
        weight: "",
        sex: "female",
        phoneNumber: "",
        otherContact: "",
      },
      patientHistory: {
        medicalConditions: "",
        prescriptionMedications: "",
        allergies: "",
        otcMedications: "",
        vitamins: "",
        smoking: "",
        smokingFrequency: "day",
        pregnancy: "unknown",
        pregnancyTrimester: "",
        hepaticImpairment: "no",
        renalImpairment: "no",
      },
      healthcareProviders: {
        primaryProvider: "",
        otherProviders: "",
      },
      socialHistory: {
        pregnancy: "unknown",
        pregnancyTrimester: "",
        diet: "",
        alcoholUse: "",
        caffeineIntake: "",
        recreationalDrugUse: "",
        isSmoker: "no",
        smoking: "",
        smokingFrequency: "day",
        physicalActivity: "",
        other: "",
      },
      symptoms: {
        dysuria: false,
        frequentUrination: false,
        suprapubicPain: false,
        urinaryUrgency: false,
        other: false,
        otherDescription: "",
        patientExpectations: "",
      },
      differentialDiagnosis: {
        systemicSymptoms: false,
        male: false,
        ageUnder12: false,
        urologicAbnormalities: false,
        catheter: false,
        pregnant: false,
        renalTransplant: false,
        diabetes: false,
        immunocompromised: false,
        flankPain: false,
        hematuria: false,
        icDysuria: false,
        icFrequentUrination: false,
        icUrinaryUrgency: false,
        icNoInfection: false,
        icNoOtherCause: false,
        icChronic: false,
        vDysuria: false,
        pruritis: false,
        dyspareunia: false,
        vaginalDischarge: false,
        noFrequentUrination: false,
        noUrinaryUrgency: false,
        penileUlcerations: false,
        urethralDischarge: false,
        pelvicPerinealPain: false,
        radiatingPain: false,
        urinaryHesitancy: false,
        lowerAbdominalPain: false,
        pidFever: false,
        pidDysuria: false,
        nausea: false,
        pnFlankPain: false,
        cvaTenderness: false,
        other: "",
      },
      redFlags: {
        fever: false,
        flankPain: false,
        nausea: false,
        rigors: false,
        acutelyIll: false,
        immunocompromised: false,
        recurrentInfection: false,
        failedTreatment: false,
        hematuria: false,
      },
      referral: {
        referredTo: "physician",
        otherReferral: "",
        name: "",
        role: "",
        practiceAddress: "",
        phone: "",
        fax: "",
        rationale: "",
      },
      treatmentOptions: {
        fosfomycin: false,
        nitrofurantoin: false,
        trimethoprim: false,
        smxTmp: false,
        other: false,
        otherSpecify: "",
        strength: "",
        quantity: "",
        directions: "",
        additionalInstructions: "",
        rationale: "",
      },
      carePlan: {
        therapeuticGoal: "",
        monitoringParameters: "",
        conductedBy: "",
        date: "",
        results: "",
        followUp: "",
        additionalComments: "",
      },
      patientConsent: {
        isPatient: false,
        isAgent: false,
        agentRelationship: "",
        receivedAssessment: false,
        consentPrescription: false,
        permitNotification: false,
        name: "",
        signature: "",
        date: "",
      },
      pharmacistInformation: {
        usedProfessionalJudgement: false,
        name: "",
        licenseNumber: "",
        signature: "",
        date: "",
        phone: "",
        email: "",
        fax: "",
        pharmacyAddress: "",
      },
    },
  });

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

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  const CurrentComponent = components[currentStep].component;
  const progress = ((currentStep + 1) / components.length) * 100;

  return (
    <div className="container mx-auto px-4 pb-8 max-w-md mb-24">
      <div className="py-4">
        <h1 className="font-semibold capitalize">
          patient assessment & prescribing form
        </h1>
        <h2 className="text-xs font-medium capitalize">
          uncomplicated urinary tract infection
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>{components[currentStep].name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full pr-4">
                <div className="space-y-4">
                  <CurrentComponent form={form} />
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </form>
      </Form>

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
              <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
