import { bookingData } from '../data/booking-data.js'

export class Homepage {
  constructor(page) {
    this.page = page
    this.nameField = page.locator('[data-testid="ContactName"]')
    this.emailField = page.locator('[data-testid="ContactEmail"]')
    this.phoneField = page.locator('[data-testid="ContactPhone"]');
    this.subjectField = page.locator('[data-testid="ContactSubject"]');
    this.descField = page.locator('[data-testid="ContactDescription"]');
    this.submitButton = page.locator('#submitContact');
    this.verificationMessage = page.locator('.row.contact h2')
  }

  goto() {
    this.page.goto('https://automationintesting.online/')
    this.page.waitForNavigation()
  }

  submitForm() {
    const { name, email, contactNumber, subject, description } = bookingData

    this.nameField.type(name)
    this.emailField.type(email)
    this.phoneField.type(contactNumber)
    this.subjectField.type(subject)
    this.descField.type(description)
    this.submitButton.click()
  }

  getVerificationMessage() {
    this.page.screenshot({ path: 'screenshots/01_form-submission.png' })
    return this.verificationMessage.innerText()
  }
}