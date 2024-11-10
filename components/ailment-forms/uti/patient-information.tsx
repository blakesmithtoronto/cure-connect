import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function PatientInformation() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="lastName">Last name</Label>
        <Input id="lastName" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="firstName">First name</Label>
        <Input id="firstName" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input id="address" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="patientIdentifier">Patient identifier</Label>
        <Input id="patientIdentifier" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="dob">Date of birth (YYYY/MM/DD)</Label>
        <Input id="dob" type="date" className="mt-1" />
      </div>
      <div>
        <Label>Sex</Label>
        <RadioGroup defaultValue="female" className="mt-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">F</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">M</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">Other</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Label htmlFor="phone">Phone number</Label>
        <Input id="phone" type="tel" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="otherContact">Other contact information</Label>
        <Input id="otherContact" className="mt-1" />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <Label htmlFor="height">Height</Label>
          <Input id="height" className="mt-1" />
        </div>
        <div className="flex-1">
          <Label htmlFor="weight">Weight</Label>
          <Input id="weight" className="mt-1" />
        </div>
      </div>
    </div>
  );
}
