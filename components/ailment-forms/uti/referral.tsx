import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export function Referral() {
  return (
    <div className="space-y-4">
      <div>
        <Label>
          Based on the information gathered from this patient assessment, the
          patient was referred to a health care provider:
        </Label>
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="physician" id="physician" />
            <Label htmlFor="physician">Physician</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="nursePractitioner" id="nursePractitioner" />
            <Label htmlFor="nursePractitioner">Nurse practitioner</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="emergencyDepartment"
              id="emergencyDepartment"
            />
            <Label htmlFor="emergencyDepartment">Emergency department</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="otherReferral" />
            <Label htmlFor="otherReferral">Other</Label>
            <Input className="w-40" placeholder="Specify" />
          </div>
        </RadioGroup>
      </div>
      <div>
        <Label htmlFor="referralName">Name</Label>
        <Input id="referralName" />
      </div>
      <div>
        <Label htmlFor="referralRole">Role</Label>
        <Input id="referralRole" />
      </div>
      <div>
        <Label htmlFor="referralAddress">Practice address</Label>
        <Input id="referralAddress" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="referralPhone">Phone</Label>
          <Input id="referralPhone" type="tel" />
        </div>
        <div>
          <Label htmlFor="referralFax">Fax</Label>
          <Input id="referralFax" type="tel" />
        </div>
      </div>
      <div>
        <Label htmlFor="referralRationale">
          Rationale for referral / additional information
        </Label>
        <Textarea id="referralRationale" />
      </div>
    </div>
  );
}
