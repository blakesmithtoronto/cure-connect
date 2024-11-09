import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function PatientHistory() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Patient History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="medicalConditions">Medical conditions</Label>
            <Textarea id="medicalConditions" />
          </div>
          <div>
            <Label htmlFor="prescriptionMedications">Prescription medications</Label>
            <Textarea id="prescriptionMedications" />
          </div>
          <div>
            <Label htmlFor="allergies">Allergies</Label>
            <Textarea id="allergies" />
          </div>
          <div>
            <Label htmlFor="otcMedications">Over-the-counter/herbal medications</Label>
            <Textarea id="otcMedications" />
          </div>
          <div>
            <Label htmlFor="vitamins">Vitamins/supplements</Label>
            <Textarea id="vitamins" />
          </div>
          <div>
            <Label htmlFor="smoking">Smoking</Label>
            <Input id="smoking" />
            <RadioGroup defaultValue="day">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="day" id="day" />
                <Label htmlFor="day">per day</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="week" id="week" />
                <Label htmlFor="week">per week</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="month" id="month" />
                <Label htmlFor="month">per month</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label>Pregnancy</Label>
            <RadioGroup>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="pregnancyYes" />
                <Label htmlFor="pregnancyYes">Yes</Label>
                <Input placeholder="Trimester" className="w-24 ml-2" />
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="pregnancyNo" />
                <Label htmlFor="pregnancyNo">No</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unknown" id="pregnancyUnknown" />
                <Label htmlFor="pregnancyUnknown">Unknown</Label>
              </div>
            </RadioGroup>
          </div>
          {/* Add more patient history fields as needed */}
        </div>
      </CardContent>
    </Card>
  )
}