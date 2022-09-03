import { chromium } from 'k6/x/browser'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js'

import { testSetup } from './test-setup.js'
import { Homepage } from './pages/homepage.js'
import { AdminPanel } from './pages/admin-panel.js'

import { bookingData } from './data/booking-data.js'

export function setup() {
  testSetup()
}

export default function () {
  describe('Restful Booker Platform', () => {
    const browser = chromium.launch({ headless: false })
    const context = browser.newContext()
    const page = context.newPage()

    const { name, email, contactNumber, subject } = bookingData

    describe('Given a user submits a booking form', () => {
      // 01 - submit the booking form
      const homepage = new Homepage(page)
      homepage.goto()
      homepage.submitForm()

      expect(homepage.getVerificationMessage()).to.contain(name)
    })

    describe('When an admin logs in to the admin panel and view the messages', () => {
      // 02 - login to admin panel
      const adminPanel = new AdminPanel(page)
      adminPanel.login()

      expect(adminPanel.getLogoutButton()).to.equal('Logout')

      // 03 - open the message
      adminPanel.openMessage()

      // 04 - verify if message matches what was on the form
      const actualMessage = adminPanel.getMessage().innerText()

      expect(actualMessage).to.contain(name)
      expect(actualMessage).to.contain(email)
      expect(actualMessage).to.contain(contactNumber)
      expect(actualMessage).to.contain(subject)
    })

    page.close()
    browser.close()
  })
}