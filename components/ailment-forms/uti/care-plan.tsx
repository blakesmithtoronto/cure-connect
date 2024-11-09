import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function CarePlan() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Care Plan, Follow-up and Monitoring</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="therapeuticGoal">Therapeutic Goal</Label>
            <Input id="therapeuticGoal" />
          </div>
          <div>
            <Label htmlFor="monitoringParameters">Monitoring Parameters (including timeframe)</Label>
            <Input id="monitoringParameters" />
          </div>
          <div>
            <Label htmlFor="conductedBy">Conducted by</Label>
            <Input id="conductedBy" />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" />
          </div>
          <div>
            <Label htmlFor="results">Results</Label>
            <Textarea id="results" />
          </div>
          <div>
            <Label htmlFor="followUp">Follow-up</Label>
            <Textarea id="followUp" />
          </div>
          <div>
            <Label htmlFor="additionalComments">Additional comments and recommendations</Label>
            <Textarea id="additionalComments" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}