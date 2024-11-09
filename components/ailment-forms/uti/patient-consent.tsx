import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PatientConsent() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Patient/Agent Consent</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="isPatient" />
            <Label htmlFor="isPatient">I am the patient</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="isAgent" />
            <Label htmlFor="isAgent">I am an agent of the patient and my relationship to the patient is:</Label>
            <Input className="w-40" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="receivedAssessment" />
            <Label htmlFor="receivedAssessment">I have received this assessment and been informed of the treatment options available</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="consentPrescription" />
            <Label htmlFor="consentPrescription">I consent to receiving the prescription and recommendations made as a result of this assessment</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="permitNotification" />
            <Label htmlFor="permitNotification">I permit the pharmacist to notify other health care providers of this assessment and prescription</Label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="patientName">Name</Label>
              <Input id="patientName" />
            </div>
            <div>
              <Label htmlFor="patientSignature">Signature</Label>
              <Input id="patientSignature" />
            </div>
            <div>
              <Label htmlFor="patientDate">Date</Label>
              <Input id="patientDate" type="date" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}