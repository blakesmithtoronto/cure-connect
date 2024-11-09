import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function DifferentialDiagnosis() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Differential Diagnosis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Complicated urinary tract infection</h3>
            <div className="flex items-center space-x-2">
              <Checkbox id="systemicSymptoms" />
              <Label htmlFor="systemicSymptoms">Systemic symptoms (e.g. fever, chills, extreme fatigue)</Label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Symptoms of uncomplicated UTI in patients with special considerations</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ageUnder12" />
                <Label htmlFor="ageUnder12">Age &lt;12 years</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="urologicAbnormalities" />
                <Label htmlFor="urologicAbnormalities">Patients with underlying urologic abnormalities (e.g. stents, urinary diversions)</Label>
              </div>
              {/* Add more checkboxes for other special considerations */}
            </div>
          </div>
          {/* Add more sections for other differential diagnoses */}
        </div>
      </CardContent>
    </Card>
  )
}