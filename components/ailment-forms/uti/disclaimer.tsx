import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Disclaimer() {
  return (
    <Card className="mb-6 debug">
      <CardHeader>
        <CardTitle>Disclaimer</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          PharmAchieve Corporation Ltd. ("PharmAchieve") is not a pharmacy or health care provider. This form is solely
          for licensed subscribers as an educational aid and its use is subject to our Terms and Conditions of Use available at
          https://qbank.pharmachieve.com/pharmachieve-terms.html (the "Terms"). You agree your use of this form is subject
          to the disclaimers, indemnities and limitations on liability in the Terms. The form only illustrates basic documentation
          for pharmacists in Ontario and is provided with no representations or warranties whatsoever, including the implied
          warranty of fitness for a particular purpose.
        </p>
        {/* Add more disclaimer text as needed */}
      </CardContent>
    </Card>
  )
}