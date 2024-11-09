'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Disclaimer } from '@/components/ailment-forms/uti/disclaimer'
import { PatientInformation } from '@/components/ailment-forms/uti/patient-information'
import { PatientHistory } from '@/components/ailment-forms/uti/patient-history'
import { Symptoms } from '@/components/ailment-forms/uti/symptoms'
import { DifferentialDiagnosis } from '@/components/ailment-forms/uti/differential-diagnosis'
import { RedFlags } from '@/components/ailment-forms/uti/red-flags'
import { Referral } from '@/components/ailment-forms/uti/referral'
import { TreatmentOptions } from '@/components/ailment-forms/uti/treatment-options'
import { CarePlan } from '@/components/ailment-forms/uti/care-plan'
import { PatientConsent } from '@/components/ailment-forms/uti/patient-consent'
import { PharmacistInformation } from '@/components/ailment-forms/uti/pharmacist-information'

export default function UTIAssessmentForm() {
  const [formData, setFormData] = useState({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">PATIENT ASSESSMENT & PRESCRIBING FORM</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">UNCOMPLICATED URINARY TRACT INFECTION</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Disclaimer />
        <PatientInformation />
        <PatientHistory />
        <Symptoms />
        <DifferentialDiagnosis />
        <RedFlags />
        <Referral />
        <TreatmentOptions />
        <CarePlan />
        <PatientConsent />
        <PharmacistInformation />
        
        <Button type="submit" className="w-full">Submit Assessment</Button>
      </form>
    </div>
  )
}